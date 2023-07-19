import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        };
        //$ Binding esplicito
        this.handleClick = this.handleClick.bind(this);
    }
    //$ Funzione tradizionale con binding
    handleClick(event) {
        this.setState(prevState => ({
            clickCount: prevState.clickCount + 1
        }));
        console.log(event.target)
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={(event) =>
                    console.log('Evento scatenato su', event.target)}
                    >
                    Event Handler
                </h2>
                <button onClick={this.handleClick}>
                    Cliccato {this.state.clickCount} volte!
                </button>
                {console.log(this)}
            </div>
        );
    }
}

export default EventComponent;

/* import React, { Component } from 'react';

class EventComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clickCount: 0
        }
    };
    //$ Alternativa Arrow Function
    handleClick = (event) => {
        this.setState(prevState => ({
            clickCount: prevState.clickCount + 1
        }));
    }

    render() {
        return (
            <div>
                <h2 onMouseOver={(event) =>
                    console.log('Evento scatenato su', event.target)}>
                    Event Handler
                </h2>
                <button onClick={this.handleClick}>
                    Cliccato {this.state.clickCount} volte!
                </button>
            </div>
        );
    }
}

export default EventComponent;
 */
