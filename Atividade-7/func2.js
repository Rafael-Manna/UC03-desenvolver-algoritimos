import PromptSync from 'prompt-sync';
const prompt = PromptSync();

function depositar(saldo, valor) {
    return saldo + valor;
}
function sacar(saldo, valor) {
    if (valor > saldo) {
        console.log("Saldo insuficiente");
        return saldo;
    } else {
        return saldo - valor;
    }}
    console.log("Bem-vindo ao Banco!");
 let saldo = Number(prompt("Digite o saldo inicial: "));
 console.log("Escolha uma opção:");
    console.log("[1] Depositar");
    console.log("[2] Sacar");
    console.log("[3] Sair");
    let opcao = Number(prompt("Opção: "));
    while (opcao !== 3) {
        switch (opcao) {
            case 1:
                let valorDeposito = Number(prompt("Digite o valor a depositar: "));
                saldo = depositar(saldo, valorDeposito);
                console.log(`Saldo atual: R$${saldo.toFixed(2)}`);
                break;
            case 2:
                let valorSaque = Number(prompt("Digite o valor a sacar: "));
                saldo = sacar(saldo, valorSaque);
                console.log(`Saldo atual: R$${saldo.toFixed(2)}`);
                break;
            default:
                console.log("Opção inválida");
        }
        console.log("Escolha uma opção:");
        console.log("[1] Depositar");
        console.log("[2] Sacar");
        console.log("[3] Sair");
        opcao = Number(prompt("Opção: "));
    }


