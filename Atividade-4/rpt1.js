import promptSync from 'prompt-sync'
const prompt = promptSync()
const preco = 6.99
 for(let i=1;i<=50;i++){
    console.log(`${i}      -      R$ ${(i*preco).toFixed(2)}`)
 }