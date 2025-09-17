import PromptSync from 'prompt-sync';
const prompt = PromptSync();
function calo (a, b) {
    let cal
    if (a == 1){
     cal = 5*b;
    }
    if (a == 2){
        cal = 10*b;
       }
    if (a == 3){
        cal = 10*b;
       }
       return cal;
}
let n1 = Number(prompt("Tipo de exercicio: [1]caminhada,[2] corrida, [2]bicicleta] "));
switch (n1) {
    case 1:
        n1 = 1;
        break;
    case 2:
        n1 = 2;
        break;
    case 3:
        n1 = 3;
        break;
    default:
        console.log("Opção inválida");
        break;
}
let n2 = parseFloat(prompt("tempo em minutos de 
    exercicio: "));
let retorno = calo(n1, n2);
console.log("Seu gasto calorico foi: " + retorno);