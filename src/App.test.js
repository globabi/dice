import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import App from "./App";

const MESSAGES = require('./language/english.json');

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

it("correctly renders default page", () => {

  act(() => {
    render(<App />, container);
    expect(container.textContent).toBe(
      MESSAGES.you +
      MESSAGES.wins +
      " : 0" +
      MESSAGES.computer +
      MESSAGES.wins +
      " : 0" +
      MESSAGES.click_roll +
      MESSAGES.roll
    );
  });

});
