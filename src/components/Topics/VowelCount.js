import React, { Component } from 'react';

export default class VowelCount extends Component {

    constructor() {
        super();

        this.state = {
        userInput: '',
        count: 0,
        }
    }

    handleChange(val) {
        this.setState({userInput: val});
    }

    vowelCount(userInput) {
        this.state.count = 0;
  for (let i = 0; i < userInput.length; i++) {
    if (userInput[i] === "a" ||
        userInput[i] === "e" ||
        userInput[i] === "i" ||
        userInput[i] === "o" ||
        userInput[i] === "u") {
            this.state.count++
            this.setState({count : this.state.count })         
            }
        }
    }


    render() {
        return (
        <div className="puzzleBox vowelCountPB">
            <h4> Vowel Count </h4>
            <input className="inputLine" type="text" onChange={ (e) => this.handleChange(e.target.value) }></input>
            <button className="confirmationButton" onClick={ () => this.vowelCount(this.state.userInput) }> Calculate </button>
            <span className="resultsBox"> Number of Vowels: {this.state.count} </span>
        </div>
        )
    }
}