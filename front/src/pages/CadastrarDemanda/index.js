import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';

//import api from '../../services/api';
import './styles.css';


export default function Register() {
  const [demanda, setDemanda] = useState('');
  const [data, setData] = useState('');


  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      demanda,
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
          <Link className="back-link" to="/materiaprima">Matéria Prima</Link>
          <Link className="back-link" to="/defeitos">Produtos Defeituosos</Link>
          <Link className="back-link" to="/equipamento/relatorio">Equipamentos</Link>
          <Link className="back-link" to="/operador/cadastrar">Operadores</Link>
        </section>

        <form onSubmit={handleRegister}>
          <h1>Adicionar Demanda</h1>

          <p>Produto</p>
          <select>
            <option value="estojo">Estojo Infantil</option>
            <option value="estojo">Estojo Infantil</option>
            <option selected value="estojo">Estojo Infantil</option>
            <option value="estojo">Estojo Infantil</option>
          </select>

          <p>Demanda (quantidade)</p>
          <input
            placeholder="Demanda"
            value={demanda}
            type="number"
            min="1"
            onChange={e => setDemanda(e.target.value)}
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
  );
}