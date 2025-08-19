import promptSync from 'prompt-sync'
const prompt = promptSync()
let nome = prompt('Qual é o nome do produto? ')
let valor = Number(prompt('Qual preço do produto? '))
let desconto = Number(prompt('Qual é o desconto? '))
console.log(`idade em dias é: ${valor*360}`)
console.log(`O produto ${nome} custa R$ ${valor.toFixed(2)}, com desconto de ${desconto}% ele fica R$ ${(valor - (valor * desconto / 100)).toFixed(2)}`)
