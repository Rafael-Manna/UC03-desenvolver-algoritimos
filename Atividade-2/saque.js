import promptSync from 'prompt-sync'
const prompt = promptSync()

let saque = Number(prompt('Digite o valor do saque: '))
let min = 10
let max = 1000

let unidade = parseInt(saque % 10)
let dezena = parseInt((saque % 100) / 10)
let centena = parseInt(saque / 100)

let cinquenta = parseInt((saque % 100) / 50)
let restoDepois50 = saque - (cinquenta * 50) - (centena * 100) // tira 100s e 50s
let vinte = parseInt((restoDepois50 % 100) / 20)
let ndez = parseInt((restoDepois50 % 20) / 10)
let ndois = parseInt((restoDepois50 % 10) / 2)

let ncinq = 0

if (saque < min || saque > max) {
    console.log('Valor inválido para saque!')
} else {
    console.log('Valor válido para saque!')
}

if (unidade % 2 == 0) {

    if (centena > 0) console.log(`Notas de 100: ${centena}`)
    if (cinquenta > 0) console.log(`Notas de 50: ${cinquenta}`)
    if (vinte > 0) console.log(`Notas de 20: ${vinte}`)
    if (ndez > 0) console.log(`Notas de 10: ${ndez}`)
    if (ndois > 0) console.log(`Notas de 2: ${ndois}`)

} else {
    ncinq++
    ndois = ndois + 3
    if (ndois >= 5) {
        ndez = ndez + 1
        ndois = ndois - 5
    }
    if (centena > 0) console.log(`Notas de 100: ${centena}`)
    if (cinquenta > 0) console.log(`Notas de 50: ${cinquenta}`)
    if (vinte > 0) console.log(`Notas de 20: ${vinte}`)
    if (ndez > 0) console.log(`Notas de 10: ${ndez}`)
    console.log(`Notas de 5: ${ncinq}`)
    if (ndois > 0) console.log(`Notas de 2: ${ndois}`)
}
