import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Hotel{
  constructor(){
    this.nomeH = "Hotel"
    this.listaDeQuartos = [];
    this.listaClientes = [];
    this.listaReservas = [];
  }
  adicionarCliente() {
    let nome = prompt("Digite o nome do cliente:");
    let cpf = (prompt("Digite o CPF:"));
    let contato = prompt("Digite o contato:");
    if (cpf.length != 11 || isNaN(Number(cpf))){
      console.log("CPF INVALIDO!!");
      return;
    }
    if (contato.length != 11 || isNaN(Number(contato))){
      console.log("NUMERO INVALIDO!!");
      return;
    }
    for(let i = 0; i < this.listaClientes.length;i++){
      if (cpf == this.listaClientes[i].cpf){
        console.log("Cliente ja existe!!");
        return;
      }
    }
    let novoCliente = new Cliente(nome, cpf, contato);
    this.listaClientes.push(novoCliente);
    console.log("Cliente cadastrado com sucesso!");
  }
  adicionarQuarto(){
    let adcnum = ( prompt ("Digite o numero do Quarto: "))
    let adctipo = prompt("Digite o tipo do Quarto: ")
    for(let i = 0; i < this.listaDeQuartos.length;i++){
      if (adcnum == this.listaDeQuartos[i].numeroQuarto){
        console.log("Quarto ja existe!!");
        return;
      }
    }
    let novoQuarto = new Quarto(adcnum,adctipo);
    this.listaDeQuartos.push(novoQuarto);
    console.log("Quarto cadastrado com sucesso!");

  }
  reservarQuarto(){
    let adccli = prompt ("Digite o nome do cliente:");
    let adccpf =  prompt ("Digite o Cpf do cliente que quer reservar: ");
    let adcctt =  prompt ("Digite o Numero do cliente que quer reservar: ");
    console.log(this.listaDeQuartos);
    let adcnumr = ( prompt ("Digite o numero do Quarto: "));

  }
  listarQuartos(){
    console.log("Lista de Quartos:")
    console.log(this.listaDeQuartos);
  }
  listarClientes(){
    console.log("\nLista de Clientes:");
    for (let i = 0; i < this.listaClientes.length; i++) {
      console.log(`-------N°${i+1}---------`);
      this.listaClientes[i].imprimir();
      console.log(`-------------------`);
    }
  }
}
class Cliente {
  // Campos privados
  #cpf;
  #contato;

  constructor(nome = "", cpf = "", contato = "") {
    this.nome = nome;       
    this.#cpf = Number(cpf);
    this.#contato = contato;
    this.listaDeClientes = [];

  }

  imprimir() {
    console.log(`Nome: ${this.nome}
CPF: ${this.#cpf}
Contato: ${this.#contato}`);
  }
  
  get cpf() {
    return this.#cpf;
  }

  get contato() {
    return this.#contato;
  }

  set contato(novoContato) {
    if (typeof novoContato === "string" && novoContato.trim().length > 0) {
      this.#contato = novoContato.trim();
    } else {
      console.log("Contato inválido");
    }
  }

}
class Quarto {
    constructor(numeroQuarto, tipoQuarto) {
        this.numeroQuarto = numeroQuarto;
        this.tipoQuarto = tipoQuarto;
    }

    imprimir() {
        console.log(`
------ DADOS DO QUARTO ------
Número do Quarto: ${this.numeroQuarto}
Tipo de Quarto: ${this.tipoQuarto}`);
    }
}
class Reserva {
  constructor(cliente, quarto, dataReserva) {
    this.cliente = cliente;
    this.quarto = quarto;
    this.dataReserva = dataReserva;
  }

  imprimir() {
    console.log(`\n=== DADOS DA RESERVA ===`);
    this.cliente.imprimir();
    this.quarto.imprimir();
    console.log(`Data da reserva: ${this.dataReserva}`);
  }
}


const meuHotel = new Hotel();
meuHotel.adicionarCliente();
meuHotel.adicionarCliente();
meuHotel.adicionarQuarto();
meuHotel.adicionarQuarto();
meuHotel.adicionarQuarto();
meuHotel.listarQuartos();
meuHotel.listarClientes();