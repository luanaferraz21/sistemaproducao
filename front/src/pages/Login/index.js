import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './styles.css';

export default function Login () {
return (

    <div className="container">
        <div className="content">
            <p>Login</p>

            <form>
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Seu e-mail"/>
            </form>

            <form>
            <label htmlFor="Senha">Senha</label>
            <input type="senha" id="senha" placeholder="Digite aqui sua senha"/>
            </form>

            <Link className="back-link" to="/producao/cadastrar">Entrar</Link>
        </div>
    </div>
  );

}
