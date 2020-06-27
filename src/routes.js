import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import PageLogin from './pages/Login'
import PageCadastro from './pages/Cadastro'
import PageHome from './pages/Home'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={PageLogin} />
                <Route path="/login" component={PageLogin} />
                <Route path="/cadastro" component={PageCadastro} />
                <Route path="/home" component={PageHome} />
            </Switch>
        </BrowserRouter>
    );
};