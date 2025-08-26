import promptSync from 'prompt-sync'
const prompt = promptSync()
console.log('Telefonou pra vítima?\n [1]Sim \n [2]Não \n')
let p1 = Number(prompt())
if (p1 == 2){
    p1 = 0
}
console.log('Esteve no local do crime?\n [1]Sim \n [2]Não \n')
let p2 = Number(prompt())
if (p2 == 2){
    p2 = 0
}
console.log('Mora perto da vítima?\n [1]Sim \n [2]Não \n')
let p3 = Number(prompt())
if (p3 == 2){
    p3 = 0
}
console.log('Devia para a vítima?\n [1]Sim \n [2]Não \n')
let p4 = Number(prompt())
if (p4 == 2){
    p4 = 0
}
console.log('Ja trabalhou com a vítima?\n [1]Sim \n [2]Não \n')
let p5 = Number(prompt())
if (p5 == 2){
    p5 = 0
}
let provas = p1 + p2 + p3 + p4 +p5
switch(provas){
    case 0:
    console.log("Você é inocente!")
    break;
case 1:
    console.log("Você é inocente!")
    break;
case 2:
    console.log("Você é um Suspeito!")
    break;
case 3:
    console.log("Você é o Cumplice")
    break;
case 4:
    console.log("Você é o Cumplice")
    break;
case 5:
    console.log("Você é o Assassino!!")

    break;
    default:
        console.log("ERRO!!")
        break;

}

