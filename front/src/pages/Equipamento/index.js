import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';


export default function Register() {
  const [inicio, setInicio] = useState('');
  const [fim, setFim] = useState('');
  const [operadores, setOperadores] = useState([]);
  const [equipamentos, setEquipamentos] = useState([]);
  const [itens, setItems] = useState([]);


  const [selectedEquipamento, setSelectedEquipamento] = useState('all');
  const [selectedOperador, setSelectedOperador] = useState('all');

  const history = useHistory();

  useEffect(() => {
    api.get('/equipamentos').then((response) => {
      setEquipamentos(response.data);
    });
  }, []);

  useEffect(() => {
    api.get('/operadores').then((response) => {
      setOperadores(response.data);
    });
  }, []);

  function handleSelectEquipamento(e) {
    const equipamento = e.target.value;
    setSelectedEquipamento(equipamento);
  }

  function handleSelectOperadores(e) {
    const operador = e.target.value;
    setSelectedOperador(operador);
  }

  function formatDate(date) {
    //date= date.split('-');
    const ano = date.substr(0,4);
    const mes = date.substr(5,2);
    const dia = date.substr(8,2);
    
    return dia+"/"+mes+"/"+ano;
  }

  async function handleRegister(e) {
    e.preventDefault();

    const operadores = selectedOperador;
    const equipamentos = selectedEquipamento;

    const data = {
      inicio,
      fim,
      operadores,
      equipamentos
    };

    try {
      const response = await api.post('relatorio/equipamentos', data);

      setItems(response.data);

      
    } catch (err) {
      alert('Tivemos um erro ao gerar o relatório, tente novamente.');
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
          <form onSubmit={handleRegister}>

            <h1>Relatório de utilização de equipamento</h1>

            <div className="input-group">
              <p>Inicio
                <input
                  placeholder="Inicio"
                  value={inicio}
                  onChange={e => setInicio(e.target.value)}
                  type="date"
                  
                /></p>

              <p>Fim
                <input
                  placeholder="Fim"
                  value={fim}
                  onChange={e => setFim(e.target.value)}
                  type="date"
                />
              </p>
            </div>

            <div className="input-group">
              <p>Equipamento
                <select
                name="equipamento"
                id="equipamento"
                value={selectedEquipamento}
                onChange={handleSelectEquipamento}
              >
                <option value="all">TODOS EQUIPAMENTOS</option>

                {equipamentos.map(equipamento => (
                  <option key={equipamento.id} value={equipamento.id}>
                    {equipamento.nome}
                  </option>
                ))}
              </select>
              </p>

              <p>Operador
              <select
                name="operador"
                id="operador"
                value={selectedOperador}
                onChange={handleSelectOperadores}
              >
                <option value="all">TODOS OPERADORES</option>

                {operadores.map(operador => (
                  <option key={operador.id} value={operador.id}>
                    {operador.nome}
                  </option>
                ))}
              </select>
              </p>
            </div>

            <button className="button" type="submit">Gerar Relatório</button>
          </form>

         

          <section className="relatorio">
            <h2>Relatório</h2>

            <h4>Utilizações</h4>
            <table >
              <tr>
                <th>Data</th>
                <th>Equipamento</th>
                <th>Nº de Série</th>
                <th>Operador</th>
              </tr>

              {itens.map(item => (
                <tr>
                  <td>{formatDate(item.data)}</td>
                  <td>{item.nome}</td>
                  <td>{item.serie}</td>
                  <td>{item.operador}</td>
                </tr>
            ))}

             
            </table>
          </section>

        </div>
      </div>
    </div>
  );
}