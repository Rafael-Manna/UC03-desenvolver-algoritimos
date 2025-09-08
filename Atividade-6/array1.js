import promptSync from 'prompt-sync'
const prompt = promptSync()

let palavrao = [
  "puta", "puto", "putinha", "putaria", 
  "caralho", "caralhinho", "merda", "merdinha",
  "bosta", "bostinha", "foda", "fodido", "fodida", "fodendo",
  "cu", "cuzão",  "porra",  "pqp",
  "viado", "arrombado", "arrombada",
  "desgraça", "desgraçado", "desgraçada",
  "cacete", "caceta",
  "piranha", "vagabunda", "escroto", "escrota"
];

let frase = prompt("Digite uma frase: ");
let palavras = frase.split(" ");
for (let i = 0; i < palavras.length; i++) {
    if (palavrao.includes(palavras[i].toLowerCase())) {
        palavras[i] = "*".repeat(palavras[i].length)
    }
}
console.log("Frase censurada:");
console.log(palavras.join(" "));
