import React, { Component } from 'react';
import {getDiceRollResult} from './components/GetDiceRoleResult';
import {Dice} from "./components";

const MESSAGES = require('./language/english.json');

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
        player_wins: 0,
        computer_wins: 0,
        dice_1 : 1,
        dice_2 : 1,
        message : MESSAGES.click_roll
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
      message = MESSAGES.player_wins;
      this.setState((prevState, props) => ({
          player_wins: prevState.player_wins + 1
      }));
    }else if(dice[0] < dice[1]){
      message = MESSAGES.computer_wins;
      this.setState((prevState, props) => ({
          computer_wins: prevState.computer_wins + 1
      }));
    }

    this.setState({ message: message});

  }

  render(){
    return (
      <div>

        <div className="dice_holder" >
          <Dice thrower={MESSAGES.you}
            dice_roll={this.state.dice_1}
            wins={this.state.player_wins} />
          <Dice thrower={MESSAGES.computer}
            dice_roll={this.state.dice_2}
            wins={this.state.computer_wins}  />
        </div>
        <div className="message" >
          {this.state.message}
        </div>
        <div className="roll_holder"  >
          <button title={MESSAGES.click_to_roll_dice} onClick={this.playAGame}>
            {MESSAGES.roll}
          </button>
        </div>
      </div>
    );
  }

}


