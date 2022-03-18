import React, { Component } from 'react';
import getDiceImageIfValidNumber from '../components/GetDiceImageIfValidNumber';

export default class Dice extends Component{

  render () {
      return (
        <div>
         <div>{this.props.thrower}</div>
         <div>{ getDiceImageIfValidNumber(this.props.dice_roll)}</div>
         <div className="wins_counter" >Wins : {this.props.wins}</div>
       </div>
      )
    }

}