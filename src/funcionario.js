import Pessoa from './pessoa.js'

class Funcionario extends Pessoa {
    constructor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    mostrarDados() {
        super.mostrarDados();
        console.log(`Sou um ${this.cargo}.`);
    }
}

const funcionario1 = new Funcionario("Naty", 20,"Motorista");
funcionario1.mostrarDados();

export default Funcionario; 