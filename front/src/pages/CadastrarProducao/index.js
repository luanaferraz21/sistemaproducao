import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';

export default function Register() {
  const [quantidade, setQuantidade] = useState('');
  const [produtosDefeituosos, setProdutosDefeituosos] = useState('');
  const [data, setData] = useState('');


  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      quantidade,
      produtosDefeituosos,
      data
    };

    try {
      //const response = await api.post('ongs', data);

      //alert(`Seu ID de acesso: ${response.data.id}`);

      history.push('/');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return(
    <div className="register-container">

      <div className="content">

        <section>
        <div className="producao">
            <h3>Maio 2020 - 24/05</h3>
            <p>Demanda: 320pcs</p>
            <p>Produzido: 127pcs</p>
            <p>Restam: 193pcs</p>
          </div>
         
          <Link className="back-link" to="/producao/cadastrar">Produção</Link>
          <Link className="back-link" to="/demanda/cadastrar">Demanda</Link>
          <Link className="back-link" to="/defeitos">Produtos Defeituosos</Link>
          <Link className="back-link" to="/relatorioProducao">Produção Diária</Link>
          <Link className="back-link" to="/equipamento/relatorio">Equipamentos</Link>
          <Link className="back-link" to="/operador/cadastrar">Operadores</Link>
        </section>

        <form onSubmit={handleRegister}>
          <h1>Adicionar Produção</h1> 

          <p>Produto</p>
            <select>
              <option value="estojo">Estojo Infantil</option>
              <option value="estojo">Estojo Infantil</option>
              <option selected value="estojo">Estojo Infantil</option>
              <option value="estojo">Estojo Infantil</option>
            </select>

          <p>Quantidade</p>
          <input 
          placeholder="Quantidade"
          value={quantidade}
          type={Number}
          min="1"
          onChange={e => setQuantidade(e.target.value)}
          /> 

        <p>Produtos defeituosos</p>
          <input 
          placeholder="ProdutosDefeituosos"
          value={produtosDefeituosos}
          type={Number}
          min="1"
          onChange={e => setProdutosDefeituosos(e.target.value)}
          />  

          <p>Data</p>
          <input 
              placeholder="Data"
              value={data}
              onChange={e => setData(e.target.value)}
            />

          <button className="button" type="submit">Cadastrar</button>
             
        </form>
      </div>
    </div>
  )
}
