import React, {Component} from "react";
import {Link} from "react-router-dom";

class AddCEP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            zipCode: null,
            city: ""
        };

        this.register = this.register.bind(this);
        this.alterZipCode = this.alterZipCode.bind(this);
        this.alterCity = this.alterCity.bind(this);
    }

    alterCity(event) {
        let city = event.target.value;
        this.setState({city: city});
    }

    alterZipCode(event) {
        let zipCode = event.target.value;
        this.setState({zipCode: zipCode});
    }

    register(event) {
        let url = "http://127.0.0.1:1940/zipcode";
        fetch(url, {zipCode: this.state.zipCode, city: this.state.city}).then((response) => response.json()).then((responseJSON) => {
            let state = this.state;
            console.log();
            if (responseJSON.error) {
                state.error = responseJSON.error;
            }
            this.setState(state);
        });

        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h3>Inserindo um CEP</h3>
                <form onSubmit={this.register}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <div className="form-group">
                        <label for="zipCode">CEP:</label>
                        <input id="zipCode" className="form-control form-control-sm" name="zipCode" type="number" min="100000" max="999999" value={this.state.zipCode} onChange={this.alterZipCode} required/>
                    </div>
                    <div className="form-group">
                        <label for="city">Cidade:</label>
                        <input id="city" className="form-control form-control-sm" name="city" type="text" value={this.city} onChange={this.alterCity} required/>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm">Salvar</button>
                </form>
            </div>
        );
    }
}

export default AddCEP;