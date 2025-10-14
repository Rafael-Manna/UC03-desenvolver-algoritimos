import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Hotel{
  constructor(){
    this.nomeH = "Hotel"
    this.listaDeQuartos = [];
    this.listaClientes = [];
  }
  adicionarCliente() {
    let nome = prompt("Digite o nome do cliente:");
    let cpf = Number(prompt("Digite o CPF:"));
    let contato = prompt("Digite o contato:");

    let novoCliente = new Cliente(nome, cpf, contato);
    this.listaDeClientes.push(novoCliente);
    console.log("Cliente cadastrado com sucesso!");
  }
  adicionarQuarto(){
    let adcnum = Number( prompt ("Digite o numero do Quarto: "))
    let adctipo = prompt("Digite o tipo do Quarto: ")
    for(let i = 0; i < this.listaDeQuartos.length;i++){
      if (adcnum == this.listaDeQuartos[i].numeroQuarto){
        console.log("Quarto ja existe!!");
        return;
      }
    }
    let novoQuarto = new Quarto(adcnum,adctipo);
    this.listaDeQuartos.push(novoQuarto);
  }
  reservarQuarto(){
    let adccli = prompt ("Digite o nome do cliente:");
    let adccpf = Number( prompt ("Digite o Cpf do cliente que quer reservar: "));
    let adcctt = Number( prompt ("Digite o Numero do cliente que quer reservar: "));
    console.log(this.listaDeQuartos);
    let adcnumr = Number( prompt ("Digite o numero do Quarto: "));

  }
  listarQuartos(){
    console.log(this.listaDeQuartos);
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
    console.log(`
------ DADOS DO CLIENTE ------
Nome: ${this.nome}
CPF: ${this.#cpf}
Contato: ${this.#contato}
-------------------------------
    `);
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
Tipo de Quarto: ${this.tipoQuarto}
-------------------------------
`);
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

const cliente1 = new Cliente();
cliente1.adicionarCliente();
const quarto1 = new Quarto(101, "Suíte Deluxe");
const reserva1 = new Reserva(cliente1, quarto1, "13/10/2025");

reserva1.imprimir();
const meuHotel = new Hotel();
meuHotel.adicionarQuarto();
meuHotel.adicionarQuarto();
meuHotel.adicionarQuarto();

meuHotel.listarQuartos();