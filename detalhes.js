const detalhesConteudo = document.getElementById("detalhes-conteudo");
const tituloDestino = new URLSearchParams(window.location.search).get("titulo");

function escapeHtml(value) {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  }[character]));
}

function iniciarTransicaoDeFundo() {
  const imagens = [...document.querySelectorAll(".background-slider img")];
  let atual = 0;
  if (!imagens.length) return;

  imagens[atual].classList.add("is-active");
  window.setInterval(() => {
    imagens[atual].classList.remove("is-active");
    atual = (atual + 1) % imagens.length;
    imagens[atual].classList.add("is-active");
  }, 9000);
}

async function carregarDetalhes() {
  if (!tituloDestino) {
    detalhesConteudo.innerHTML = '<p class="empty-result">Destino não informado. Volte para a busca e escolha um resultado.</p>';
    return;
  }

  try {
    const endpoint = `https://pt.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(tituloDestino)}`;
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error(`Wikipedia retornou ${response.status}`);

    const pagina = await response.json();
    document.title = `${pagina.title || tituloDestino} | Turismo Brasileiro`;
    detalhesConteudo.innerHTML = `
      <p class="eyebrow accent">Informações do destino</p>
      ${pagina.thumbnail?.source ? `<img class="details-image" src="${escapeHtml(pagina.thumbnail.source)}" alt="">` : ""}
      <h1>${escapeHtml(pagina.title || tituloDestino)}</h1>
      <p class="details-description">${escapeHtml(pagina.extract || "Não encontramos uma descrição completa para este destino.")}</p>
      <div class="details-actions">
        <a class="back-button" href="index.html">← Fazer outra pesquisa</a>
        ${pagina.content_urls?.desktop?.page ? `<a class="source-link" href="${escapeHtml(pagina.content_urls.desktop.page)}" target="_blank" rel="noopener noreferrer">Consultar fonte original →</a>` : ""}
      </div>
    `;
  } catch (error) {
    console.error("Erro ao carregar detalhes do destino:", error);
    detalhesConteudo.innerHTML = '<p class="empty-result">Não foi possível carregar este destino agora. Tente novamente em alguns instantes.</p>';
  }
}

iniciarTransicaoDeFundo();
carregarDetalhes();
