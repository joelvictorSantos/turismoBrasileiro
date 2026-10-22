const formPesquisa = document.getElementById("form-pesquisa");
const campoPesquisa = document.getElementById("campo-pesquisa");
const resultados = document.getElementById("resultados-pesquisa");
const backgroundImages = [...document.querySelectorAll(".background-slider img")];
let pontosTuristicos = [];
const pontosTuristicosCarregados = fetch("pontos-turisticos.json")
  .then(response => {
    if (!response.ok) {
      throw new Error(`Não foi possível carregar pontos-turisticos.json (${response.status})`);
    }
    return response.json();
  })
  .then(pontos => {
    pontosTuristicos = pontos;
  })
  .catch(error => {
    console.error("Erro ao carregar o catálogo de pontos turísticos:", error);
  });
let activeBackground = 0;

function changeBackground() {
  backgroundImages[activeBackground].classList.remove("is-active");
  activeBackground = (activeBackground + 1) % backgroundImages.length;
  backgroundImages[activeBackground].classList.add("is-active");
}

if (backgroundImages.length) {
  backgroundImages[activeBackground].classList.add("is-active");
  window.setInterval(changeBackground, 9000);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[character]));
}

function normalizarTermo(value) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

async function buscarNaWikidata(termo) {
  const termoSparql = termo.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const query = `
    SELECT DISTINCT ?item ?itemLabel ?article WHERE {
      SERVICE wikibase:mwapi {
        bd:serviceParam wikibase:endpoint "www.wikidata.org";
          wikibase:api "EntitySearch";
          mwapi:search "${termoSparql}";
          mwapi:language "pt".
        ?item wikibase:apiOutputItem mwapi:item.
      }
      ?article schema:about ?item;
        schema:isPartOf <https://pt.wikipedia.org/>.
      SERVICE wikibase:label { bd:serviceParam wikibase:language "pt". }
    }
    LIMIT 5
  `;
  const endpoint = `https://query.wikidata.org/sparql?query=${encodeURIComponent(query)}&format=json`;
  const response = await fetch(endpoint, { headers: { Accept: "application/sparql-results+json" } });
  if (!response.ok) {
    throw new Error(`Wikidata retornou ${response.status}`);
  }

  const payload = await response.json();
  return payload.results.bindings.map(binding => ({
    titulo: binding.itemLabel.value,
    artigo: binding.article.value
  }));
}

async function buscarResumoNaWikipedia(candidato) {
  const tituloWikipedia = decodeURIComponent(candidato.artigo.split("/wiki/")[1] || "");
  if (!tituloWikipedia) {
    return null;
  }

  const endpoint = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(tituloWikipedia)}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    return null;
  }

  const pagina = await response.json();
  if (!pagina.extract) {
    return null;
  }

  return {
    titulo: pagina.title || candidato.titulo,
    descricao: pagina.extract,
    imagem: pagina.thumbnail?.source,
    link: pagina.content_urls?.desktop?.page || candidato.artigo
  };
}

async function buscarNasApis(termo) {
  const candidatos = await buscarNaWikidata(termo);
  const resumos = await Promise.all(candidatos.map(buscarResumoNaWikipedia));
  return resumos.filter(Boolean).filter((item, index, lista) =>
    lista.findIndex(resultado => resultado.titulo === item.titulo) === index
  );
}

async function pesquisar() {
  await pontosTuristicosCarregados;
  const termoOriginal = campoPesquisa.value.trim();
  const termo = normalizarTermo(termoOriginal);
  resultados.innerHTML = "";
  if (!termo) {
    resultados.innerHTML = '<p class="empty-result">Digite uma cidade ou destino para começar sua descoberta.</p>';
    return;
  }

  const destinosEncontrados = dados.filter(dado =>
    normalizarTermo(dado.titulo).includes(termo) || normalizarTermo(dado.descricao).includes(termo)
  );
  const pontosEncontrados = pontosTuristicos.filter(ponto =>
    normalizarTermo(`${ponto.titulo} ${ponto.cidade} ${ponto.descricao}`).includes(termo)
  );

  let resultadosRemotos = [];
  if (!destinosEncontrados.length && !pontosEncontrados.length) {
    resultados.innerHTML = '<p class="empty-result">Consultando Wikidata e Wikipedia...</p>';
    try {
      resultadosRemotos = await buscarNasApis(termoOriginal);
    } catch (error) {
      console.error("Erro ao consultar Wikidata/Wikipedia:", error);
    }
  }

  const cardsDeDestinos = destinosEncontrados.map(dado => {
    const link = escapeHtml(dado.link);
    return `<article class="item-resultado">
      <h2>${escapeHtml(dado.titulo)}</h2>
      <p>${escapeHtml(dado.descricao)}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer">Conhecer este destino →</a>
    </article>`;
  });

  const cardsDePontos = pontosEncontrados.map(ponto => {
    const link = escapeHtml(ponto.link);
    return `<article class="item-resultado">
      <span class="result-type">${escapeHtml(ponto.cidade)} · ponto turístico</span>
      <h2>${escapeHtml(ponto.titulo)}</h2>
      <p>${escapeHtml(ponto.descricao)}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer">Ver fonte e planejar visita →</a>
    </article>`;
  });

  const cardsRemotos = resultadosRemotos.map(resultado => `
    <article class="item-resultado">
      <span class="result-type">Wikidata · Wikipedia</span>
      ${resultado.imagem ? `<img class="result-image" src="${escapeHtml(resultado.imagem)}" alt="">` : ""}
      <h2>${escapeHtml(resultado.titulo)}</h2>
      <p>${escapeHtml(resultado.descricao)}</p>
      <a href="${escapeHtml(resultado.link)}" target="_blank" rel="noopener noreferrer">Ler fonte completa →</a>
    </article>
  `);

  const todosOsCards = [...cardsDeDestinos, ...cardsDePontos, ...cardsRemotos];
  resultados.innerHTML = todosOsCards.length
    ? todosOsCards.join("")
    : `<p class="empty-result">Nenhum destino encontrado para “${escapeHtml(termoOriginal)}”. Tente outra cidade ou atração.</p>`;
}

formPesquisa.addEventListener("submit", event => { event.preventDefault(); pesquisar(); });
