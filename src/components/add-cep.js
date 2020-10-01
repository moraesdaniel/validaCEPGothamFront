import React, {Component} from "react";
import {Link} from "react-router-dom";

class AddCEP extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: "",
            msg: "",
            zipCode: 0,
            city: ""
        };

        this.saveZipCode = this.saveZipCode.bind(this);
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

    saveZipCode(event) {
        let url = "http://127.0.0.1:1940/zipcode";
        fetch(url,  {
                        method: "POST",
                        headers: {
                            "Accept": "application/json",
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            zipCode: this.state.zipCode, 
                            city: this.state.city
                        })
                    }).then((response) => response.json()).then((responseJSON) => {
            let state = this.state;
            state.error = "";
            state.msg = "";

            if (responseJSON.error) {
                state.error = responseJSON.error;
            } else {
                state.msg = responseJSON.msg;
                state.city = "";
                state.zipCode = 0;
            }
            this.setState(state);
        });
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <h3>Cadastro de CEPs</h3>
                <hr />
                <form onSubmit={this.saveZipCode}>
                    {this.state.error &&
                        <div className="alert alert-warning" role="alert">
                            <button type="button" className="close" data-dismiss="alert">
                                <span>&times;</span>
                            </button>
                            <strong>{this.state.error}</strong>
                        </div>
                    }
                    {this.state.msg &&
                        <div className="alert alert-success">
                            {this.state.msg}
                        </div>
                    }
                    <div className="form-row">
                        <div className="form-group col">
                            <label>CEP:</label>
                            <input id="zipCode" className="form-control form-control-sm" name="zipCode" type="number" min="100000" max="999999" value={this.state.zipCode} onChange={this.alterZipCode} required/>
                        </div>
                        <div className="form-group col">
                            <label>Cidade:</label>
                            <input id="city" className="form-control form-control-sm" name="city" type="text" value={this.state.city} onChange={this.alterCity} required/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-success btn-sm btn-block">Salvar</button>
                    <hr />
                    <Link to="/">Visualize a listagem completa aqui.</Link>
                </form>
            </div>
        );
    }
}

export default AddCEP;