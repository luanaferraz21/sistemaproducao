import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';
import './styles.css';

export default function Register() {
  const [produtos, setProdutos] = useState([]);
  const [selectedProduto, setSelectedProduto] = useState(0);
  const [quantidade, setQuantidade] = useState();
  const [produtosDefeituosos, setProdutosDefeituosos] = useState();
  const [data, setData] = useState();


  const history = useHistory();

  useEffect(() => {
    fetchData()
  }, [])

  async function fetchData() {
    await api.get("/produtos").then((response) => {
      setProdutos(response.data);
    })
  }

  async function handleRegister(e) {
    e.preventDefault();

    const dados = {
      "produtos_id": selectedProduto,
      quantidade,
      "defeitos": produtosDefeituosos,
      data
    };

    try {
      const response = await api.post('producao', dados);

      alert(`Produção cadastrada com sucesso`);

      history.push('/producao/cadastrar');

    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
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
          <select
            name="produto"
            id="produto"
            value={selectedProduto}
            onChange={e => setSelectedProduto(e.target.value)}
          >
            <option value="0">Selecione um produto</option>
            {
              produtos.map((ele) => <option key={ele.id} value={ele.id}>{ele.nome}</option>)
            }

          </select>

          <p>Quantidade</p>
          <input
            placeholder="Quantidade"
            value={quantidade}
            type="number"
            min="1"
            onChange={e => setQuantidade(e.target.value)}
          />

          <p>Produtos defeituosos</p>
          <input
            placeholder="Produtos Defeituosos"
            value={produtosDefeituosos}
            type="number"
            min="1"
            onChange={e => setProdutosDefeituosos(e.target.value)}
          />

          <p>Data</p>
          <input
            placeholder="Data"
            value={data}
            onChange={e => setData(e.target.value)}
            type='date'
          />

          <button className="button" type="submit">Cadastrar</button>

        </form>
      </div>
    </div>
  )
}
