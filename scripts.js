const paginaInicial = document.querySelector(".PaginaInicial");
const paginaQuizz = document.querySelector(".PaginaDoQuizz");
const paginaCriacao = document.querySelector(".TerceiraCriacao");

let tituloQuizz = "";
let imgQuizz;
let qntdPerguntas;
let qntdNiveis;
let textoPergunta;
let corPergunta;
let textoResposta;
let imgRespostaCorreta;
let incorreta1;
let incorreta2;
let incorreta3;
let imgIncorreta1;
let imgIncorreta2;
let imgIncorreta3;

// ---------------------    AREA DOS BOTOES     ------------------------

function irParaCriacaoQuizz() {
    paginaInicial.classList.add("esconder");
    paginaCriacao.classList.remove("esconder");
    document.querySelector(".inicio").classList.remove("esconder");
}

function informacaoCriarQuizz() {
    tituloQuizz = document.querySelector(".input_titulo").value;
    imgQuizz = document.querySelector(".input_url").value;
    qntdPerguntas = document.querySelector(".input_qntdPerguntas").value;
    qntdNiveis = document.querySelector(".input_qntdNiveisQuizz").value;

    if (tituloValido(tituloQuizz) && isValidHttpUrl(imgQuizz) && qntdPerguntasValido(Number(qntdPerguntas)) && qntdNivelValido(Number(qntdNiveis))) {
        document.querySelector(".criarPerguntas").innerHTML = `<h2>Crie suas perguntas</h2>
        <div class="criacaoPergunta">
            <h3>Pergunta 1</h3>
            <input type="text" class="input_pergunta" placeholder="Texto da pergunta">
            <input type="text" class="input_cor" placeholder="Cor de fundo da pergunta">
            <h3>Resposta correta</h3>
            <input type="text" class="input_correta" placeholder="Resposta correta">
            <input type="text" class="input_img_correta" placeholder="URL da imagem">
            <h3>Respostas incorretas</h3>
            <input type="text" class="input_incorreta1" placeholder="Resposta incorreta 1">
            <input type="text" class="input_img_incorreta1" placeholder="URL da imagem 1">
            <div class="espacamento"></div>
            <input type="text" class="input_incorreta2" placeholder="Resposta incorreta 2">
            <input type="text" class="input_img_incorreta2" placeholder="URL da imagem 2">
            <div class="espacamento"></div>
            <input type="text" class="input_incorreta3" placeholder="Resposta incorreta 3">
            <input type="text" class="input_img_incorreta3" placeholder="URL da imagem 3">
        </div>`;
        for (let i = 2; i <= Number(qntdPerguntas); i++) {
            document.querySelector(".criarPerguntas").innerHTML += `<div class="criacaoPergunta">
            <div class="engloba">
                <!-- esconder aqui -->
                <h3>Pergunta ${i}</h3>
                <ion-icon name="create-outline" onclick="expandirPergunta(this)"></ion-icon>
            </div>
            <div class="oculto esconder">
                <!-- esconder aqui -->
                <h3>Pergunta ${i}</h3>
                <input type="text" class="input_pergunta" placeholder="Texto da pergunta">
                <input type="text" class="input_cor" placeholder="Cor de fundo da pergunta">
                <h3>Resposta correta</h3>
                <input type="text" class="input_correta" placeholder="Resposta correta">
                <input type="text" class="input_img_correta" placeholder="URL da imagem">
                <h3>Respostas incorretas</h3>
                <input type="text" class="input_incorreta1" placeholder="Resposta incorreta 1">
                <input type="text" class="input_img_incorreta1" placeholder="URL da imagem 1">
                <div class="espacamento"></div>
                <input type="text" class="input_incorreta2" placeholder="Resposta incorreta 2">
                <input type="text" class="input_img_incorreta2" placeholder="URL da imagem 2">
                <div class="espacamento"></div>
                <input type="text" class="input_incorreta3" placeholder="Resposta incorreta 3">
                <input type="text" class="input_img_incorreta3" placeholder="URL da imagem 3">
            </div>
        </div>`
        }
        document.querySelector(".criarPerguntas").innerHTML += `<div class="botaoProsseguir" onclick="dadosDasPerguntas()">
        <span>Prosseguir para criar níveis</span>
    </div>`


        document.querySelector(".inicio").classList.add("esconder");
        document.querySelector(".parte2").classList.remove("esconder");
    } else {
        alert("Você deve preencher os dados corretamente");
    }
}

function dadosDasPerguntas() {
    textoPergunta = document.querySelectorAll(".input_pergunta");

    corPergunta = document.querySelectorAll(".input_cor");

    textoResposta = document.querySelectorAll(".input_correta");

    imgRespostaCorreta = document.querySelectorAll(".input_img_correta");

    incorreta1 = document.querySelectorAll(".input_incorreta1");
    incorreta2 = document.querySelectorAll(".input_incorreta2");
    incorreta3 = document.querySelectorAll(".input_incorreta3");

    imgIncorreta1 = document.querySelectorAll(".input_img_incorreta1")
    imgIncorreta2 = document.querySelectorAll(".input_img_incorreta2")
    imgIncorreta3 = document.querySelectorAll(".input_img_incorreta3")


    // if (verificaPergunta() && verificaCor() && verificaResposta() && verificaImagemCorreta() && verificaImagemInCorreta()) {
    document.querySelector(".criarNiveis").innerHTML = `<div class="criarNiveis">
        <h2>Agora, decida os níveis</h2>
        <div class="criacaoNivel">
            <h3>Nível 1</h3>
            <input type="text" class="input_titulo_nivel1" placeholder="Título do nível">
            <input type="text" class="input_porcentagem1" placeholder="% de acerto  mínimo">
            <input type="text" class="input_img_nível1" placeholder="Cor de fundo da pergunta">
            <input type="text" class="input_descricao1" placeholder="Descrição do nível">
        </div>`
    for (let i = 2; i <= Number(qntdNiveis); i++) {
        document.querySelector(".criarNiveis").innerHTML += `<div class="criacaoNivel">
        <div class="engloba">
            <h3>Nível ${i}</h3>
            <ion-icon name="create-outline" onclick="expandirPergunta(this)"></ion-icon>
        </div>
        <div class="oculto esconder">
            <h3>Nível ${i}</h3>
            <input type="text" class="input_titulo_nivel2" placeholder="Título do nível">
            <input type="text" class="input_porcentagem2" placeholder="% de acerto  mínimo">
            <input type="text" class="input_img_nível2" placeholder="Cor de fundo da pergunta">
            <input type="text" class="input_descricao2" placeholder="Descrição do nível">
        </div>
    </div>`
    }
    document.querySelector(".criarNiveis").innerHTML += `<div class="botaoProsseguir" onclick="finalizarPostarQuizz()">
    <span>Finalizar Quizz</span>
</div>`


    document.querySelector(".parte2").classList.add("esconder");
    document.querySelector(".parte3").classList.remove("esconder");
    // } else {
    //   alert("Você deve preencher os dados corretamente");
    // }

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


function expandirPergunta(elemento) {
    const pai = elemento.parentNode;
    pai.classList.add("esconder");
    pai.parentNode.querySelector(".oculto").classList.remove("esconder");
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

function verificaPergunta() {
    for (let i = 0; i < Number(qntdPerguntas); i++) {
        if (textoPergunta[i].value.length <= 20) {
            console.log(`Vai dar false no ${i}`);
            return false;
        }
    }
    console.log("vai dar true");
    return true;
}

function verificaCor() {
    console.log(corPergunta[0].value);
    let arrayLetras = ["a", "b", "c", "d", "e", "f", "A", "B", "C", "D", "E", "F"];
    for (let i = 0; i < Number(qntdPerguntas); i++) {
        if (corPergunta[i].value.length !== 7 || corPergunta[i].value[0] !== "#") {
            console.log(`Vai dar false no ${i} da cor`);
            return false;
        }
        for (let indice = 1; indice < corPergunta[i].value.length; indice++) {
            if (corPergunta[i].value[indice] === "a" || corPergunta[i].value[indice] === "b" || corPergunta[i].value[indice] === "c" || corPergunta[i].value[indice] === "d" || corPergunta[i].value[indice] === "e" || corPergunta[i].value[indice] === "f" || corPergunta[i].value[indice] === "0" || corPergunta[i].value[indice] === "1" || corPergunta[i].value[indice] === "2" || corPergunta[i].value[indice] === "3" || corPergunta[i].value[indice] === "4" || corPergunta[i].value[indice] === "5" || corPergunta[i].value[indice] === "6" || corPergunta[i].value[indice] === "7 " || corPergunta[i].value[indice] === "8" || corPergunta[i].value[indice] === "9" || corPergunta[i].value[indice] === "A" || corPergunta[i].value[indice] === "B" || corPergunta[i].value[indice] === "C" || corPergunta[i].value[indice] === "D" || corPergunta[i].value[indice] === "E" || corPergunta[i].value[indice] === "F") {

            } else {
                return false
            }
        }
    }
    console.log("vai dar true na cor");
    return true;
}

function verificaResposta() {
    for (let i = 0; i < Number(qntdPerguntas); i++) {
        if (textoResposta[i].value.length === 0) {
            console.log(`Vai dar false no ${i}`);
            return false;
        }
    }
    console.log("vai dar true");
    return true;
}

function verificaImagemCorreta() {
    for (let i = 0; i < Number(qntdPerguntas); i++) {
        if (isValidHttpUrl(imgRespostaCorreta[i].value)) {
            console.log("vai dar true");
            return true;
        }
    }
    console.log(`Vai dar false`);
    return false;
}

function verificaSeTemIncorreta() {
    for (let i = 0; i < Number(qntdPerguntas); i++) {
        if (incorreta1[i].value.length === 0 && incorreta2[i].value.length === 0 && incorreta3[i].value.length === 0) {
            console.log(`Vai dar false no ${i}`);
            return false;
        }
    }
    console.log("vai dar true");
    return true;
}

function verificaImagemInCorreta() {
    for (let i = 0; i < Number(qntdPerguntas); i++) {
        if (incorreta1[i].value !== "") {
            if (isValidHttpUrl(imgIncorreta1[i].value)) {
                console.log("Beleza!")
            } else {
                console.log("deu ruim")
                return false;
            }
        }
        if (incorreta2[i].value !== "") {
            if (isValidHttpUrl(imgIncorreta2[i].value)) {
                console.log("Beleza")
            } else {
                console.log("deu ruim")
                return false;
            }
        }
        if (incorreta2[i].value !== "") {
            if (isValidHttpUrl(imgIncorreta3[i].value)) {
                console.log("deu ruim")
                console.log("beleza")
            } else {
                return false;
            }
        }
    }
    console.log("vai dar tudo trueeee")
    return true;
}

