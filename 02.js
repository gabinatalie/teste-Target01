const prompt = require("readline-sync");
//2) Escreva um programa que verifique, em uma string, a existência da letra ‘a’, seja maiúscula ou minúscula, além de informar a quantidade de vezes em que ela ocorre.

// Solicitando ao usuário que insira uma string
let inputString = prompt.question("Por favor, insira uma palavra: ");

// Inicializando uma variável para contar quantas vezes a letra 'a' ou 'A' aparece
let count = 0;

// Iterando pela string para verificar a existência de 'a' ou 'A'
for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i]; // obtendo o caractere atual da string

    // Verificando se o caractere atual é 'a' ou 'A'
    if (char === 'a' || char === 'A') {
        count++; // incrementando o contador se for 'a' ou 'A'
    }
}

// Exibindo o número de vezes que a letra 'a' ou 'A' aparece
if (count > 0) {
    console.log(`A letra 'a' apareceu ${count} vezes na string.`);
} else {
    console.log("A letra 'a' não apareceu na string.");
}
