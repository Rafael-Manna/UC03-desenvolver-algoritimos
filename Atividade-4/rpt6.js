import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('Controle de Gastos do Mês:');
console.log("Digite seu salario:");
let salario = Number(prompt());
let dia = 1;
let gastos = 0;
let totalGastos = 0;
let maior = 0;
let menor = 0;
for (let i=1;i<=10;i++){ // Alterar para 30 para considerar todos os dias do mês
    
        console.log(`Dia ${dia} `);
    
    console.log(`Gastos do dia :`);
    gastos = Number(prompt());
    totalGastos = totalGastos + gastos;
    if(dia == 1){ // recebe os valores de maior e menor no primeiro dia
        maior = gastos;
        menor = gastos;
    } else{
        if(gastos > maior){
            maior = gastos;
        }
        if(gastos < menor){
            menor = gastos;
        }
    }
    dia++;

}
console.log(`Total de gastos no mês: R$ ${totalGastos.toFixed(2)}`);
console.log(`Seu saldo no final do mês é de R$ ${(salario - totalGastos).toFixed(2)}`);
 if(totalGastos > salario){
    console.log("Você gastou mais do que deveria nesse mês!");}
    else{
        console.log("Você conseguiu economizar!");
    }
console.log(`Maior gasto no mês: R$ ${maior.toFixed(2)}`);
console.log(`Menor gasto no mês: R$ ${menor.toFixed(2)}`);

