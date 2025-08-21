import promptSync from 'prompt-sync'
const prompt = promptSync()
let saque = Number(prompt('Digite o valor do saque: '))
let notas = [100, 50, 20, 10, 5, 2]
let min = 10
let max = 1000
let unidade = saque % 10
if (saque < min || saque > max ) {
    console.log('Valor inválido para saque!')
} else if(saque == 3  0 && saque%2 != 0) {
    console.log('Valor inválido para saque!')
}