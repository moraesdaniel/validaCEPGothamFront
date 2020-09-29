import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../header.css";


class Header extends Component {
    render() {
        return (
            <div className="header">
                <Link to="/">Validador de CEP's de Gotham City</Link>
            </div>
        );
    }
}

export default Header;