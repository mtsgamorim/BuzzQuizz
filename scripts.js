const paginaInicial = document.querySelector(".PaginaInicial");
const paginaQuizz = document.querySelector(".PaginaDoQuizz");
const paginaCriacao = document.querySelector(".TerceiraCriacao");

let tituloQuizz = "";
let imgQuizz;
let qntdPerguntas;
let qntdNiveis;

// ---------------------    AREA DOS BOTOES     ------------------------

function irParaCriacaoQuizz() {
    paginaInicial.classList.add("esconder");
    paginaCriacao.classList.remove("esconder");
    document.querySelector(".inicio").classList.remove("esconder");
}

function informacaoCriarQuizz() {
    //PEGAR INFORMAÇOES DO IMPUT E TRATA-LAS
    tituloQuizz = document.querySelector(".input_titulo").value;
    imgQuizz = document.querySelector(".input_url").value;
    qntdPerguntas = document.querySelector(".input_qntdPerguntas").value;
    qntdNiveis = document.querySelector(".input_qntdNiveisQuizz").value;

    if (tituloValido(tituloQuizz) && isValidHttpUrl(imgQuizz) && qntdPerguntasValido(Number(qntdPerguntas)) && qntdNivelValido(Number(qntdNiveis))) {
        document.querySelector(".inicio").classList.add("esconder");
        document.querySelector(".parte2").classList.remove("esconder");
    } else {
        alert("Você deve preencher os dados corretamente");
    }
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

// ---------------------    AREA DOS BOTOES     ------------------------

// ---------------------  Funcoes true false   ------------------------

const tituloValido = tituloQuizz => tituloQuizz.length >= 20 && tituloQuizz.length <= 65;

function isValidHttpUrl(string) {
    let url;

    try {
        url = new URL(string);
    } catch (_) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
const qntdPerguntasValido = qntdPerguntas => qntdPerguntas >= 3;

const qntdNivelValido = qntdNiveis => qntdNiveis >= 2;
