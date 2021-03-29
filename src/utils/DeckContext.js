import React from "react";

const DeckContext = React.createContext({
  deck: [],
  hand: [],
  discard: []
});

export default DeckContext;
