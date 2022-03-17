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
        player: 0,
        computer: 0,
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
          player: prevState.player + 1
      }));
    }else if(dice[0] < dice[1]){
      message = MESSAGES.computer;
      this.setState((prevState, props) => ({
          computer: prevState.computer + 1
      }));
    }

    this.setState({ message: message});

  }

  render(){
    return (
      <div>
        <div>
          <Score data={this.state} />
        </div>
        <div className="dice_holder" >
          <Dice thrower="player_1" data={this.state.dice_1} />
          <Dice thrower="computer" data={this.state.dice_2}  />
        </div>
        <button onClick={this.rollDice}>
          Roll
        </button>
        <div  className="message" >
          {this.state.message}
        </div>
      </div>
    );
  }

}

export default App;
