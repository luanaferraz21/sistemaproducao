import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';


export default function Register() {
  const [dataDe, setDataDe] = useState('');
  const [dataAte, setDataAte] = useState('');
  const [producoes, setProducoes] = useState();

function formatDate(date) {
  date= date.split('-');
  return date[2]+"/"+date[1]+"/"+date[0];
}

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      a: dataDe,
      b: dataAte
    };

    try {
      const response = await api.get('producao', { params: data });
      setProducoes(response.data);
      console.log(response.data)

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

        <div>
          <div id="titulo">

            <form onSubmit={handleRegister}>

              {/* <h1>Relatório de utilização de equipamento</h1> */}
              <h1>Relatório de Produção Diária</h1>

              <div className="input-group">
                <p>Inicio
                <input
                    placeholder=""
                    value={dataDe}
                    type="date"
                    onChange={e => setDataDe(e.target.value)}
                  /></p>

                <p>Fim
                <input
                    placeholder=""
                    value={dataAte}
                    type="date"
                    onChange={e => setDataAte(e.target.value)}
                  />
                </p>
              </div>
              <button className="button" type="submit">Gerar Relatório</button>
            </form>
          </div>
          {
            producoes &&
          <section className="relatorio">
            <h2>Relatório</h2>
            <p>De {formatDate(dataDe)} a {formatDate(dataAte)}</p>

            <table >
              <thead>
              <tr>
                <th>Nome do Produto</th>
                <th>Data</th>
                <th>Quantidade Produzida</th>
              </tr>
              </thead>
              <tbody>
              {
                producoes.map((ele) =>
                  <tr key={ele.id}>
                    <td>{ele.nome}</td>
                    <td>{formatDate(ele.data)}</td>
                    <td>{ele.quantidade}</td>
                  </tr>
                )
              }
              </tbody>

            </table>

          </section>
}
        </div>
      </div>
    </div>
  );
}