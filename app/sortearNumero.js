const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log("Número secreto: " + numeroSecreto);

const elementoMenorValor = document.getElementById("menor-valor");
elementoMenorValor.innerHTML = menorValor;

const elementorMaiorValor = document.getElementById("maior-valor");
elementorMaiorValor.innerHTML = maiorValor;