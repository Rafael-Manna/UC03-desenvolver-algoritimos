import promptSync from 'prompt-sync'
const prompt = promptSync()
let numero = Number(prompt('Digite um número menor que 1000: '))
if(numero < 0 || numero >= 1000) {
    console.log('Número inválido!')
}
else {
    let unidade = numero % 10
    let dezena = parseInt((numero % 100) / 10)
    let centena = parseInt(numero / 100)
    
    console.log(`Unidade: ${unidade}`)
    console.log(`Dezena: ${dezena}`)
    console.log(`Centena: ${centena}`)
}