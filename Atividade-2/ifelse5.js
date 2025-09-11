import promptSync from 'prompt-sync'
const prompt = promptSync()
let idade = Number(prompt('Digite a sua idade: '))
if(idade < 6) {
    console.log('entrada gratuita!')
} else if(idade >= 6 && idade <= 17) {
    console.log('Meia entrada!')
} else if(idade >= 18 && idade <= 59) {
    console.log('Tarifa inteira!')
} else if(idade >= 60) {
    console.log('Entrada gratuita!')
}