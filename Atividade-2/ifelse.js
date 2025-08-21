import promptSync from 'prompt-sync'
const prompt = promptSync()
let vmax = Number(prompt('Digite a velocidade maxima permitida na via: '))
let vv = Number(prompt('Digite a velocidade atual do veiculo: '))
if(vv >= vmax && vv < vmax*1.10) {
    console.log('Atenção: acima do permitido, multa leve!')
} else if(vv >= vmax*1.10) {
    console.log('Atenção: acima do permitido, multa grave!')
} else{
    console.log('Velocidade dentro do permitido.')
}