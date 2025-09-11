import promptSync from 'prompt-sync'
const prompt = promptSync()
let vetor1 = [];
let vetorpar = [];
let vetorimpar = [];
for(let i=0;i<10;i++){
    console.log(`Digite o ${i+1}º número:`);
    vetor1[i] = Number(prompt());
}
for(let i=0;i<10;i++){
   if(vetor1[i] % 2 == 0){
    vetorpar.push(vetor1[i]);
   } else{
    vetorimpar.push(vetor1[i]);
   }
}
console.log("Vetor original:");
vetor1.forEach( num => process.stdout.write(num + " "));
console.log("\nNúmeros pares:");
vetorpar.forEach(num => process.stdout.write(num + " "));
console.log("\nNúmeros ímpares:");
vetorimpar.forEach(num => process.stdout.write(num + " "));