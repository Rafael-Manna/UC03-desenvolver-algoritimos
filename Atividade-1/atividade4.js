import promptSync from 'prompt-sync'
const prompt = promptSync()
const valor = Number(prompt('valor da conta: '))
const pessoas = Number(prompt('numero de pessoas: '))

console.log(`Valor total com a taxa de serviço: ${valor*1.10}R$`)
console.log(`Valor por pessoa: ${(valor*1.10)/pessoas}R$`)

