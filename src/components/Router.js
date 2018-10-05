import React from 'react';
import {BrowserRouter, Switch, Route}  from "react-router-dom";
import App from "../App";
import Recipe from "./Recipe";
import About from './About';
import Contact from './Contact';
import Daily from './Daily';
const Router = () => (
    <BrowserRouter>
        <Switch> 
            <Route path="/" component={App} exact />
            <Route path="/recipe/:id" component={Recipe} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/daily-menu" component={Daily} />
        </Switch>
    </BrowserRouter>
);
export default Router;

