import PromptSync from 'prompt-sync';
const prompt = PromptSync();
//polimorfismo
// classe mae pessoa
class Pessoa {
    constructor(nome, cpf, datanas) {
        this.nome = nome;
        this.cpf = cpf;
        this.datanas = datanas;
    }

    imprimir() {
        console.log(`Nome: ${this.nome}\nCPF: ${this.cpf}\nData de Nascimento: ${this.datanas}`);
    }
}

class Funcionario extends Pessoa {
    constructor(nome, cpf, datanas, cargo, salario, matricula) {
        super(nome, cpf, datanas);
        this.cargo = cargo;
        this.salario = salario;
        this.matricula = matricula;
    }

    calcHE(he) {
        this.salario += he * 15;
    }

    imprimir() {
        super.imprimir();
        console.log(`Cargo: ${this.cargo}\nSalário: ${this.salario.toFixed(2)}\nMatrícula: ${this.matricula}`);
    }
}

class Gerente extends Funcionario {
    constructor(nome, cpf, datanas, cargo, salario, matricula, setor, qtdeqp) {
        super(nome, cpf, datanas, cargo, salario, matricula);
        this.setor = setor;
        this.qtdeqp = qtdeqp;
    }

    bonificacao() {
        if (this.qtdeqp >= 10) {
            this.salario *= 1.15;
        } else {
            this.salario *= 1.07;
        }
    }

    imprimir() {
        super.imprimir();
        console.log(`Setor: ${this.setor}\nEquipe: ${this.qtdeqp} pessoas`);
    }
}

class Diretor extends Funcionario {
    constructor(nome, cpf, datanas, cargo, salario, matricula, partLucros, dep, tempodirecao) {
        super(nome, cpf, datanas, cargo, salario, matricula);
        this.partLucros = partLucros;
        this.dep = dep;
        this.tempodirecao = tempodirecao;
    }

    grat() {
        if (this.partLucros === "habilitado") {
            if (this.tempodirecao >= 5) {
                this.salario *= 1.30;
            } else if (this.tempodirecao >= 3) {
                this.salario *= 1.25;
            } else {
                this.salario *= 1.20;
            }
        } else {
            this.salario *= 1.15;
        }
    }

    imprimir() {
        super.imprimir();
        console.log(`Departamento: ${this.dep}\nTempo de direção: ${this.tempodirecao} anos`);
    }
}

class Dono extends Pessoa {
    constructor(nome, cpf, datanas, patrimonio, partacao) {
        super(nome, cpf, datanas);
        this.patrimonio = patrimonio;
        this.partacao = partacao;
    }

    investir(valor) {
        this.patrimonio += valor;
        this.partacao += valor;
    }

    retirar(valor) {
        this.patrimonio -= valor;
        this.partacao -= valor;

    }

    imprimir() {
        super.imprimir();
        console.log(`Patrimônio: ${this.patrimonio}\nParticipação: ${this.partacao}`);
    }
}

// Menu
console.log(`O que você quer cadastrar:\n[1] Funcionario\n[2] Gerente\n[3] Diretor\n[4] Dono`);
let escolha = prompt('');

let nome = prompt("Digite seu nome: ");
let cpf = prompt("Digite seu CPF: ");
let datanas = prompt("Digite sua data de nascimento: ");

switch (escolha) {
    case '1': {
        let cargo = prompt("Digite o cargo: ");
        let salario = parseFloat(prompt("Digite o salário: "));
        let matricula = prompt("Digite a matrícula: ");
        let horas = Number(prompt("Quantas horas extras voce trabalhou esse mês: "));
        let f = new Funcionario(nome, cpf, datanas, cargo, salario, matricula);
        f.calcHE(horas);
        f.imprimir();
        break;
    }

    case '2': {
        let cargo = prompt("Digite o cargo: ");
        let salario = parseFloat(prompt("Digite o salário: "));
        let matricula = prompt("Digite a matrícula: ");
        let setor = prompt("Digite o setor: ");
        let qtdeqp = parseInt(prompt("Digite a quantidade de pessoas na equipe: "));
        let g = new Gerente(nome, cpf, datanas, cargo, salario, matricula, setor, qtdeqp);
        g.bonificacao();
        g.imprimir();
        break;
    }

    case '3': {
        let cargo = prompt("Digite o cargo: ");
        let salario = parseFloat(prompt("Digite o salário: "));
        let matricula = prompt("Digite a matrícula: ");
        let partLucros = prompt("Participação nos lucros (habilitado/desabilitado): ");
        let dep = prompt("Digite o departamento: ");
        let tempodirecao = parseInt(prompt("Digite o tempo de direção (anos): "));
        let d = new Diretor(nome, cpf, datanas, cargo, salario, matricula, partLucros, dep, tempodirecao);
        d.grat();
        d.imprimir();
        break;
    }

    case '4': {
        let patrimonio = parseFloat(prompt("Digite o patrimônio da empresa: "));
        let partacao = parseFloat(prompt("Digite o valor de participação: "));
        let invest = parseFloat(prompt("Digite o Valor para investir:"))
        let ret = parseFloat(prompt("Digite o Valor para retirar:"))
        let dono = new Dono(nome, cpf, datanas, patrimonio, partacao);
        dono.investir(invest); 
        dono.retirar(ret);
        dono.imprimir();
        break;
    }

    default:
        console.log("Opção inválida!");
        break;
}
