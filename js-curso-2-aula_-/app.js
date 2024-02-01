let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela("h1", "Jogo do Numero Secreto");
exibirTextoNaTela("p", "Escolha um numero entre 1 e 10");

function verificarChute() {
    let chute = document.querySelector("input").value;

    if (chute == numeroSecreto) {
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", "Você descobriu o numero secreto!");
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela("p", "O numero secreto é menor")
        } else {
            exibirTextoNaTela("p", "O numero secreto é maior")
        }
            
    } 
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}