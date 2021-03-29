import React from "react";
import "./style.css";
import {DeckContext} from "./utils/DeckContext";

function deck() {
  return (
    <div />
  );
}
deck.contextType = DeckContext;


export default deck;