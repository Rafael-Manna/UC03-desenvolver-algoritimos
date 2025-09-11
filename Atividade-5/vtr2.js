import promptSync from 'prompt-sync'
const prompt = promptSync()
let frase = [];
let consoante = [];
let cont = 0;
console.log(`Digite uma frase de ate 15 caracteres:`);
frase = prompt();
let tamanho = frase.length; //cria uma variável para armazenar o tamanho da frase
for (let i = 0; i < tamanho; i++) {
    if (!['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U', ' ','!','?','.'].includes(frase[i])) { //verifica se tal coisa é incluido em frase[i] 
        cont++;
        consoante.push(frase[i]);  //adiciona a o elemento atual do indice  no ultimo indice do vetor consoante
    }
}
console.log(`A frase digitada foi: ${frase}`);
console.log(`A quantidade de consoantes na frase é: ${cont}`);
console.log("As consoantes são:");
consoante.forEach( letra => process.stdout.write(letra + " ")); //(para cada indice do vetor ele faz tal coisa)+print sem pular linha
