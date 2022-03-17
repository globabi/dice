import React, { Component } from 'react';
import getDiceImageIfValidNumber from './GetDiceImageIfValidNumber';

export default class Dice extends Component{

  render () {
      return (
        <div>
         <div>{this.props.thrower}</div>
         <div>{ getDiceImageIfValidNumber(this.props.data)}</div>
       </div>
      )
    }

}