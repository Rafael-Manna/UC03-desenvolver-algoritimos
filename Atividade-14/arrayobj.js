import PromptSync from 'prompt-sync';
const prompt = PromptSync();

class Cliente {
  #cpf;
  #contato;

  constructor(nome = "", cpf = "", contato = "") {
    this.nome = nome;
    this.#cpf = cpf;
    this.#contato = contato;
  }

  get cpf() {
    return this.#cpf;
  }

  get contato() {
    return this.#contato;
  }

  imprimir() {
    console.log(`
------ DADOS DO CLIENTE ------
Nome: ${this.nome}
CPF: ${this.#cpf}
Contato: ${this.#contato}`);
  }
}

class Quarto {
  constructor(numeroQuarto, tipoQuarto) {
    this.numeroQuarto = numeroQuarto;
    this.tipoQuarto = tipoQuarto;
    this.ocupado = false;
  }

  imprimir() {
    console.log(`
------ DADOS DO QUARTO ------
Número do Quarto: ${this.numeroQuarto}
Tipo: ${this.tipoQuarto}
Status: ${this.ocupado ? "Ocupado" : "Disponível"}`);
  }
}

class Reserva {
  constructor(cliente, quarto, dataReserva) {
    this.cliente = cliente;
    this.quarto = quarto;
    this.dataReserva = dataReserva;
  }

  imprimir() {
    console.log(`
====== DADOS DA RESERVA ======
Cliente: ${this.cliente.nome}
CPF: ${this.cliente.cpf}
Quarto: ${this.quarto.numeroQuarto} (${this.quarto.tipoQuarto})
Data: ${this.dataReserva}`);
  }
}

class Hotel {
  constructor() {
    this.nomeH = "Hotel JS";
    this.listaDeQuartos = [];
    this.listaClientes = [];
    this.listaReservas = [];

    // ====== DADOS DE TESTE PRÉ-DEFINIDOS ======
    let c1 = new Cliente("Rafael", "70012312350", "84987292844");
    let c2 = new Cliente("Ana", "12345678901", "84988887777");
    let c3 = new Cliente("Carlos", "98765432100", "84999998888");

    this.listaClientes.push(c1, c2, c3);

    let q1 = new Quarto("1", "Luxo");
    let q2 = new Quarto("2", "Padrão");
    let q3 = new Quarto("3", "Luxo");

    this.listaDeQuartos.push(q1, q2, q3);

    console.log("Dados de teste carregados com sucesso!");
  }

  adicionarCliente() {
    let nome = prompt("Digite o nome do cliente: ");
    let cpf = prompt("Digite o CPF (11 dígitos): ");
    let contato = prompt("Digite o número de contato (11 dígitos): ");

    if (cpf.length != 11 || isNaN(Number(cpf))) {
      console.log("CPF inválido!");
      return;
    }
    if (contato.length != 11 || isNaN(Number(contato))) {
      console.log("Número de contato inválido!");
      return;
    }

    for (let i = 0; i < this.listaClientes.length; i++) {
      if (this.listaClientes[i].cpf == cpf) {
        console.log("Cliente já cadastrado!");
        return;
      }
    }

    let novoCliente = new Cliente(nome, cpf, contato);
    this.listaClientes.push(novoCliente);
    console.log("Cliente cadastrado com sucesso!");
  }

  adicionarQuarto() {
    let numero = prompt("Digite o número do quarto: ");
    let tipo = prompt("Digite o tipo do quarto: ");

    for (let i = 0; i < this.listaDeQuartos.length; i++) {
      if (this.listaDeQuartos[i].numeroQuarto == numero) {
        console.log("Quarto já cadastrado!");
        return;
      }
    }

    let novoQuarto = new Quarto(numero, tipo);
    this.listaDeQuartos.push(novoQuarto);
    console.log("Quarto adicionado com sucesso!");
  }

  listarQuartosDisponiveis() {
    console.log("\n=== QUARTOS DISPONÍVEIS ===");
    let encontrados = false;

    for (let i = 0; i < this.listaDeQuartos.length; i++) {
      if (!this.listaDeQuartos[i].ocupado) {
        this.listaDeQuartos[i].imprimir();
        encontrados = true;
      }
    }

    if (!encontrados) {
      console.log("Nenhum quarto disponível.");
    }
  }
  listarClientes() { 
    console.log("\n=== LISTA DE TODOS OS CLIENTES CADASTRADOS ===")
    console.log(`Quantidade de clientes: ${this.listaClientes.length}`)
    for(let i = 0; i<this.listaClientes.length;i++){
      console.log(`\n----- DADOS DO CLIENTE ${i + 1} -----`);
      console.log("Nome: " + this.listaClientes[i].nome);
      console.log("CPF: " + this.listaClientes[i].cpf);
      console.log("Contato: " + this.listaClientes[i].contato);

    }
  }
  listarReservas() { // "printar" os relatorios com essa função
    console.log("\n=== LISTA DE TODAS AS RESERVAS ===");

    if (this.listaReservas.length == 0) {
      console.log("Nenhuma reserva encontrada.");
      return;
    }

    for (let i = 0; i < this.listaReservas.length; i++) {
      console.log(`\n========== RESERVA ${i + 1} ==========`);

      console.log("\n----- DADOS DO CLIENTE -----");
      console.log("Nome: " + this.listaReservas[i].cliente.nome);
      console.log("CPF: " + this.listaReservas[i].cliente.cpf);
      console.log("Contato: " + this.listaReservas[i].cliente.contato);

      console.log("\n----- DADOS DO QUARTO -----");
      console.log("Número: " + this.listaReservas[i].quarto.numeroQuarto);
      console.log("Tipo: " + this.listaReservas[i].quarto.tipoQuarto);
      console.log("Status: " + (this.listaReservas[i].quarto.ocupado ? "Ocupado" : "Disponível"));

      console.log("\nData da reserva: " + this.listaReservas[i].dataReserva);
      console.log("=====================================");
    }
    
  }

  reservarQuarto() {
    let cpf = prompt("Digite o CPF do cliente: ");
    let cliente = null;

    for (let i = 0; i < this.listaClientes.length; i++) {
      if (this.listaClientes[i].cpf == cpf) {
        cliente = this.listaClientes[i];
        break;
      }
    }

    if (cliente == null) {
      console.log("Cliente não encontrado!");
      return;
    }

    let numero = prompt("Digite o número do quarto: ");
    let quarto = null;

    for (let i = 0; i < this.listaDeQuartos.length; i++) {
      if (this.listaDeQuartos[i].numeroQuarto == numero) {
        quarto = this.listaDeQuartos[i];
        break;
      }
    }

    if (quarto == null) {
      console.log("Quarto não encontrado!");
      return;
    }

    if (quarto.ocupado) {
      console.log("Quarto já está ocupado!");
      return;
    }

    let data = prompt("Digite a data da reserva (AAAA-MM-DD): ");
    let hoje = new Date();
    let dataReserva = new Date(data);

    if (dataReserva < hoje) {
      console.log("Não é possível reservar datas passadas!");
      return;
    }

    let novaReserva = new Reserva(cliente, quarto, data);
    quarto.ocupado = true;
    this.listaReservas.push(novaReserva);

    console.log("Reserva realizada com sucesso!");
    novaReserva.imprimir();
  }

  cancelarReserva() {
    let numero = prompt("Digite o número do quarto para cancelar: ");
    let reservaEncontrada = false;

    for (let i = 0; i < this.listaReservas.length; i++) {
      if (this.listaReservas[i].quarto.numeroQuarto == numero) {
        this.listaReservas[i].quarto.ocupado = false;
        this.listaReservas.splice(i, 1);
        reservaEncontrada = true;
        console.log("Reserva cancelada com sucesso!");
        break;
      }
    }

    if (!reservaEncontrada) {
      console.log("Nenhuma reserva encontrada para este quarto!");
    }
  }

  informacoesReserva() {
    let numero = prompt("Digite o número do quarto: ");
    let encontrada = false;

    for (let i = 0; i < this.listaReservas.length; i++) {
      if (this.listaReservas[i].quarto.numeroQuarto == numero) {
        this.listaReservas[i].imprimir();
        encontrada = true;
        break;
      }
    }

    if (!encontrada) {
      console.log("Nenhuma reserva encontrada para este quarto!");
    }
  }
}

// ====== Menu principal ======
const hotel = new Hotel();
let opcao = "";

while (opcao != "0") {
  console.log(`
======== MENU HOTEL ========
1 - Adicionar Cliente
2 - Adicionar Quarto
3 - Listar Quartos Disponíveis
4 - Listar Clientes
5 - Reservar Quarto
6 - Cancelar Reserva
7 - Listar Todas as Reservas
8 - Informações de uma Reserva
0 - Sair
`);
  opcao = prompt("Escolha uma opção: ");

 switch (opcao) {
  case "1":
    hotel.adicionarCliente();
    break;
  case "2":
    hotel.adicionarQuarto();
    break;
  case "3":
    hotel.listarQuartosDisponiveis();
    break;
  case "4":
    hotel.listarClientes();
    break;
  case "5":
    hotel.reservarQuarto(); 
    break;
  case "6":
    hotel.cancelarReserva(); 
    break;
  case "7":
    hotel.listarReservas();
    break;
  case "8":
    hotel.informacoesReserva();
    break;
  case "0":
    console.log("Encerrando o sistema...");
    break;
  default:
    console.log("Opção inválida!");
}
}
