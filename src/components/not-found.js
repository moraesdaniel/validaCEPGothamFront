import React, {Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <h3>Ops! Página não encontrada!</h3>
                <h5>Escolha uma das páginas abaixo:</h5>
                <Link to="/">Adicionar CEP</Link> <br />
                <Link to="/zip-code-list">Lista de CEP's</Link>
            </div>
        );
    }
}

export default NotFound;