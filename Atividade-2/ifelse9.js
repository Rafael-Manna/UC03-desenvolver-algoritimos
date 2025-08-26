import promptSync from 'prompt-sync'
const prompt = promptSync()
let saque = Number(prompt('Digite o valor do saque: '))
let min = 10
let max = 1000
let unidade = parseInt(saque % 10)
let dezena = parseInt((saque % 100) / 10)
let centena = parseInt(saque / 100)
let cinquenta = parseInt(centena / 2)
let vinte = parseInt(dezena/2)
let ndez = parseInt(dezena%2)
let ndois = parseInt(unidade/2)
let ncinq = 0
if (saque < min || saque > max ) {
    console.log('Valor inválido para saque!')
} else  {
    console.log('Valor válido para saque!')
}

 if(unidade % 2 == 0){

    if (centena > 0) {
        console.log(`Notas de 100: ${centena}`)
    }

    if (vinte > 0) {
        console.log(`Notas de 20: ${vinte}`)
    }
    if (ndez > 0) {
        console.log(`Notas de 10: ${ndez}`)
    }
    if (ndois > 0) {
        console.log(`Notas de 2: ${ndois}`)
    }

} 
else if (unidade % 2 !== 0 ) {
    ncinq ++
    ndois = ndois + 3
    if(ndois >= 5){
       dezena = dezena + 1
         ndois = ndois - 5
    }
    if ((dezena % 2 == 0 && (unidade == 3  || unidade == 1))){
        vinte = vinte - 1
    }
  
    if (centena > 0) {
        console.log(`Notas de 100: ${centena}`)
    }
    if (vinte > 0) {
        console.log(`Notas de 20: ${vinte}`)

    }
   dezena = dezena - vinte * 2
    if (dezena > 1) {
        console.log(`Notas de 10: ${dezena - 1}`)
    }
    console.log(`Notas de 5: ${ncinq}`)
    if (ndois > 0) {
        console.log(`Notas de 2: ${ndois }`)
    }
}