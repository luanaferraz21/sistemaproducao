import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';

//import api from '../../services/api';
import impressora from '../../assets/impressora.jpg';
import './styles.css';


export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [data, setData] = useState('');
  const [entrada, setEntrada] = useState('');
  const [saida, setSaida] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      cargo,
      data,
      entrada,
      saida
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

        <div>
          <form onSubmit={handleRegister}>

            <h1>Relatório de utilização de equipamento</h1>

            <div className="input-group">
              <p>Inicio
                <input
                  placeholder="Cargo"
                  value={cargo}
                  type="date"
                /></p>

              <p>Fim
                <input
                  placeholder="Data Admissão"
                  value={data}
                  type="date"
                />
              </p>
            </div>

            <div className="input-group">
              <p>Equipamento
                <select>
                  <option selected value="estojo">TODOS EQUIPAMENTOS</option>
                  <option value="estojo">Impressora de Tecido</option>
                  <option value="estojo">Máquina de Corte</option>
                  <option value="estojo">Máquina de Costura</option>
                </select>
              </p>

              <p>Operador
                <select>
                  <option selected value="estojo">TODOS OPERADORES</option>
                  <option value="estojo">Luana</option>
                  <option value="estojo">Clara</option>

                </select>
              </p>
            </div>

            <button className="button" type="submit">Gerar Relatório</button>
          </form>

          <section className="relatorio">
            <h2>Relatório</h2>
            <p>De 25/05/2020 a 29/05/2020</p>
            <p>EQUIPAMENTO: Impressora de Tecidos</p>
            <p>OPERADOR: Todos operadores</p>

            <img src={impressora} alt="Equipamento" />
            <p>Nº de Série: 0007-9970-09</p>
            <p>Data de Aquisição: 07/02/2020</p>

            <h4>Utilizações</h4>
            <table >
              <tr>
                <th>Data</th>
                <th>Horário</th>
                <th>Código</th>
                <th>Nome</th>
              </tr>
              <tr>
                <td>25/05/2020</td>
                <td>08:00 - 12:00</td>
                <td>001</td>
                <td>Clara</td>
              </tr>
              <tr>
                <td>26/05/2020</td>
                <td>08:00 - 12:00</td>
                <td>001</td>
                <td>Clara</td>
              </tr>
              <tr>
                <td>27/05/2020</td>
                <td>08:00 - 12:00</td>
                <td>001</td>
                <td>Clara</td>
              </tr>
              <tr>
                <td>28/05/2020</td>
                <td>08:00 - 12:00</td>
                <td>001</td>
                <td>Clara</td>
              </tr>
              <tr>
                <td>29/05/2020</td>
                <td>08:00 - 12:00</td>
                <td>001</td>
                <td>Clara</td>
              </tr>
            </table>
          </section>

        </div>
      </div>
    </div>
  );
}