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

const MESSAGES = {
  draw : "Its a draw",
  player : "Player wins",
  computer : "Computer Wins"
}

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        counter : 0,
        player_1: 0,
        player_2: 0,
        dice_1 : 0,
        dice_2 : 0,
        message : "Click roll to begin"
    }
  }

  rollDice = () => {

    const diceSides = 6;
    const dice = [];

    dice[0] = getRandomDiceRollResult(diceSides);
    this.setState({ dice_1: dice[0]});

    dice[1] = getRandomDiceRollResult(diceSides);
    this.setState({ dice_2: dice[1]});

    let message = MESSAGES.draw;

    if(dice[0] > dice[1]){
      message = MESSAGES.player;
      this.setState((prevState, props) => ({
          player_1: prevState.player_1 + 1
      }));

    }else if(dice[0] < dice[1]){
      message = MESSAGES.computer;
      this.setState((prevState, props) => ({
          player_2: prevState.player_2 + 1
      }));
    }

    this.setState({ message: message});

  }

  render(){
    return (
      <div>
        <div>
          <div>Player : {this.state.player_1}</div>
          <div>Computer : {this.state.player_2}</div>
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
