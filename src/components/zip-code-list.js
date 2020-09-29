import React, {Component} from "react";
import {Link} from "react-router-dom";
import "../bootstrap.min.css";

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
            this.setState({zipCodes: zipCodes});
        });
    }

    render() {
        return (
            <div className="container">
                <h3>Listagem de CEP's</h3>
                <table className="table table-striped table-sm">
                    <thead className="thead-dark">
                        <tr>
                            <th>CEP</th>
                            <th>Cidade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.zipCodes.map((zipCode) => {
                            return (
                                <tr>
                                    <th>{zipCode.zipCode}</th>
                                    <th>{zipCode.city}</th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <Link to="/add-cep" className="btn btn-success btn-sm">Adicionar CEP</Link>
            </div>
        );
    }
}

export default ZipCodeList;