import Funcionario from "./funcionario.js";

class Dependente extends Funcionario {
    constructor(nome, nome_dependente){
        super(nome);
        this.nome_dependente = nome_dependente;

    }
}

export default Dependente;    
