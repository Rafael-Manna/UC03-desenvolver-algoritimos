import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('Digite o tipo de operação: \n [1]Basico \n [2]Avançado ')
let calc = Number(prompt())