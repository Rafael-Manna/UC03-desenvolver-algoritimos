import promptSync from 'prompt-sync'
const prompt = promptSync()
const distancia = Number(prompt('qual a distancia percorrida(km)? '))
console.log(`a entrega é: ${((distancia*5)+10).toFixed(2)}R$`)


