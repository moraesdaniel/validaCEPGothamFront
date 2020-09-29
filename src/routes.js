import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddCEP from "./components/add-cep.js";
import ZipCodeList from "./components/zip-code-list.js";
import NotFound from "./components/not-found.js";
import Header from "./components/header.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path="/" component={ZipCodeList}/>
                <Route exact path="/add-cep" component={AddCEP}/>
                <Route path="*" component={NotFound}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;