import React, { Component } from 'react';
import getDiceImageIfValidNumber from './GetDiceImageIfValidNumber';

const MESSAGES = require('../language/english.json');

const isNumeric = (n) => {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

const showDice = (props) => {

  const numberClass = getDiceImageIfValidNumber(props.dice_roll);

  if(!isNumeric(numberClass)){
    return <i className={numberClass}></i>;
  }else{
    return numberClass;
  }

}

export default class Dice extends Component{

  render () {
      return (
        <div>
         <div>{this.props.thrower}</div>
         <div>{showDice(this.props)}</div>
         <div className="wins_counter" >{MESSAGES.wins} : {this.props.wins}</div>
       </div>
      )
    }

}