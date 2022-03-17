import React, { Component } from 'react';

export default class Score extends Component{

  render () {
      return (
        <div>
         <div>Player : {this.props.data.player}</div>
         <div>Computer : {this.props.data.computer}</div>
       </div>
      )
    }

}

