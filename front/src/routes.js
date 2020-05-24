import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Operador from './pages/Operador';


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
    
        <Route path="/" component={Operador} />
    
      </Switch>
    </BrowserRouter>
  );
}