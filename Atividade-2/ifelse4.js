import promptSync from 'prompt-sync'
const prompt = promptSync()
let salario = Number(prompt('Digite o seu salário atual: '))
let emprestimo = Number(prompt('Digite o valor do emprestimo: '))
let parcela = Number(prompt('Digite em quantos meses você pretende pagar: '))
let pmensal = emprestimo/parcela
if(emprestimo <= salario*0.3) {
    console.log('Empréstimo concedido!')
    for(let i = 1; i <= parcela; i++) {
        emprestimo = emprestimo + pmensal*1.035

    }
}else {
    console.log('Empréstimo negado!')
}
console.log(`O valor total a ser pago é R$${emprestimo.toFixed(2)}`)
