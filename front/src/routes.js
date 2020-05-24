import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Operador from './pages/Operador';
import Login from './pages/Login';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
    
        <Route exact path="/" component={Operador} />
        <Route path="/login" component={Login} />
    
      </Switch>
    </BrowserRouter>
  );
}
