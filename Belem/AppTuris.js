// AppTuris.js
function informacao() {
    const containerInfo = document.querySelector('.container-info');
    containerInfo.innerHTML = '';

    pontosTuristicosPara.forEach(para => {
        const touristSpot = document.createElement('div');
        touristSpot.classList.add('tourist-spot');

        touristSpot.innerHTML = `
       <div class="tourist-spot">
        <div class="image-panel-lat">
           <img src="${para.imagem}" alt="${para.titulo}">
            </div>
        <div class="infomacaoCont">
        <h2>${para.titulo}</h2>
        <p>${para.descricao}</p>
    </div>
</div>
        `;


        containerInfo.appendChild(touristSpot);
    });
}
  
  // Chamar a função no carregamento da página
  window.onload = informacao;