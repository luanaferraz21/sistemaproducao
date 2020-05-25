import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Operador from './pages/Operador';
import Login from './pages/Login';
import CadastrarDemanda from './pages/CadastrarDemanda';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
    

        <Route exact path="/" component={Operador} />
        <Route path="/login" component={Login} />
   
        <Route path="/operador/cadastrar" component={Operador} />
        <Route path="/demanda/cadastrar" component={CadastrarDemanda} />

      </Switch>
    </BrowserRouter>
  );
}
