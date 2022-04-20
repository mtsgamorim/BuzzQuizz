const paginaInicial = document.querySelector(".PaginaInicial");
const paginaQuizz = document.querySelector(".PaginaDoQuizz");
const paginaCriacao = document.querySelector(".TerceiraCriacao");

function irParaCriacaoQuizz() {
    paginaInicial.classList.add("esconder");
    paginaCriacao.classList.remove("esconder");
    document.querySelector(".inicio").classList.remove("esconder");
}

function informacaoCriarQuizz() {
    //PEGAR INFORMAÇOES DO IMPUT E TRATA-LAS


    document.querySelector(".inicio").classList.add("esconder");
    document.querySelector(".parte2").classList.remove("esconder");
}

function dadosDasPerguntas() {
    //PEGAR INFORMAÇOES DO IMPUT E TRATA-LAS


    document.querySelector(".parte2").classList.add("esconder");
    document.querySelector(".parte3").classList.remove("esconder");
}

function finalizarPostarQuizz() {
    //PEGAR INFORMAÇOES DO IMPUT E TRATA-LAS
    // POSTAR O QUIZZ NA API

    document.querySelector(".parte3").classList.add("esconder");
    document.querySelector(".parte4").classList.remove("esconder");
}

function acessarQuizz() {
    document.querySelector(".parte4").classList.add("esconder");
    paginaQuizz.classList.remove("esconder");
}

function quizzParaHome() {
    paginaQuizz.classList.add("esconder");
    paginaInicial.classList.remove("esconder");
}

function criacaoParaHome() {
    document.querySelector(".parte4").classList.add("esconder");
    paginaInicial.classList.remove("esconder");
}
 function paginaInicialParaQuizz() {
    paginaInicial.classList.add("esconder");
    paginaQuizz.classList.remove("esconder");
 }







//BOTAO REINICIAR QUIZZ NÃO IMPLEMENTADO