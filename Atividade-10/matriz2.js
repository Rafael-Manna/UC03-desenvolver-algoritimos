import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let enfermaria = [];
let resposta = 's';
for (let i = 0; i < 5; i++) { // 5 enfermarias
  let leito = [];
  for (let j = 0; j < 7; j++) { // 7 leitos por enfermaria
    leito.push("L"); // Leito livre
  }
  enfermaria.push(leito);
}
console.table(enfermaria);
while (resposta === 's') {
console.log("Deseja ocupar um leito? (s/n)");
 resposta = prompt().toLowerCase();
if (resposta === 's') {
    console.log("Digite o número da enfermaria (1-5): ");
    let enfNum = parseInt(prompt()) - 1;
    console.log("Digite o número do leito (1-7): ");
    let leitoNum = parseInt(prompt()) - 1;
    if (enfNum >= 0 && enfNum < 5 && leitoNum >= 0 && leitoNum < 7) {
        if (enfermaria[enfNum][leitoNum] === "L") {
            enfermaria[enfNum][leitoNum] = "O"; // Ocupa o leito
            console.log(`Leito ${leitoNum + 1} na enfermaria ${enfNum + 1} agora está ocupado.`);
        } else {
            console.log("Leito já está ocupado.");
            prompt("Pressione Enter para continuar...");
        }
    }

} else if (resposta === 'n') {
    console.log("Saindo do sistema.");
    break;
}
console.clear();
console.table(enfermaria);
}