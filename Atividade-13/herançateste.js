import PromptSync from 'prompt-sync';
const prompt = PromptSync();
class Trasporte{
    capacidade

    imprimir(){
        console.log(`Capacidade: ${this.capacidade}`)
    }
}

class Aereo extends Trasporte{
    medidorAltitude

    imprimir(){
        super.imprimir()
        console.log(`Medidor de Altitude: ${this.medidorAltitude}`)
    }
}

class Aviao extends Aereo{
    caixaPreta
    qtdPoltronas
    qtdTurbinas

    imprimir(){
        super.imprimir()
        console.log(`Caixa preta: ${this.caixaPreta}\nQuantidade de Poltronas: ${this.qtdPoltronas}\nQuantidade de Turbinas ${this.qtdTurbinas}`)
    }
}
console.clear();
let gol = new Aviao()
gol.capacidade = 150
gol.medidorAltitude = 1000
gol.qtdPoltronas = 180
gol.caixaPreta = "SOCORRO"
gol.qtdTurbinas = 4
gol.imprimir()
prompt('')