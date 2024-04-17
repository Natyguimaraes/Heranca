const Pessoa = require('./pessoa');

class Funcionario extends Pessoa {
    construtor(nome, idade, cargo) {
        super(nome, idade);
        this.cargo = cargo;
    }

    mostrarDados() {
        super.mostrarDados();
        console.log(`Sou um ${this.cargo}.`);
    }
}

module.exports = { Funcionario };