import React, { useState } from 'react'
import './index.css';


function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cargo, setCargo] = useState('');
  const [rua, setRua] = useState('');
  const [bairro, setBairro] = useState('');
  const [numero_casa, setNumeroCasa] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [dependente, setDependente] = useState('');



  const handleCadastro = () => {

    alert(`Nome: ${nome}, Idade: ${idade}, 
    Email: ${email}, Telefone: ${telefone}, Rua: ${rua},
    Bairro: ${bairro}, Numero da Casa: ${numero_casa},
    Cidade: ${cidade}, Estado ${estado}, Cargo: ${cargo},
    Dependente: ${dependente}`);
  };

  return (
    <>
      <div className="App">
        <h1> Cadastro de Pessoa e Funcionário </h1>
        <div className="Container">
          <form>
          <div className="inputs-lab">
            <label> Nome: </label>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Idade </label>
            <input type="number" value={idade} onChange={(e) => setIdade(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> E-mail </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Telefone </label>
            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Rua </label>
            <input type="text" value={rua} onChange={(e) => setRua(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Bairro </label>
            <input type="text" value={bairro} onChange={(e) => setBairro(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Numero da Casa </label>
            <input type="text" value={numero_casa} onChange={(e) => setNumeroCasa(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Cidade: </label>
            <input type="text" value={cidade} onChange={(e) => setCidade(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Estado </label>
            <input type="text" value={estado} onChange={(e) => setEstado(e.target.value)} />
          </div>
          <div className="inputs-lab">
            <label> Cargo (Somente Funcionários): </label>
            <input type="text" value={cargo} onChange={(e) => setCargo(e.target.value)} />
          </div>
          <h2> Dependente </h2>
          <div className="inputs-lab">
            <label> Nome </label>
            <input type="text" value={dependente} onChange={(e) => setDependente(e.target.value)} />
          </div>
          <div className="botao">
          <button onClick={handleCadastro}>Cadastrar</button>
          </div>
          </form>
        </div>  
      </div>
    </>
  )
}

export default App;
