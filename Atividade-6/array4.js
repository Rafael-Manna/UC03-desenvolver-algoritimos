import promptSync from 'prompt-sync'
const prompt = promptSync();
let carrinho = [
   "brinquedo", "boneca", "bola", "livro", "jogo",
    "quebra-cabeça", "bicicleta", "patins", "skate", "caneta"
];
console.log(carrinho.join(" -- "));
console.log("deseja adicionar algum item ao carrinho? [1]Sim ou [2]Não");
let resposta = prompt("");
while (resposta == 1){
let item = prompt("");
carrinho.push(item);
console.log("Carrinho atualizado:");
console.log(carrinho.join(" -- "));
console.log("Deseja adicionar mais algum item ao carrinho? [1]Sim ou [2]Não");
resposta = prompt("");
}
console.log("Deseja remover algum item do carrinho? [1]Sim ou [2]Não");
 resposta = prompt("");
while (resposta == 1){
let item = prompt("");
for (let i = 0; i < carrinho.length; i++) {
    if (carrinho[i].toLowerCase() === item.toLowerCase()) {
        carrinho.splice(i, 1);
        break;      
    }
}
console.log("Carrinho atualizado:");
console.log(carrinho.join(" -- "));
console.log("Deseja removar mais algum item do carrinho? [1]Sim ou [2]Não");
resposta = prompt("");
}
