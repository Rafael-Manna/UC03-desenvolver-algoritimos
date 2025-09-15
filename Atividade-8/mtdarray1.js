import PromptSync from 'prompt-sync';
const prompt = PromptSync();
let produtos = ["alface", "melancia", "laranja", "uva", "manga", "arroz", "feijao", "macarrao", "carne", "frango", "banana", "tomate"];
let precos = [2.5, 8.0, 5.0, 7.0, 6.0, 4.5, 7.5, 3.5, 20.0, 15.0, 4.0, 3.0];
let categorias = ['Hortifruti', 'Hortifruti', 'Hortifruti', 'Hortifruti', 'Hortifruti', 'Mercearia', 'Mercearia', 'Mercearia', 'Carnes', 'Carnes', 'Hortifruti', 'Hortifruti'];
precos = precos.map((preco) => preco * 1.05);
console.log("Produtos disponíveis:");
for (let i = 0; i < produtos.length; i++) {
    console.log(`${i + 1}. ${produtos[i]} - R$${precos[i].toFixed(2)} - Categoria: ${categorias[i]}`);
}
console.log("Produtos disponíveis na categoria Hortifruti:");
for (let i = 0; i < produtos.length; i++) {
    if (categorias[i] === 'Hortifruti') {
        console.log(`${i + 1}. ${produtos[i]} - R$${precos[i].toFixed(2)}`);
    }
}
console.log("           [Produtos com preço abaixo de R$5,00]");
for (let i = 0; i < produtos.length; i++){
    if (precos[i] < 5.0) {
        
        console.log(`   Produto: ${produtos[i]} - Preço: R$${precos[i].toFixed(2)}`);
    }
}
let tam = 0;
for (let i = 0; i < produtos.length; i++){
    if (precos[i] <= 0.0) {
        console.log(`   Produto: ${produtos[i]} - Preço: R$${precos[i].toFixed(2)} [Preço inválido]`);
        tam ++
    }
}
if (tam == 0) {
    console.log("   Não existem produtos com preço igual ou abaixo de R$0,00");
}