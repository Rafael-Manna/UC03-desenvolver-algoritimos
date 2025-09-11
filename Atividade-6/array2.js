import promptSync from 'prompt-sync'
const prompt = promptSync()


let catalogo = [  "Camiseta", "Calça Jeans", "Jaqueta", "Vestido", "Saia",
                     "Blusa", "Shorts", "Tênis", "Sandália", "Boné"];

console.log("Catalogo inicial:", catalogo);

catalogo.splice(3, 3) //remove 3 itens a partir da posição 4
console.log("Catalogo após remover 3 itens a partir da posição 4:", catalogo)

let novaColecao = [
  "Casaco", "Cropped", "Meia", "Chinelo", "Moletom",
  "Blazer", "Camisa Polo", "Macacão", "Bermuda", "Jaqueta Jeans"
]
console.log("Nova coleção:", novaColecao)

catalogo = catalogo.concat(novaColecao) // concatena os dois arrays
console.log("Catálogo atualizado:", catalogo)

// busca de produto
let busca = prompt("Digite o nome do produto que deseja buscar: ");
let posicao = -1; 

// percorre o array 
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].toLowerCase() === busca.toLowerCase()) {
        posicao = i; // armazena a posição quando encontrar
        break;      
    }
}
if (posicao !== -1) {
  console.log(`Produto encontrado: "${catalogo[posicao]}" na posição ${posicao}`);
} else {
  console.log("Produto não encontrado no catálogo.");
}
import promptSync from 'prompt-sync'
const prompt = promptSync()


let catalogo = [  "Camiseta", "Calça Jeans", "Jaqueta", "Vestido", "Saia",
                     "Blusa", "Shorts", "Tênis", "Sandália", "Boné"];

console.log("Catalogo inicial:", catalogo);

catalogo.splice(3, 3) //remove 3 itens a partir da posição 4
console.log("Catalogo após remover 3 itens a partir da posição 4:", catalogo)

let novaColecao = [
  "Casaco", "Cropped", "Meia", "Chinelo", "Moletom",
  "Blazer", "Camisa Polo", "Macacão", "Bermuda", "Jaqueta Jeans"
]
console.log("Nova coleção:", novaColecao)

catalogo = catalogo.concat(novaColecao) // concatena os dois arrays
console.log("Catálogo atualizado:", catalogo)

// busca de produto
let busca = prompt("Digite o nome do produto que deseja buscar: ");
let posicao = -1; 

// percorre o array manualmente
for (let i = 0; i < catalogo.length; i++) {
    if (catalogo[i].toLowerCase() === busca.toLowerCase()) {
        posicao = i; // armazena a posição quando encontrar
        break;      
    }
}
if (posicao !== -1) {
  console.log(`Produto encontrado: "${catalogo[posicao]}" na posição ${posicao}`);
} else {
  console.log("Produto não encontrado no catálogo.");
}