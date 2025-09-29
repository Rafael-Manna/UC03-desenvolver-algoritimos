import PromptSync from 'prompt-sync';
const prompt = PromptSync();

let usoram = 0; // Uso global de RAM
let estadomonitor = "Desligado";

// -----------------------------
// CLASSE: Memoria
// -----------------------------
class Memoria {
    #ramtipo;
    #ramhz;
    #ramtam;

    constructor(ramtipo, ramhz, ramtam) {
        this.#ramtipo = ramtipo;
        this.#ramhz = ramhz;
        this.#ramtam = ramtam;
    }

    get ramtipo() { return this.#ramtipo; }
    get ramhz() { return this.#ramhz; }
    get ramtam() { return this.#ramtam; }

    set ramtipo(novoTipo) { this.#ramtipo = novoTipo; }
    set ramhz(novaFreq) { this.#ramhz = novaFreq; }
    set ramtam(novoTam) { this.#ramtam = novoTam; }

    usarMemoria(qtd) {
        if ((usoram + qtd) <= this.#ramtam) {
            usoram += qtd;
            console.log(`📊 Uso atual de RAM: ${usoram} GB`);
        } else {
            console.log("❌ Uso de RAM está cheio.");
        }
    }

    liberarMemoria(qtd) {
        usoram -= qtd;
        if (usoram < 0) usoram = 0;
        console.log(`📉 Uso atual de RAM: ${usoram} GB`);
    }
}

// -----------------------------
// CLASSE: Processador
// -----------------------------
class Processador {
    #cpumarca;
    #cpumodelo;
    #cpunucleo;
    #cpufreq;

    constructor(cpumarca, cpumodelo, cpunucleo, cpufreq) {
        this.#cpumarca = cpumarca;
        this.#cpumodelo = cpumodelo;
        this.#cpunucleo = cpunucleo;
        this.#cpufreq = cpufreq;
    }

    get cpumarca() { return this.#cpumarca; }
    get cpumodelo() { return this.#cpumodelo; }
    get cpunucleo() { return this.#cpunucleo; }
    get cpufreq() { return this.#cpufreq; }

    set cpumarca(marca) { this.#cpumarca = marca; }
    set cpumodelo(modelo) { this.#cpumodelo = modelo; }
    set cpunucleo(nucleos) { this.#cpunucleo = nucleos; }
    set cpufreq(freq) { this.#cpufreq = freq; }
}

// -----------------------------
// CLASSE: Armazenamento
// -----------------------------
class Armazenamento {
    #tipostorage;
    #tamstorage;
    #usostorage;

    constructor(tipostorage, tamstorage) {
        this.#tipostorage = tipostorage;
        this.#tamstorage = tamstorage;
        this.#usostorage = 0;
    }

    usarStorage(qtd) {
        if ((this.#usostorage + qtd) <= this.#tamstorage) {
            this.#usostorage += qtd;
            console.log(`💾 Uso atual de armazenamento: ${this.#usostorage} GB`);
        } else {
            console.log("❌ Armazenamento CHEIO.");
        }
    }

    liberarStorage(qtd) {
        this.#usostorage -= qtd;
        if (this.#usostorage < 0) this.#usostorage = 0;
        console.log(`📤 Uso atual de armazenamento: ${this.#usostorage} GB`);
    }

    get usostorage() { return this.#usostorage; }
    get tamstorage() { return this.#tamstorage; }
    get tipostorage() { return this.#tipostorage; }
}

// -----------------------------
// CLASSE: Monitor
// -----------------------------
class Monitor {
    #resolucao;
    #tammonitor;
    #estadoMonitor;

    constructor(resolucao, tammonitor) {
        this.#resolucao = resolucao;
        this.#tammonitor = tammonitor;
        this.#estadoMonitor = "Desligado";
    }

    get resolucao() { return this.#resolucao; }
    get tammonitor() { return this.#tammonitor; }
    get estadoMonitor() { return this.#estadoMonitor; }

    set resolucao(res) { this.#resolucao = res; }
    set tammonitor(tam) { this.#tammonitor = tam; }

    ligarDesligar(resposta) {
        if (resposta == 1) {
            this.#estadoMonitor = "Ligado";
        } else {
            this.#estadoMonitor = "Desligado";
        }
        console.log(`🖥️ Monitor está agora: ${this.#estadoMonitor}`);
    }
}

// -----------------------------
// CLASSE: Computador
// -----------------------------
class Computador {
    #Memoria;
    #Processador;
    #Armazenamento;
    #Monitor;

    constructor(marca, modelo, Memoria, Processador, Armazenamento, Monitor) {
        this.marca = marca;
        this.modelo = modelo;
        this.#Memoria = Memoria;
        this.#Processador = Processador;
        this.#Armazenamento = Armazenamento;
        this.#Monitor = Monitor;
    }

    // Mostra o status completo do computador
    status() {
        console.log("\n====== STATUS DO COMPUTADOR ======");
        console.log(`Marca: ${this.marca}`);
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Processador: ${this.#Processador.cpumarca} ${this.#Processador.cpumodelo} - ${this.#Processador.cpunucleo} núcleos @ ${this.#Processador.cpufreq} GHz`);
        console.log(`RAM: ${this.#Memoria.ramtam}GB ${this.#Memoria.ramtipo} @ ${this.#Memoria.ramhz} MHz (Uso atual: ${usoram} GB)`);
        console.log(`Armazenamento: ${this.#Armazenamento.usostorage} / ${this.#Armazenamento.tamstorage} GB (${this.#Armazenamento.tipostorage})`);
        console.log(`Monitor: ${this.#Monitor.resolucao}, ${this.#Monitor.tammonitor}” - ${this.#Monitor.estadoMonitor}`);
        console.log("=================================\n");
    }

    // Métodos para manipular memória
    usarMemoria(qtd) {
        this.#Memoria.usarMemoria(qtd);
    }
    liberarMemoria(qtd) {
        this.#Memoria.liberarMemoria(qtd);
    }

    // Métodos para manipular armazenamento
    usarArmazenamento(qtd) {
        this.#Armazenamento.usarStorage(qtd);
    }
    liberarArmazenamento(qtd) {
        this.#Armazenamento.liberarStorage(qtd);
    }

    // Métodos para ligar/desligar monitor
    ligarMonitor() {
        this.#Monitor.ligarDesligar(1);
    }
    desligarMonitor() {
        this.#Monitor.ligarDesligar(0);
    }
}


// ======== CRIAÇÃO DE 2 COMPUTADORES PADRÕES ========
const computador1 = new Computador(
    "Dell",
    "Inspiron 5000",
    new Memoria("DDR4", 3200, 16),
    new Processador("Intel", "i5-10400", 6, 2.9),
    new Armazenamento("SSD", 512),
    new Monitor("1920x1080", 15.6)
);

const computador2 = new Computador(
    "Apple",
    "MacBook Air M1",
    new Memoria("LPDDR4X", 3733, 8),
    new Processador("Apple", "M1", 8, 3.2),
    new Armazenamento("SSD", 256),
    new Monitor("2560x1600", 13.3)
);


// ======== FUNÇÃO PARA TESTAR OS COMPUTADORES ========
function menu() {
    console.log("\nEscolha um computador para testar:");
    console.log("1 - Dell Inspiron 5000");
    console.log("2 - Apple MacBook Air M1");
    console.log("0 - Sair");

    let escolha = prompt("Opção: ");
    if (escolha === '0') {
        console.log("Saindo...");
        return;
    }

    let pc;
    if (escolha === '1') pc = computador1;
    else if (escolha === '2') pc = computador2;
    else {
        console.log("Opção inválida!");
        menu();
        return;
    }

    pc.status();

    while (true) {
        console.log("O que deseja fazer?");
        console.log("1 - Usar memória");
        console.log("2 - Liberar memória");
        console.log("3 - Usar armazenamento");
        console.log("4 - Liberar armazenamento");
        console.log("5 - Ligar monitor");
        console.log("6 - Desligar monitor");
        console.log("7 - Ver status");
        console.log("0 - Voltar");

        let op = prompt("Opção: ");

        if (op === '0') {
            menu();
            break;
        }

        switch (op) {
            case '1':
                let qtdUsarMem = Number(prompt("Quantidade de RAM para usar (GB): "));
                pc.usarMemoria(qtdUsarMem);
                break;
            case '2':
                let qtdLibMem = Number(prompt("Quantidade de RAM para liberar (GB): "));
                pc.liberarMemoria(qtdLibMem);
                break;
            case '3':
                let qtdUsarStorage = Number(prompt("Quantidade de armazenamento para usar (GB): "));
                pc.usarArmazenamento(qtdUsarStorage);
                break;
            case '4':
                let qtdLibStorage = Number(prompt("Quantidade de armazenamento para liberar (GB): "));
                pc.liberarArmazenamento(qtdLibStorage);
                break;
            case '5':
                pc.ligarMonitor();
                break;
            case '6':
                pc.desligarMonitor();
                break;
            case '7':
                pc.status();
                break;
            default:
                console.log("Opção inválida.");
        }
    }
}

menu();
