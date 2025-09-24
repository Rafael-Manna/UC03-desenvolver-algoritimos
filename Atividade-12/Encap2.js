import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Banco{
 #nomeTitular
 #saldo
 constructor(nomeTitular,numeroConta, numeroAgencia, saldo, dataAbertura){
this.#nomeTitular  = nomeTitular
this.#saldo = 0
this.numeroConta = numeroConta
this.dataAbertura = dataAbertura
 }
 sacar(){
    console.log("Valor de saque:")
    let saque =  Number(prompt(""));
    if(saldo< saque){
        console.log("Saldo insuficiente");
    }
    else{
        this.#saldo = saque - saldo;
    }
 }
 depositar(){
    console.log("Valor de deposito:");
    let deposito = Number(prompt(""));
    this.#saldo = saldo + deposito;
 }
 calcRendimento(){
    console.log(`O rendimento mensal da sua conta é ${this.#saldo*0.1}`)
 }
}