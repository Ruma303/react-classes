import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { // Inizializzare lo stato del componente
            clickCount: 0
        };

        // Il binding del contesto per l'evento handleClick
        // Questo assicura che this all'interno della funzione handleClick, si riferisca all'istanza del componente
        this.handleClick = this.handleClick.bind(this);
    }

    // Gestore dell'evento per l'evento onClick
    handleClick(event) {
        this.setState(prevState => ({
            clickCount: prevState.clickCount + 1
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    Cliccato {this.state.clickCount} volte!
                </button>
            </div>
        );
    }
}

export default EventComponent;