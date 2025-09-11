import promptSync from 'prompt-sync'
const prompt = promptSync()
const wall = Number(prompt('tamanho da parede(m2)? '))
const tinta = wall/6
console.log(`Quantidade de tinta necessária: ${tinta}L`)