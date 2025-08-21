import promptSync from 'prompt-sync'
const prompt = promptSync()
let valor = Number(prompt('Digite o valor total dos produtos: '))
if(valor >100 && valor <=500){
    valor = valor*0.95
}else if(valor >500 ){
    valor = valor*0.90}
console.log(`O valor total a ser pago é R$${valor.toFixed(2)}`)
if (valor>= 300){
    console.log('Você ganhou um cumpom para usar na proxima compra!')
}