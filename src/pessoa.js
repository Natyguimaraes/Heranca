
class Pessoa {
    construtor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    mostrarDados(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    } //instaciamento da classe// 

    atualizarDados(novoNome, novaIdade){
        this.nome = novoNome;
        this.idade = novaIdade;  
    }
}

//const pessoa1 = new Pessoa("Natália", 20);
//pessoa1.mostrarDados();


export default Pessoa;