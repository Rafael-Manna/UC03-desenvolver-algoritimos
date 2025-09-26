import PromptSync from 'prompt-sync';
const prompt = PromptSync();
let usoram = 0
let estadomonitor = "Desligado"
class Memoria{
    #ramtipo
    #ramhz
    #ramtam
    constructor(ramtipo,ramhz,ramtam){
    this.#ramtipo = ramtipo;
    this.#ramhz = ramhz;
    this.#ramtam = ramtam;
    }
    get ramtipo(){
        return this.#ramtipo;
    }
    get ramhz(){
        return this.#ramhz;
    }
    get ramtam(){
        return this.#ramtam;
    }
    set ramtipo(novoramtipo){
        this.#ramtipo = novoramtipo;
    }
    set ramhz(novoramhz){
        this.#ramhz = novoramhz;
    }
    set ramtam(novoramtam){
        this.#ramtam = novoramtam;
    }
    usarMemoria(qtd){
      if((usoram + qtd )<=this.#ramtam ){
        usoram = usoram + qtd;
        console.log(`Uso atual de ram: ${usoram}`)
      } 
      else{
        console.log("Uso de ram esta cheio.")
      }
    }
    liberarMemoria(qtd){
            usoram += -qtd;
            if(usoram < 0){
                usoram = 0;        
     }
     console.log(`Uso atual de ram: ${usoram}`)
    }
}
class Processador{
    #cpumarca
    #cpumodelo
    #cpunucleo
    #cpufreq
    constructor(cpumarca,cpumodelo,cpunucleo,cpufreq){
    this.#cpumarca = cpumarca
    this.#cpumodelo = cpumodelo
    this.#cpunucleo = cpunucleo
    this.#cpufreq = cpufreq
    }
    get cpumarca(){
        return this.#cpumarca;
    }
    get cpumodelo(){
        return this.#cpumodelo;
    }
    get cpunucleo(){
        return this.#cpunucleo;
    }
    get cpufreq(){
        return this.#cpufreq;
    }
    set cpumarca(novocpumarca){
         this.#cpumarca = novocpumarca;
    }
    set cpumodelo(novocpumodelo){
         this.#cpumodelo = novocpumodelo;
    }
    set cpunucleo(novocpunucleo){
         this.#cpunucleo = novocpunucleo;
    }
    set cpufreq(novocpufreq){
         this.#cpufreq = novocpufreq;
    }
}
class Armazenamento{
    #tipostorage
    #tamstorage
    #usostorage
    constructor(tipoestorage,tamstorage,usostorage){
        this.#tipostorage = tipoestorage
        this.#tamstorage = tamstorage
        this.#usostorage = 0
    }
    usarStorage(qtd){
        if((this.usostorage + qtd )<=this.#tamstorage ){
          this.usostorage +=  qtd;
          console.log(`Uso atual de armazenamento: ${this.usarStorage}`)
        } 
        else{
          console.log("Armazenamento CHEIO.")
        }
      }

}
class Monitor {
    #resolucao
    #tammonitor
    constructor(resolucao,tammonitor){
        this.#resolucao = resolucao
        this.#tammonitor = tammonitor
    }
    get resolucao(){
        return this.#resolucao;
    }
    get tammonitor(){
        return this.#tammonitor;
    }
    set resolucao(novoresolucao){
         this.#resolucao = novoresolucao;
    }
    set tammonitor(novotammonitor){
        this.#tammonitor = novotammonitor;
   }
   ligdes(resposta){
    if (respota == 1){
        estadomonitor = "Ligado"
    }
    else{
         estadomonitor = "Desligado"
    }
   }
}
class Computador{
    #Memoria
    #Processador
    #Armazenamento
    #Monitor
    constructor(marca,modelo,Memoria,Processador,Armazenamento,Monitor){
  this.marca = marca
  this.modelo = modelo
  this.#Memoria = Memoria
  this.#Processador = Processador
  this.#Armazenamento = Armazenamento
  this.#Monitor = Monitor
    }
}
let memoria1 = new Memoria();
memoria1.ramtam = 16;
console.log("RAM+?")
memoria1.usarMemoria(Number(prompt()));
console.log("RAM+?")
memoria1.usarMemoria(Number(prompt()));
console.log("RAM+?")
memoria1.usarMemoria(Number(prompt()));
console.log("RAM-?")
memoria1.liberarMemoria(Number(prompt()));
console.log("RAM-?")
memoria1.liberarMemoria(Number(prompt()));
console.log("RAM-?")
memoria1.liberarMemoria(Number(prompt()));
