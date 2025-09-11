import promptSync from 'prompt-sync'
const prompt = promptSync()
let consumo = Number(prompt('Digite o consumo da conta de luz(kwh): '))
let atrasado = Number(prompt('Atrasado? (1 - sim, 0 - não): '))
if(consumo <= 100) {
    consumo = consumo*1.2
}else {
    consumo = consumo*1.7
}
if(atrasado == 1) {
    consumo = consumo*1.05
}
console.log(`O valor da conta de luz é R$${consumo.toFixed(2)}`)