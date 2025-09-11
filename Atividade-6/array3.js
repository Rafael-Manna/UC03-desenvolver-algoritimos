import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log("Digite uma conversa: ");
let frase = [];
for(let i = 0; i < 10; i++){
    let entrada = prompt(`conversa ${i + 1}: `);  
    frase.push(entrada);                      
}
let palavras = frase.join(" --- ");
console.log(palavras)
console.log("qual conversa rever?");
let num = Number(prompt("Digite o número da conversa (1 a 10): "));
if(num >= 1 && num <= 10){
    console.log(`conversa ${num}: ${frase[num - 1]}`);}