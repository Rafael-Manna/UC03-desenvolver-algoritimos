import promptSync from 'prompt-sync'
const prompt = promptSync()
const valor = Number(prompt('Quantidade de anos? '))
console.log(`idade em dias é: ${valor*365}`)
