import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Cliente{
    #nome;
    #endereco;
    #renda;
    constructor(nome = "",endereco = "", renda = ""){
        this.#nome = nome
        this.#endereco = endereco
        this.#renda = renda
    }
    imprimir(){
        console.log(` \nNome: ${this.#nome} \nEndereço: ${this.#endereco} \nRenda: ${this.#renda}`)
      }
    get nome(){
        return this.#nome;
    }
    get endereco(){
        return this.#endereco;
    }
    get renda(){
        return this.#renda;
    }
    set nome(novoNome) {
        if (typeof novoNome === "string" && novoNome.trim() !== "" && isNaN(novoNome)) {
          this.#nome = novoNome;
        } else {
          console.log("Nome inválido");
        }
      }
    
      set endereco(novoEndereco) {
        if (typeof novoEndereco === "string" && novoEndereco.trim() !== "") {
          this.#endereco = novoEndereco;
        } else {
          console.log("Endereço inválido");
        }
      }
    
      set renda(novaRenda) {
        if (typeof novaRenda === "number" && novaRenda >= 0) {
          this.#renda = novaRenda;
        } else {
          console.log("Renda inválida");
        }
      }
}
let cliente1 = new Cliente("Julia","Casa do baralho",2.50);
let cliente2 = new Cliente("Paulo","Rua asfaltada",2560.50);
let cliente3 = new Cliente(prompt("Digite Seu nome: ") ,  (prompt("Digite seu endereço: ")) , parseFloat(prompt("Digite sua renda: ")))

cliente1.imprimir();
cliente2.imprimir();
cliente3.imprimir();

console.log("deseja alterar o nome do cliente 3? (s/n)")
let resposta = prompt();
if (resposta.toLowerCase() === "s") {
    let novoNome = prompt("Digite o novo nome: ");
    cliente3.nome = novoNome;
}

cliente1.imprimir();
cliente2.imprimir();
cliente3.imprimir();
