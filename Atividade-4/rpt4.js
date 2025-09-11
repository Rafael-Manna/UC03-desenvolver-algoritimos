import promptSync from 'prompt-sync'
const prompt = promptSync()
let j = 0;
while(j < 2){
console.log('Digite o preço do produto: ');
let preco = Number(prompt());
let total = 0;
let i = 1;
while(preco > 0){
    i++;
    total = preco + total;
    console.log(`Digite o preço do ${i} produto: `);
    preco = Number(prompt());
}
console.log(`Quantidade de produtos comprados: ${i - 1}`);
console.log(`O total da compra foi de R$ ${total.toFixed(2)}`);
console.log("Qual foi o valor fornecido em dinheiro? ");
let valor = Number(prompt());
if (valor < total){
    console.log(`Voce deve R$ ${(total - valor).toFixed(2)}`);
} else {
console.log(`O troco é de R$ ${(valor - total).toFixed(2)}`);}
prompt('Pressione ENTER para continuar...');
console.clear();
j++;
}