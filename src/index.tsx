import blessed from "blessed";
import * as dotenv from "dotenv";
import React from "react";
import { render } from "react-blessed";
import { MemoryRouter } from "react-router";
import { App } from "./App";

global.console = require("inspector").console;

dotenv.config();

const screen = blessed.screen({
  autoPadding: true,
  smartCSR: true,
  sendFocus: true,
  title: "Github Manager",
  cursor: {
    color: "black",
    shape: "underline",
    artificial: true,
    blink: true,
  },
});

//  Exit application with "q" press or "ctrl + c"
screen.key(["q", "C-c"], () => process.exit(0));

render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  screen
);
