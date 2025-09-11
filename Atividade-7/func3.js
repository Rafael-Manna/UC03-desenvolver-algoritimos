import PromptSync from 'prompt-sync';
const prompt = PromptSync();
console.clear();
let estoque = [
  "Arroz", "Feijão", "Macarrão", "Farinha", "Açúcar",
  "Sal", "Óleo", "Leite", "Café", "Pão"
];
let vendidos = []; // array para registrar produtos vendidos
let qtdven = []; // array para registrar quantidades vendidas
let totalven = []; // array para registrar totais vendidos
let faturamento = 0; // variável para registrar o faturamento total
let qtd = [25, 30, 15, 20, 10, 50, 40, 35, 45, 60]; // quantidades relacionadas ao estoque ( pelo indice )
let preco = [20.00, 7.50, 5.00, 4.00, 3.50, 2.00, 6.00, 4.50, 8.00, 1.50];// preços relacionados ao estoque ( pelo indice )
function removeritem(nome) {
  console.clear();
  let index = estoque.indexOf(nome); // encontra o índice do produto
  if (index !== -1) {
    estoque.splice(index, 1);
    qtd.splice(index, 1);
    preco.splice(index, 1);
    console.log(`Produto "${nome}" removido do estoque.`);
  } else {
    console.log(`Produto "${nome}" não encontrado no estoque.`);
  }
}
function relatiorioVendas() {
  console.clear();
  console.log("Relatório de Vendas:");
  if (vendidos.length === 0) {
    console.log("Nenhuma venda registrada.");
    return;
  }

  for (let i = 0; i < vendidos.length; i++) {
    console.log(`${i + 1}. Produto: ${vendidos[i]} - Quantidade: ${qtdven[i]} - Total: R$${parseFloat(totalven[i]).toFixed(2)}`);
  }

  console.log(`\nFaturamento total: R$${faturamento.toFixed(2)}`);
}
function registroVenda(nome, quantidadeREG) {
  console.clear();
  if (quantidadeREG > qtd[estoque.indexOf(nome)]) {
    console.log("Quantidade insuficiente em estoque.");
    return;
  } else {
    let index = estoque.indexOf(nome); // encontra o índice do produto do estoque
    qtd[index] = qtd[index] - quantidadeREG;
    console.log(`Venda registrada: ${quantidadeREG} unidade(s) de "${nome}".`);
    console.log(`Total: R$${(quantidadeREG * preco[index]).toFixed(2)}`);
    vendidos.push(nome);
    qtdven.push(quantidadeREG);
    totalven.push((quantidadeREG * preco[index]).toFixed(2));
    faturamento = faturamento + (quantidadeREG * preco[index]);
    console.log(`Faturamento total atualizado: R$${faturamento.toFixed(2)}`);
  }
}

function adicionarProduto(produto, quantidade, valor) {
  console.clear();
  let index = estoque.indexOf(produto);
  if (index !== -1) {
    if (estoque[index].toLowerCase() === produto.toLowerCase()) {
    console.log(`Produto "${produto}" já existe no estoque, quantidade no estoque e preço atualizado.`);
    qtd[index] = qtd[index] + Number(quantidade);
    preco[index] = Number(valor);
    }
  } else {
    estoque.push(produto);
  qtd.push(Number(quantidade));
  preco.push(Number(valor));
  console.log(`Produto "${produto}", quantidade ${quantidade} e preço R$${valor} adicionado ao estoque.`);
  }
    
}
function listarProdutos() {
  console.clear();
  console.log("Produtos no estoque:");
  for (let i = 0; i < estoque.length; i++) {
    console.log(`${i + 1}. ${estoque[i]} - Quantidade: ${qtd[i]} - Preço: R$${preco[i].toFixed(2)}`);
  }
}

console.log("Bem-vindo ao sistema de estoque!");

let opcao = 0;
while (opcao !== 7) {
  console.log("\nEscolha uma opção:");
  console.log("[1] Adicionar produto");
  console.log("[2] Remover produto");
  console.log("[3] Listar produtos");
  console.log("[4] Registrar venda");
  console.log("[5] Ver item do estoque");
  console.log("[6] Relatório de vendas");
  console.log("[7] Sair");

  opcao = Number(prompt("Opção: "));

  switch (opcao) {
    case 1:
      let nomeProduto = prompt("Digite o nome do produto: ");
      let quantidade = prompt("Digite a quantidade: ");
      let valor = prompt("Digite o preço: ");
      adicionarProduto(nomeProduto, quantidade, valor);
      break;
    case 2:
      let nomeProduto1 = prompt("Digite o nome do produto: ");
      removeritem(nomeProduto1);
      break;
    case 3:
      listarProdutos();
      prompt("Pressione Enter para continuar...");
      console.clear();
      break;

    case 4:
      let nome = prompt("Digite o nome do produto vendido: ");
      let quantidadeVendida = Number(prompt("Digite a quantidade vendida: "));
      registroVenda(nome, quantidadeVendida);
      break;

    case 5:
      let index = Number(prompt("Digite o número do item: ")) - 1;
      if (index >= 0 && index < estoque.length) {
        console.log(`Produto: ${estoque[index]}`);
        console.log(`Quantidade: ${qtd[index]}`);
        console.log(`Preço: R$${preco[index].toFixed(2)}`);
      } else {
        console.log("Item não encontrado.");
      }
      break;
      case 6:
        relatiorioVendas();
        break;
      case 7:
      console.log("Saindo do sistema...");
      break;

    default:
      console.log("Opção inválida.");
  }
}
