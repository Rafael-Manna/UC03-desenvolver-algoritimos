import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('Quantos valores da sequencia de fibonacci deseja ver? ');
let qtd = Number(prompt());
let anterior = 0;
let soma = 1;
let sub = 0;
console.clear();
console.log("Sequencia de Fibonacci: ");
console.log(`${sub} `)
console.log(`${soma} `)
 for(let i=0;i<qtd - 2;i++){
    sub = soma;
    soma = anterior + soma; 
    anterior = sub;

    console.log(`${soma}`);
 }