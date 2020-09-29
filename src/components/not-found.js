import React, {Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component {
    render() {
        return (
            <div className="container">
                <Link to="/">Adicionar CEP</Link> <br />
                <Link to="/zip-code-list">Lista de CEP's</Link>
                <h3>Ops! Página não encontrada!</h3>
            </div>
        );
    }
}

export default NotFound;