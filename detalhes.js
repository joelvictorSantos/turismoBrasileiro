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
    const slug = encodeURIComponent(tituloDestino);
    const [resumoResponse, artigoResponse] = await Promise.all([
      fetch(`https://pt.wikipedia.org/api/rest_v1/page/summary/${slug}`),
      fetch(`https://pt.wikipedia.org/api/rest_v1/page/html/${slug}`)
    ]);
    if (!resumoResponse.ok || !artigoResponse.ok) {
      throw new Error(`Wikipedia retornou resumo ${resumoResponse.status} e artigo ${artigoResponse.status}`);
    }

    const pagina = await resumoResponse.json();
    const htmlDoArtigo = await artigoResponse.text();
    const documento = new DOMParser().parseFromString(htmlDoArtigo, "text/html");
    const paragrafos = [...documento.querySelectorAll("p")]
      .map(paragrafo => paragrafo.textContent.trim())
      .filter(paragrafo => paragrafo.length > 40);
    const textoCompleto = paragrafos.length ? paragrafos : [pagina.extract];

    document.title = `${pagina.title || tituloDestino} | Turismo Brasileiro`;
    detalhesConteudo.innerHTML = `
      <p class="eyebrow accent">Informações do destino</p>
      ${pagina.thumbnail?.source ? `<img class="details-image" src="${escapeHtml(pagina.thumbnail.source)}" alt="">` : ""}
      <h1>${escapeHtml(pagina.title || tituloDestino)}</h1>
      <div class="details-description">
        ${textoCompleto.map(paragrafo => `<p>${escapeHtml(paragrafo)}</p>`).join("")}
      </div>
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
