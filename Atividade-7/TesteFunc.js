import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function soma (a, b) {
    return a + b;
}
let n1 = parseFloat(prompt("Digite o primeiro número: "));
let n2 = parseFloat(prompt("Digite o segundo número: "));
let retorno = soma(n1, n2);
console.log("O resultado da soma é: " + retorno);

