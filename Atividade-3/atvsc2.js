import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('Digite o tipo de operação: \n [1]Basico \n [2]Avançado ')
let calc = Number(prompt())
let v1,v2,v3,v4
switch(calc){
    case 1: 
    console.log('Digite o tipo de operação: \n [1]Soma \n [2]Subtração \n [3]Multiplicação \n [4]Divisão ')
     
    let op = Number(prompt())
    v1 = Number(prompt('Digite o primeiro valor: '))
     v2 = Number(prompt('Digite o segundo valor: '))
   
    switch(op){
        case 1:
             v3 = v1 + v2
            console.log(`Soma dos valores: ${v3}`)
            break;
        case 2:
             v3 = v1 - v2
            console.log(`Subtração dos valores: ${v3}`) 
            break;
        case 3:
             v3 = v1*v2
            console.log(`Multiplicação dos valores: ${v3}`)
            break;
        case 4:
             v3 = v1/v2
            if (v2==0){
                console.log("Denominador igual a zero, Operação invalida.")
            }else{
                console.log(`Divisão dos valores: ${v3}`)
            }
        default:
            console.log("Operação invalida!")
            break;
    }
    break;
    case 2:
        console.log('Digite o tipo de operação: \n [1]Raiz quadrada \n [2]Potenciação  ')
         let op2 = Number(prompt())
         v1 = Number(prompt('Digite o primeiro valor: '))
     v2 = Number(prompt('Digite o segundo valor: '))
        switch(op2){
            case 1:
                 v3 = Math.sqrt(v1)
                console.log(`Raiz quadrada do primeiro valor: ${v3.toFixed(2)}`)
                 v4 = Math.sqrt(v2)
                console.log(`Raiz quadrada do segundo valor: ${v4.toFixed(2)}`)
                break;
            case 2:
                 v3 = v1**v2
                console.log(` primeiro valor elevado ao segundo: ${v3}`)
            break;
            default:
                console.log("Operação invalida!")
                break;
        }
        break;

}