import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let matriz = [];


for (let i = 0; i < 7; i++) {
  let linha = []; // cria uma nova linha para a matriz
  for (let j = 0; j < 3; j++) {
    let nome = prompt(`Digite o nome para posição [${i}][${j}]: `);
    linha.push(nome); // adiciona o nome na linha
  } // quando terminar as colunas , adiciona a linha na matriz 
  matriz.push(linha);
}

console.table(matriz);


// Função que lê o dia e a refeição e retorna os índices
function diaSemana() {
  let dia = prompt("Escreva um dia da semana: ");
  let refeicao = prompt("Escolha uma refeição (Café, Almoço, Jantar): ");


  switch (dia.toLowerCase()) {
    case "segunda": 
    dia = 1;
    break;
    case "terca":
    case "terça":
    dia = 2; 
    break;
    case "quarta":
    dia = 3;
    break;
    case "quinta": 
    dia = 4; 
    break;
    case "sexta": 
    dia = 5; 
    break;
    case "sabado":
    case "sábado": 
    dia = 6; 
    break;
    case "domingo": 
    dia = 7;
    break;
    default:
    console.log("Dia inválido");
    return diaSemana();
  }

  switch (refeicao.toLowerCase()) {
    case "cafe":
    case "café": 
    refeicao = 1;
    break;
    case "almoco":
    case "almoço": 
    refeicao = 2;
    break;
    case "jantar": 
    refeicao = 3;
    break;
    default:
      console.log("Refeição inválida");
      return diaSemana();
  }

  return { dia, refeicao };
}

console.log("Que dia você quer ver?");
const resultado = diaSemana();

if (resultado) {
  const { dia, refeicao } = resultado;
  console.log(`A refeição do dia ${dia} é: ${matriz[dia - 1][refeicao - 1]}`);

  let alterar = prompt("Deseja alterar alguma refeição? (s/n) ").toLowerCase();
  if (alterar === "s" || alterar === "sim") {
    const novoResultado = diaSemana();
    if (novoResultado) {
      const { dia: novoDia, refeicao: novaRefeicao } = novoResultado;
      let novoNome = prompt("Digite a nova refeição: ");
      matriz[novoDia - 1][novaRefeicao - 1] = novoNome;
      console.log(`Refeição do dia ${novoDia} alterada para: ${novoNome}`);
    }
  }
}
console.table(matriz);
