/* Pegar os elementos no DOM  */
const botao = document.getElementById('botao');
const identificadorDeConselho = document.getElementById('id-conselho');
const conselho = document.getElementById('descricao-conselho');


async function pegarDadosDaApi(){
    const response = await fetch("https://api.adviceslip.com/advice")
    const conselhos = await response.json();
    const id = `Advice #${conselhos.slip.id}`;
    const texto = `"${conselhos.slip.advice}"`;

    identificadorDeConselho.innerHTML = id;
    conselho.innerHTML = texto;
}
pegarDadosDaApi();


botao.addEventListener("click", pegarDadosDaApi);
