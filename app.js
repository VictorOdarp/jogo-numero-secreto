let lista = [];
let numeros = 100;
let numeroSecreto = gerarNumeroAleatorio();
let cont = 1;

console.log(numeroSecreto);
exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirTextoNaTela("h1", "Acertou!");
        let palavraTentativa = cont > 1 ? "tentativas" : "tentativa";
        let mensagemTentativa = `Você acertou o número secreto em ${cont} ${palavraTentativa}!`;
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute("disabled")
    }
    else {
        if (chute < numeroSecreto){
            exibirTextoNaTela("p", "Escolha um número maior que " + chute);
        }
        else {
            exibirTextoNaTela("p", "Escolha um número menor que " + chute);
        }
        cont++
        limparCampo();
    }
}

function exibirMensagemInicial(){
    exibirTextoNaTela("h1", "Jogo do número secreto")
    exibirTextoNaTela("p", `Escolha um número entre 1 e ${numeros}`);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = "";
}

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag)
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function gerarNumeroAleatorio(){
    let numeroEscolhido =  Math.floor(Math.random() * numeros + 1);

    if(lista.length == numeros){
        lista = [];
    }
    
    if(lista.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }
    else
    {
        lista.push(numeroEscolhido)
        return numeroEscolhido;
    }
}

function resetarOJogo(){
    exibirMensagemInicial();
    numeroSecreto = gerarNumeroAleatorio();
    cont = 1;
    limparCampo();
    console.log(numeroSecreto);
    document.getElementById("reiniciar").setAttribute("disabled", true);
}
