import promptSync from 'prompt-sync'
const prompt = promptSync()
const valor = Number(prompt('largura do retangulo? '))
const valor2 = Number(prompt('altura do retangulo? '))
console.log(`A área do retângulo é: ${valor * valor2}`)
console.log(`O perimetro do retângulo é: ${2*(valor+valor2)}`)

