import React, { Component } from 'react';

// Topics
import EvenAndOdd from '../Topics/EvenAndOdd'
import FilterObject from '../Topics/FilterObject'
import FilterString from '../Topics/FilterString'
import Palindrome from '../Topics/Palindrome'
import Sum from '../Topics/Sum'
import Multiply from '../Topics/Multiply'
import VowelCount from '../Topics/VowelCount'

export default class TopicBrowser extends Component {
    render() {
        return (
        <div className="mainDiv">
            <EvenAndOdd />
            <FilterObject />
            <FilterString />
            <Palindrome />
            <Sum />
            <Multiply />
            <VowelCount />
        </div>
        )
    }
}