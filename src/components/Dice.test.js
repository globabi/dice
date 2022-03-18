import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Dice from "./Dice";

const MESSAGES = require('../language/english.json');

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("player name is correctly rendered", () => {

  const player = "player 234";
  act(() => {
    render(<Dice thrower={player}  />, container);
    expect(container.textContent).toBe(player + MESSAGES.wins + " : ");
  });

});

it("wins is correctly rendered", () => {

  const wins = 100;
  act(() => {
    render(<Dice wins={wins}  />, container);
    expect(container.textContent).toBe(MESSAGES.wins + " : " + wins);
  });

});

it("dice rolls over six are rendered as numeric values", () => {

  const dice_roll = 100;
  act(() => {
    render(<Dice dice_roll={dice_roll}  />, container);
    expect(container.textContent).toBe(dice_roll + MESSAGES.wins + " : ");
  });

});

it("dice rolls under six are not rendered as numeric values", () => {

  const dice_roll = 5;
  act(() => {
    render(<Dice dice_roll={dice_roll}  />, container);
    expect(container.textContent).toBe(MESSAGES.wins + " : ");
  });

});

it("all params are correctly rendered together", () => {

  const player = "a player";
  const wins = 88
  const dice_roll = 77;

  act(() => {
    render(<Dice dice_roll={dice_roll} wins={wins} thrower={player}  />, container);
    expect(container.textContent).toBe(
      player + dice_roll +  MESSAGES.wins + " : " + wins
    );
  });

});