import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Repositories from "./Repositories/repositories";
import Home from "./Home/home";

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/repositories' component={Repositories} />
            </Switch>
        </BrowserRouter>
    )
}