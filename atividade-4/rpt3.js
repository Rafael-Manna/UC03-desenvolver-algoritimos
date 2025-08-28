import promptSync from 'prompt-sync'
const prompt = promptSync()
let num = Number(prompt('Digite um número: '))
let divisores = 0;
for(let i=1;i<=num;i++){
    if(num % i == 0){
        divisores++
    }
}
if ( divisores == 2 || num == 1){
    console.log(`O número ${num} é primo!`)
} 
else{
    console.log(`O número ${num} não é primo!`)
}