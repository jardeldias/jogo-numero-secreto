let listaNumerosSorteados = [];
let limiteNumeros = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
//-------------------------------------------

function verificarChute(){
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto){
        exibirTextoTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `${chute}! você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoTela('p', mensagemTentativas)
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            exibirTextoTela('p', `${chute}, o número secreto é menor`);
        } else {
            exibirTextoTela('p', `${chute}, o número secreto é maior`);
        }
        tentativas++;
    }
    limparCampo();
}

function exibirTextoTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  parseInt(Math.random() * limiteNumeros + 1);

    if (listaNumerosSorteados.length == limiteNumeros)
        listaNumerosSorteados = [];

    if (listaNumerosSorteados.includes(numeroEscolhido))
        return gerarNumeroAleatorio();
    else {
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input').value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Jogo do número secreto');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}

//-------------------------------------------

exibirMensagemInicial();