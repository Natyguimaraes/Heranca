
class Pessoa {
    construtor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDados(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    } //instaciamento da classe// 
}

export default Pessoa;