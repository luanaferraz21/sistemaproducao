import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function Register() {
  const [quantidade, setQuantidade] = useState('');
  const [data, setData] = useState('');
  const [produtos, setProdutos] = useState([]);

  const [selectedProduto, setSelectedProduto] = useState('0');

  const history = useHistory();

  useEffect(() => {
    api.get('/produtos').then((response) => {
      setProdutos(response.data);
    });

    
  }, []);

  function handleSelectProduto(e) {
    const produto = e.target.value;
    setSelectedProduto(produto);
  }

  async function handleRegister(e) {
    e.preventDefault();

        const produto = selectedProduto;

    const dados = {
      quantidade,
      data,
      produto
    };

    try {
      const response = await api.post('demandas', dados);

      alert(`Demanda de produção cadastrada com sucesso`);

      history.push('/demanda/cadastrar');
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <div className="register-container">
      <div className="content">

        <section>

          <h1>Produção</h1>

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
          <h1>Adicionar Demanda</h1>

          <p>Produto</p>
          <select
                name="produto"
                id="produto"
                value={selectedProduto}
                onChange={handleSelectProduto}
              >
                <option value="0">Selecione um produto</option>

                {produtos.map(produto => (
                  <option key={produto.id} value={produto.id}>
                    {produto.nome}
                  </option>
                ))}
              </select>

          <p>Demanda (quantidade)</p>
          <input
            placeholder="Demanda"
            value={quantidade}
            type="number"
            min="1"
            onChange={e => setQuantidade(e.target.value)}
          />

          <p>Data</p>
          <input
            placeholder="Data"
            value={data}
            onChange={e => setData(e.target.value)}
            type="date"
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}