const formPesquisa = document.getElementById("form-pesquisa");
const campoPesquisa = document.getElementById("campo-pesquisa");
const resultados = document.getElementById("resultados-pesquisa");
const backgroundImages = [...document.querySelectorAll(".background-slider img")];
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

function resumirTexto(texto, limite = 190) {
  if (texto.length <= limite) {
    return texto;
  }

  const trecho = texto.slice(0, limite).replace(/\s+\S*$/, "");
  return `${trecho}...`;
}

async function buscarNaWikidata(termo) {
  const termoSparql = termo.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
  const query = `
    SELECT DISTINCT ?item ?itemLabel ?article ?coord ?city ?cityLabel WHERE {
      SERVICE wikibase:mwapi {
        bd:serviceParam wikibase:endpoint "www.wikidata.org";
          wikibase:api "EntitySearch";
          mwapi:search "${termoSparql}";
          mwapi:language "pt".
        ?item wikibase:apiOutputItem mwapi:item.
      }
      ?item wdt:P17 wd:Q155.
      VALUES ?categoria {
        wd:Q515
        wd:Q486972
        wd:Q570116
        wd:Q811979
        wd:Q618123
      }
      ?item wdt:P31/wdt:P279* ?categoria.
      ?article schema:about ?item;
        schema:isPartOf <https://pt.wikipedia.org/>.
      OPTIONAL { ?item wdt:P625 ?coord. }
      OPTIONAL {
        ?item wdt:P131 ?city.
        ?city rdfs:label ?cityLabel.
        FILTER(LANG(?cityLabel) = "pt")
      }
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
    artigo: binding.article.value,
    cidade: binding.cityLabel?.value,
    coordenadas: binding.coord?.value
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
    link: pagina.content_urls?.desktop?.page || candidato.artigo,
    cidade: candidato.cidade,
    coordenadas: candidato.coordenadas
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
  const termoOriginal = campoPesquisa.value.trim();
  const termo = normalizarTermo(termoOriginal);
  resultados.innerHTML = "";
  if (!termo) {
    resultados.innerHTML = '<p class="empty-result">Digite uma cidade ou destino para começar sua descoberta.</p>';
    return;
  }

  resultados.innerHTML = '<p class="empty-result">Consultando Wikidata e Wikipedia...</p>';
  let resultadosRemotos = [];
  try {
    resultadosRemotos = await buscarNasApis(termoOriginal);
  } catch (error) {
    console.error("Erro ao consultar Wikidata/Wikipedia:", error);
    resultados.innerHTML = `
      <div class="empty-result error-result" role="alert">
        <strong>Não foi possível carregar os resultados.</strong>
        <span>Sinto muito. As fontes de informação podem estar temporariamente indisponíveis. Tente novamente em alguns instantes.</span>
      </div>
    `;
    return;
  }

  const cardsRemotos = resultadosRemotos.map(resultado => `
    <article class="item-resultado">
      <span class="result-type">Wikidata · Wikipedia</span>
      ${resultado.imagem ? `<img class="result-image" src="${escapeHtml(resultado.imagem)}" alt="">` : ""}
      <h2>${escapeHtml(resultado.titulo)}</h2>
      <p>${escapeHtml(resumirTexto(resultado.descricao))}</p>
      <a href="detalhes.html?titulo=${encodeURIComponent(resultado.titulo)}&cidade=${encodeURIComponent(resultado.cidade || "")}&coordenadas=${encodeURIComponent(resultado.coordenadas || "")}">Ler conteúdo completo →</a>
    </article>
  `);

  resultados.innerHTML = cardsRemotos.length
    ? cardsRemotos.join("")
    : `<p class="empty-result">Nenhum destino encontrado para “${escapeHtml(termoOriginal)}”. Tente outra cidade ou atração.</p>`;
}

if (formPesquisa) {
  formPesquisa.addEventListener("submit", event => { event.preventDefault(); pesquisar(); });
}
