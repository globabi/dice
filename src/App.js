import React, { Component } from 'react';
import {getDiceRollResult} from './components/GetDiceRoleResult';

import {
  Dice,
  Score
} from "./components";

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
        dice_1 : 1,
        dice_2 : 1,
        message : "Click roll to begin"
    }
  }

  playAGame = () => {

    const diceSides = 6;
    const dice = [];

    dice[0] = getDiceRollResult(diceSides);
    this.setState({ dice_1: dice[0]});

    dice[1] = getDiceRollResult(diceSides);
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
        <div className="dice_holder" >
          <Dice thrower="You" data={this.state.dice_1} />
          <Dice thrower="Computer" data={this.state.dice_2}  />
        </div>
        <div>
          <Score data={this.state} />
        </div>
        <button onClick={this.playAGame}>
          Roll
        </button>
        <div className="message" >
          {this.state.message}
        </div>
      </div>
    );
  }

}

export default App;
