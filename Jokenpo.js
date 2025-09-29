import PromptSync from 'prompt-sync';
const prompt = PromptSync();
let pedra = 1, papel = 2, tesoura = 3;
let escolha = 0;
let jogador , cpu;
function robo() {
    let robop
    robop = Math.floor(Math.random() * 3) + 1
    switch(robop){
        case 1:
        cpu = "Pedra"
        break
        case 2:
        cpu = "Papel"
        break
        case 3:
        cpu = "Tesoura"
        break
    }
    return cpu;
  }
while(1){
    console.clear();
    console.log("Escolha: \n[1]Pedra \n[2]Papel \n[3]Tesoura");
    let escolha =   Number(prompt(''));
    switch(escolha){
        case 1:
        jogador = "Pedra"
        break
        case 2:
        jogador = "Papel"
        break
        case 3:
        jogador = "Tesoura"
        break

        
    }
    cpu = robo();
    console.log(`Sua escolha foi ${jogador}`)
    console.log(`A escolha do robo foi ${cpu}`)
    if (jogador == cpu){
        console.log(" [JOGO EMPATOU]");
    } else if (
        (jogador === "Pedra" && cpu === "Tesoura") ||
        (jogador === "Papel" && cpu === "Pedra") ||
        (jogador === "Tesoura" && cpu === "Papel")
    ) {
        console.log(" Você venceu!");
    } else {
        console.log(" Você perdeu!");
    }
    prompt('\n [ENTER PARA CONTINUAR]')
    console.clear();
    
}