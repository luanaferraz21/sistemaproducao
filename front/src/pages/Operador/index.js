import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
//import { FiArrowLeft } from 'react-icons/fi';

//import api from '../../services/api';
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
       

        <Link className="back-link" to="/producao">Produção</Link>
        <Link className="back-link" to="/demanda/cadastrar">Demanda</Link>
        <Link className="back-link" to="/demanda/cadastrar">Produtos Defeituosos</Link>
        <Link className="back-link" to="/demanda/cadastrar">Equipamentos</Link>
        <Link className="back-link" to="/operador/cadastrar">Operadores</Link>
      </section>
      
        <form onSubmit={handleRegister}>

        <h1>Cadastro de Funcionário</h1>      
        <p>Nome Completo</p>
          <input 
            placeholder="Nome Completo"
            value={name}
            onChange={e => setName(e.target.value)}
          />

<p>E-mail</p>
          <input 
            type="email" 
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />

        
            <div>
            <p>Cargo</p>
            <input 
            placeholder="Cargo"
            value={cargo}
            onChange={e => setCargo(e.target.value)}
          />

          <p>Data de Admissão</p>
        <input 
            placeholder="Data Admissão"
            value={data}
            onChange={e => setData(e.target.value)}
          />
        </div>
            
         
        
          <p>Horário de Trabalho</p>
          <div className="input-group">
            
            <input 
              placeholder="08:00"
              value={entrada}
              onChange={e => setEntrada(e.target.value)}
            />

            <input 
              placeholder="17:00" 
              value={saida}
              onChange={e => setSaida(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}