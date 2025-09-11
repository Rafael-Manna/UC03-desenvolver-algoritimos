import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let estoque = [
  "Arroz", "Feijão", "Macarrão", "Farinha", "Açúcar",
  "Sal", "Óleo", "Leite", "Café", "Pão"
];

let qtd = [25, 30, 15, 20, 10, 50, 40, 35, 45, 60];
let preco = [20.00, 7.50, 5.00, 4.00, 3.50, 2.00, 6.00, 4.50, 8.00, 1.50];
function registroVenda(nome, quantidadeREG) {
  if quantidadeREG > qtd[estoque.indexOf(nome)] {
    console.log("Quantidade insuficiente em estoque.");
    return;
  } else {
    let index = estoque.indexOf(nome);
  
    }
  }

function adicionarProduto(produto, quantidade, valor) {
  estoque.push(produto);
  qtd.push(Number(quantidade));
  preco.push(Number(valor));
  console.log(`Produto "${produto}", quantidade ${quantidade} e preço R$${valor} adicionado ao estoque.`);
}

function listarProdutos() {
  console.log("Produtos no estoque:");
  for (let i = 0; i < estoque.length; i++) {
    console.log(`${i + 1}. ${estoque[i]} - Quantidade: ${qtd[i]} - Preço: R$${preco[i].toFixed(2)}`);
  }
}

console.log("Bem-vindo ao sistema de estoque!");

let opcao = 0;
while (opcao !== 4) {
  console.log("\nEscolha uma opção:");
  console.log("[1] Adicionar produto");
  console.log("[2] Listar produtos");
  console.log("[3] Registrar venda");
  console.log("[4] Ver item do estoque");
  console.log("[5] Sair");

  opcao = Number(prompt("Opção: "));

  switch (opcao) {
    case 1:
      let nomeProduto = prompt("Digite o nome do produto: ");
      let quantidade = prompt("Digite a quantidade: ");
      let valor = prompt("Digite o preço: ");
      adicionarProduto(nomeProduto, quantidade, valor);
      break;

    case 2:
      listarProdutos();
      break;
    case 3:
        let nome = prompt("Digite o nome do produto vendido: ");
        let quantidadeVendida = Number(prompt("Digite a quantidade vendida: "));
        registroVenda(nome, quantidadeVendida);
     break;

    case 4:
      let index = Number(prompt("Digite o número do item: ")) - 1;
      if (index >= 0 && index < estoque.length) {
        console.log(`Produto: ${estoque[index]}`);
        console.log(`Quantidade: ${qtd[index]}`);
        console.log(`Preço: R$${preco[index].toFixed(2)}`);
      } else {
        console.log("Item não encontrado.");
      }
      break;

    case 5:
      console.log("Saindo do sistema...");
      break;

    default:
      console.log("Opção inválida.");
  }
}
