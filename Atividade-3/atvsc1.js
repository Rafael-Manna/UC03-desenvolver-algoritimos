import promptSync from 'prompt-sync'
const prompt = promptSync()
let valor = Number(prompt('Digite o valor para conversão: '))
console.log('Digite o tipo de transação: \n [1]Dólar \n [2]Euro \n [3]Peso \n [4]Libra \n [5]Franco ')
let tipo = Number(prompt())
switch(tipo){
    case 1:
        console.log(`O valor de R$${valor} convertido para Dólar é: U$${(valor / 5.424).toFixed(2)}`)
    break;
    case 2:
        console.log(`O valor de R$${valor} convertido para Euro é: €${(valor / 6.353).toFixed(2)}`)
    break;
    case 3:
        console.log(`O valor de R$${valor} convertido para Peso é:  $${(valor / 0.0042).toFixed(2)}`)
    break;
    case 4:
        console.log(`O valor de R$${valor} convertido para Libra é: lb$${(valor / 7.326).toFixed(2)}`)
    break;
    case 5:
        console.log(`O valor de R$${valor} convertido para Franco é: lb$${(valor / 6.753).toFixed(2)}`)
    break;
    default:
        console.log('Tipo de Moeda inválida!')
        break;

}