import React, { Component } from 'react';

export default class Multiply extends Component {

    constructor() {
        super();

        this.state = {
        number1: 0,
        number2: 0,
        product: null
        }
    }

    updateNumber1(val) {
        this.setState({ number1: Math.floor(val) });
    }

    updateNumber2(val) {
        this.setState({ number2: Math.floor(val) });
    }

    multiply(num1, num2) {
        this.setState({ product: num1 * num2 });
    }

    render() {
        return (
        <div className="puzzleBox sumPB">
            <h4> Multiply </h4>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber1(e.target.value) }></input>
            <input className="inputLine" type="number" onChange={ (e) => this.updateNumber2(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.multiply(this.state.number1, this.state.number2) }> Multiply </button>
            <span className="resultsBox"> Product: {this.state.product} </span>
        </div>
        )
    }
}