import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Carro{
  constructor(tipo = '', cor = '', placa = '', portas = ''){
    this.tipo = tipo
    this.cor = cor
    this.placa = placa
    this.portas = portas
 }
  imprimir(){
    console.log(` \nTipo: ${this.tipo} \nCor: ${this.cor} \nPlaca: ${this.placa} \nN° de Portas: ${this.portas}`)
  }
}
let carro1 = new Carro('Ferrari','Vermelho','99999','2');
let carro2 = new Carro()
carro2.tipo = prompt("Digite o modelo do carro: ")
carro2.cor = prompt("Digite a cor do carro: ")
carro2.placa = prompt("Digite a placa do carro: ")
carro2.portas = prompt("Digite o numero de portas do carro: ")
let carro3 = new Carro(prompt("Digite o modelo do carro: "),prompt("Digite a cor do carro: "),prompt("Digite a placa do carro: "),prompt("Digite o numero de portas do carro: "))
carro1.imprimir();
carro2.imprimir();
carro3.imprimir();


