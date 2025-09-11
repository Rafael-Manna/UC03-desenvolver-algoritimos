import promptSync from 'prompt-sync'
const prompt = promptSync()
let tipo = Number(prompt('Digite o tipo de conta ([1] - Carro [2] - Moto [3] - Caminhão): '))	
let hora = Number(prompt('Digite o número de horas: '))
let valor = 0
switch(tipo){
    case 1:
       valor = (hora*12)
        break
    case 2:
        valor = (hora*7)
        break
    case 3:
        valor = (hora*25)
        break
    default:
        console.log('Tipo de conta inválido!')
        break

}
if (hora>2){
    valor = valor + (hora - 2)*3
}
console.log(`O valor a pagar é R$${valor.toFixed(2)}`)