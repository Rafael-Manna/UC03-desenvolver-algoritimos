import promptSync from 'prompt-sync'
const prompt = promptSync()
let frase = [];
let frase2 = [];
let frase3 = [];

for (let i = 0; i < 5; i++) {
    const palavra = prompt(`Vetor ${i+1}: `);
    frase.push(palavra);   
}

for (let i = 0; i < 5; i++) {
    const palavra = prompt(`Vetor2 ${i+1}: `);
    frase2.push(palavra);
}
for (let i = 0; i < 5; i++) {
    frase3.push(frase[i]);
    frase3.push(frase2[i]);
}

console.log("\n");
frase.forEach( letra => process.stdout.write(letra + " ")); //(para cada indice do vetor ele faz tal coisa)+print sem pular linha
console.log("\n");
frase2.forEach( letra => process.stdout.write(letra + " ")); 
console.log("\n");
console.log("intercalado\n");
frase3.forEach( letra => process.stdout.write(letra + " ")); //(para cada indice do vetor ele faz tal coisa)+print sem pular linha


