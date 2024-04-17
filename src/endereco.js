const Pessoa = require('./pessoa');

class Endereco extends Pessoa {
    constructor(nome, idade, email, telefone, rua, bairro, numero_casa, cidade, estado){
        super(nome, idade, email, telefone);
        this.rua = rua;
        this.bairro = bairro;
        this.numero_casa = numero_casa;
        this.cidade = cidade;
        this.estado = estado;
    }

mostrarDados() {
    super.mostrarDados();
    console.log(`Seu endereço é: Rua: ${this.rua} Bairro: ${this.bairro}
    Número da casa: ${this.numero_casa} Cidade: ${this.cidade} Estado: ${this.estado}`);  
}

}

module.exports = { Endereco };