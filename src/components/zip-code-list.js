import React, {Component} from "react";
import {Link} from "react-router-dom";

class ZipCodeList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zipCodes: []
        };
    }

    componentDidMount() {
        let url = "http://127.0.0.1:1940/zipcodes";
        fetch(url).then((response) => response.json()).then((zipCodes) => {
            let state = this.state;
            state.zipCodes = zipCodes;
            this.setState(state);
        });
    }

    render() {
        return (
            <div className="container">
                <Link to="/">Adicionar CEP</Link>
                <h3>Listagem de CEP's</h3>
                {this.state.zipCodes.map((zipCode) => {
                    return (
                        <p key={zipCode._id}>CEP: {zipCode.zipCode} / Cidade: {zipCode.city}</p>
                    );
                })}
            </div>
        );
    }
}

export default ZipCodeList;