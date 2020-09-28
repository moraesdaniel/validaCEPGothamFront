import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import AddCEP from "./components/add-cep.js";
import ZipCodeList from "./components/zip-code-list.js";

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={AddCEP}/>
                <Route exact path="/zip-code-list" component={ZipCodeList}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;