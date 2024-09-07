function pesquisar() {
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
    let resultados = document.getElementById("resultados-pesquisa");
    resultados.innerHTML = "";
  
    if (!campoPesquisa) {
      resultados.innerHTML = "<p>Digite algo para pesquisar.</p>";
      return;
    }
  
    let resultadoEncontrado = false;
    dados.forEach(dado => {
      if (dado.titulo.toLowerCase().includes(campoPesquisa) ||
          dado.descricao.toLowerCase().includes(campoPesquisa)) {
        resultados.innerHTML += `
          <div class="item-resultado">
            <h2><target="_blank">${dado.titulo}</a></h2>
            <p>${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
          </div>
       
        `;
        resultadoEncontrado = true;
      }
    });
  
    if (!resultadoEncontrado) {
      resultados.innerHTML = "<h2>Nenhum resultado encontrado para sua pesquisa.</h2>";
    }
  }
