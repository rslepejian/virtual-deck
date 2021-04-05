import React from "react";

const DeckContext = React.createContext({
  deck: [],
  hand: [],
  discard: [],
  draw: () => {}
});

export default DeckContext;