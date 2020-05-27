import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Operador from './pages/Operador';
import Login from './pages/Login';
import CadastrarDemanda from './pages/CadastrarDemanda';
import CadastrarProducao from  './pages/CadastrarProducao';
import Equipamento from './pages/Equipamento';
import Defeitos from './pages/Defeitos';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <Route path="/operador/cadastrar" component={Operador} />
        <Route path="/demanda/cadastrar" component={CadastrarDemanda} />
        <Route path="/producao/cadastrar" component={CadastrarProducao} />
        <Route path="/equipamento/relatorio" component={Equipamento} />
        <Route path="/defeitos" component={Defeitos} />
      </Switch>
    </BrowserRouter>
  );
}
