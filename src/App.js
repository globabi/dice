import React, { Component } from 'react';

import {
  Dice,
  Score,
  Roll,
  Message
} from "./components";

 // needs test
const getRandomDiceRollResult = (diceSides) => {
  return Math.floor(Math.random() * diceSides) + 1;
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        player: [0, 0],
        dice_1 : 0,
        dice_2 : 0,
        message : "Click roll to begin"
    }
  }

  rollDice = () => {

    /*
    const diceSides = 6;
    const dice = [];

    dice[0] = getRandomDiceRollResult(diceSides);
    this.setState({ dice_1: 1});

    dice[1] = getRandomDiceRollResult(diceSides);
    this.setState({ dice_2: dice[1]});
    */

    // update the state

    // get the score results

    // show the message

    this.setState({ message: "Dice has been rolled"});

  }

  render(){
    return (s
      <div>
        <div>
          <div>Player : {this.state.player[0]}</div>
          <div>Computer : {this.state.player[1]}</div>
        </div>
        <div className="dice_holder" >
          <div>Player Dice : {this.state.dice_1}</div>
          <div>Computer Dice : {this.state.dice_2}</div>
        </div>
        <button onClick={this.rollDice}>
          Roll
        </button>
        <div>
          {this.state.message}
        </div>
      </div>
    );
  }

}

export default App;
