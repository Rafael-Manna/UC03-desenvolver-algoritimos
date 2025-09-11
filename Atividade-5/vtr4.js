import promptSync from 'prompt-sync'
const prompt = promptSync()
let meses = ["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
let temp = [];
let soma = 0;
for(let i= 0;i<12;i++){
    console.log(`Digite a temperatura media do ${i+1}º mês:`);
    temp[i] = Number(prompt());
    soma = soma + temp[i];
}
//temp.forEach( temp => (soma = soma + temp))
console.log(`\nA média anual de temperatura foi de ${(soma/12).toFixed(2)}ºC`);
for(let i= 0;i<12;i++){
    if(temp[i] > (soma/12)){
    console.log(`Temperatura em ${meses[i]} acima da média: ${temp[i]}ºC`);}
   
}
