function pegandoLink() {
    let personagem = document.getElementById("personagem").value;
    let link = `https://www.amiiboapi.com/api/amiibo/?name=${personagem}`;
    return link;
  }

  document.querySelector("form").addEventListener("submit", async function(event) {
    event.preventDefault();
    link = pegandoLink();
    let resposta = await fetch(link);
    let dados = await resposta.json();
    dados = dados.amiibo
    let tamanho = dados.length;
    let character = dados[0].character
    let amiiboSeries = dados[0].amiiboSeries
    let gameSeries = dados[0].gameSeries
    let image = dados[0].image
    let name = dados[0].name
    let release = dados[0].release.jp
    console.log(dados);

    let Htmlparicoes = document.getElementById("aparicao");
    Htmlparicoes.innerHTML = `
    <div id="aparicao" class="texto">aparicao:${tamanho}</div>
    `
    let Htmlname = document.getElementById("name")
    Htmlname.innerHTML = `
    <div id="name" class="texto">nome:${name}</div>
    `
    let Htmlcharacter = document.getElementById("character")
    Htmlcharacter.innerHTML = `
    <div id="character" class="texto">personagem:${character}</div>
    `
    let HtmlamiiboSeries = document.getElementById("AmiiboSeries")
    HtmlamiiboSeries.innerHTML = `
    <div id="AmiiboSeries" class="texto">amiiboSeries:${amiiboSeries}</div>
    `
    let HtmlgameSeries = document.getElementById("gameSeries")
    HtmlgameSeries.innerHTML = `
    <div id="gameSeries" class="texto">gameSeries:v${gameSeries}</div>
    `
    let Htmlrelease = document.getElementById("release")
    Htmlrelease.innerHTML = `
    <div id="release" class="texto">lançamento:${release}</div>
    `
    

})