import Pessoa from './pessoa.js'

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo, salario) {
        super(nome, idade);
        this.cargo = cargo;
        this.salario = salario;
    }

    mostrarDadosFunc() {
        super.mostrarDados();
        console.log(`Sou um(a) ${this.cargo}, meu salário é ${this.salario}.`);
    }

atualizarDados(novoNome, novaIdade, novoCargo, novoSalario){
    super.atualizarDados(novoNome, novaIdade);
    this.cargo = novoCargo;
    this.salario = novoSalario;
    }
}

const funcionario1 = new Funcionario("Naty", 20,"Programadora", 4000);
funcionario1.mostrarDadosFunc();

funcionario1.atualizarDados("Natalia Guimaraes", 20, "Programadora", 4120);
funcionario1.mostrarDadosFunc();

export default Funcionario; 