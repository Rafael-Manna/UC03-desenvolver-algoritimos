import promptSync from 'prompt-sync'
const prompt = promptSync()
let q = Number(prompt('Quantos valores você quer inserir? '))
let valores = []
for(let i = 0; i < q; i++) {
    let valor = Number(prompt(`Digite o ${i + 1}° valor: `))
    valores.push(valor)
}
console.log('Valores antes da ordenação: ', valores)
//maior pro menor
for(let i = 0; i<q ; i++){
    for(let j = 0; j < q ; j++){
        if(valores[i]>valores[j]){
            let aux = valores[i]
            valores[i] = valores[j]
            valores[j] = aux
        }
    }
}
console.log('Valores depois da ordenação: (ordem decrescente) ', valores)
//menor pro maior
for(let i = 0; i<q ; i++){
    for(let j = 0; j < q ; j++){
        if(valores[i]<valores[j]){
            let aux = valores[i]
            valores[i] = valores[j]
            valores[j] = aux
        }
    }
}
console.log('Valores depois da ordenação: (ordem crescente) ', valores)