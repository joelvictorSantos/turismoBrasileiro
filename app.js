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

async function pesquisar() {
  await pontosTuristicosCarregados;
  const termo = campoPesquisa.value.trim().toLowerCase();
  resultados.innerHTML = "";
  if (!termo) {
    resultados.innerHTML = '<p class="empty-result">Digite uma cidade ou destino para começar sua descoberta.</p>';
    return;
  }

  const destinosEncontrados = dados.filter(dado =>
    dado.titulo.toLowerCase().includes(termo) || dado.descricao.toLowerCase().includes(termo)
  );
  const pontosEncontrados = pontosTuristicos.filter(ponto =>
    `${ponto.titulo} ${ponto.cidade} ${ponto.descricao}`.toLowerCase().includes(termo)
  );

  if (!destinosEncontrados.length && !pontosEncontrados.length) {
    resultados.innerHTML = `<p class="empty-result">Nenhum destino encontrado para “${escapeHtml(termo)}”. Tente outra cidade.</p>`;
    return;
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

  resultados.innerHTML = [...cardsDeDestinos, ...cardsDePontos].join("");
}

formPesquisa.addEventListener("submit", event => { event.preventDefault(); pesquisar(); });
