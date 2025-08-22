import promptSync from 'prompt-sync'
const prompt = promptSync()
let saque = Number(prompt('Digite o valor do saque: '))
let min = 10
let max = 1000
let unidade = parseInt(saque % 10)
let dezena = parseInt((saque % 100) / 10)
let centena = parseInt(saque / 100)
let vinte = parseInt(dezena / 2)
let ndez = parseInt(dezena % 2)
let ndois = parseInt(unidade / 2)