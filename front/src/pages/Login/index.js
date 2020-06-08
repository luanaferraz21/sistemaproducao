import React, { useState } from 'react';
import {useHistory } from 'react-router-dom';
import './styles.css';
import api from '../../services/api';
import {login} from '../../services/auth';

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('login', { email, password });

            alert(`Sucesso!`);
            console.log(response.data)
            const {token, type_user} = response.data;
            
            login(token, type_user)

            history.push('/producao/cadastrar');

        } catch (err) {
            alert('Erro no login, tente novamente.');
        }
    }


    return (

        <div className="container">
            <div className="content">
                <p>Login</p>

                <form onSubmit={handleLogin}>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Seu e-mail" />
               
                    <label htmlFor="Senha">Senha</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Digite aqui sua senha" />
                    <button className="back-link">Entrar</button>
                
                </form>

            </div>
        </div>
    );

};
