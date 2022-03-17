import React, { Component } from 'react';

export default class Dice extends Component{

  getDiceImage(visibleSide) {

    let numberClass = "fa-solid fa-dice-";

    switch(visibleSide) {
      case 1:
        numberClass+= "one";
        break;
      case 2:
        numberClass+= "two";
        break;
      case 3:
        numberClass+= "three";
        break;
      case 4:
        numberClass+= "four";
        break;
      case 5:
        numberClass+= "five";
        break;
      case 6:
        numberClass+= "six";
        break;
      default:
        numberClass = "";
        console.log("number has not been supplied");
    }

    return <i className={numberClass}></i>
  }

  render () {
      return (
        <div>
         <div>{this.props.thrower} : {this.props.data} {this.getDiceImage(this.props.data)}</div>
       </div>
      )
    }
}