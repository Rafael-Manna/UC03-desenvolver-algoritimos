import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Hotel{
    
}
class Cliente {
  // Campos privados
  #cpf;
  #contato;

  constructor(nome = "", cpf = "", contato = "") {
    this.nome = nome;       
    this.#cpf = cpf;
    this.#contato = contato;
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
    constructor(numero, tipoQuarto) {
        this.numero = numero;
        this.tipoQuarto = tipoQuarto;
    }

    imprimir() {
        console.log(`
------ DADOS DO QUARTO ------
Número do Quarto: ${this.numero}
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
const cliente1 = new Cliente("Rafael", "123.456.789-00", "11 99999-9999");
const quarto1 = new Quarto(101, "Suíte Deluxe");
const reserva1 = new Reserva(cliente1, quarto1, "13/10/2025");

reserva1.imprimir();