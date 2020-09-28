import React, { Component } from "react";

class App extends Component {
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
                {this.state.zipCodes.map((zipCode) => {
                    return (
                        <p key={zipCode._id}>CEP: {zipCode.zipCode} / Cidade: {zipCode.city}</p>
                    );
                })}
            </div>
        );
    }
}

export default App;