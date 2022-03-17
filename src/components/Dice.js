import React, { Component } from 'react';

export default class Dice extends Component{
  render () {
      return (
        <div>
         <div>{this.props.thrower} : {this.props.data}</div>
       </div>
      )
    }
}