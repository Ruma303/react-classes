import React, { Component } from "react";
class ClassComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            message: "ClassComponents",
        };
        console.log("constructor");
    }
    //$ Metodi di Montaggio
    static getDerivedStateFromProps(props, state) {
        console.log("getDerivedStateFromProps");
        return null;
    }
    componentDidMount() {
        console.log("Componente montato");
        //this.setState({ counter: 10 });
    }

    //$ Metodi di Aggiornamento
    shouldComponentUpdate(nextProps, nextState) {
        console.log("shouldComponentUpdate");
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("getSnapshotBeforeUpdate");
        return "snapshot";
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Componente aggiornato", snapshot);
    }

    //$ Metodo di Smontaggio
    componentWillUnmount() {
        console.log("Componente in procinto di essere smontato");
    }
    render() {
        console.log("render");
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button
                    onClick={() => this.setState({ counter: this.state.counter + 1 })}
                >
                    Aumenta contatore
                </button>
                <p>{this.state.counter}</p>
                <div className="class-components"></div>
            </div>
        );
    }
}
export default ClassComponents;
