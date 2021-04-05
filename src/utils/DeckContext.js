import React from "react";
import Deck from "../components/deck";

const DeckContext = React.createContext({
  deck: [],
  hand: [],
  discard: []
});

export default DeckContext;