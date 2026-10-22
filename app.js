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

function pesquisar() {
  const termo = campoPesquisa.value.trim().toLowerCase();
  resultados.innerHTML = "";
  if (!termo) {
    resultados.innerHTML = '<p class="empty-result">Digite uma cidade ou destino para começar sua descoberta.</p>';
    return;
  }

  const encontrados = dados.filter(dado =>
    dado.titulo.toLowerCase().includes(termo) || dado.descricao.toLowerCase().includes(termo)
  );

  if (!encontrados.length) {
    resultados.innerHTML = `<p class="empty-result">Nenhum destino encontrado para “${escapeHtml(termo)}”. Tente outra cidade.</p>`;
    return;
  }

  resultados.innerHTML = encontrados.map(dado => {
    const link = escapeHtml(dado.link);
    return `<article class="item-resultado">
      <h2>${escapeHtml(dado.titulo)}</h2>
      <p>${escapeHtml(dado.descricao)}</p>
      <a href="${link}" target="_blank" rel="noopener noreferrer">Conhecer este destino →</a>
    </article>`;
  }).join("");
}

formPesquisa.addEventListener("submit", event => { event.preventDefault(); pesquisar(); });
