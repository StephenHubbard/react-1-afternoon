import React, { Component } from 'react';

export default class EvenAndOdd extends Component {
  render() {

    constructor() {
        super();

        this.state = {
            evenArray: [],
            oddArray: [], 
            userInput: ''
        }
    }

    return (
        <div className="puzzleBox evenAndOddPB">
            <h4> Evens and Odds </h4>
            <input className="inputLine"></input>
            <button className="confirmationButton"> Split </button>
            <span className="resultsBox"> Evens: { JSON.stringify(this.state.evenArray) } </span>
            <span className="resultsBox"> Odds : { JSON.stringify(this.state.oddArray) } </span>
        </div>
    )
  }
}