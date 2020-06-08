import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { isAuthenticated, getTypeUser } from "./services/auth";

import Operador from './pages/Operador';
import Login from './pages/Login';
import CadastrarDemanda from './pages/CadastrarDemanda';
import CadastrarProducao from  './pages/CadastrarProducao';
import Equipamento from './pages/Equipamento';
import Defeitos from './pages/Defeitos';
import RelatorioProducao from './pages/RelatorioProducao';


export default function Routes() {

  const PrivateRoute = ({ component: Component, type , ...rest }) => (
    <Route
      {...rest}
      render={props =>
        (isAuthenticated() && type <= getTypeUser() ) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/login" component={Login} />
        <PrivateRoute type='1' Route path="/operador/cadastrar" component={Operador} />
        <PrivateRoute type='1' Route path="/demanda/cadastrar" component={CadastrarDemanda} />
        <PrivateRoute type='1' Route path="/producao/cadastrar" component={CadastrarProducao} />
        <PrivateRoute type='1' Route path="/equipamento/relatorio" component={Equipamento} />
        <PrivateRoute type='1' Route path="/defeitos" component={Defeitos} />
        <PrivateRoute type='1' Route path="/relatorioProducao" component={RelatorioProducao} />
      </Switch>
    </BrowserRouter>
  );
}
