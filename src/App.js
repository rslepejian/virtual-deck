import { useState } from "react";
import './App.css';
import DeckContext from "./utils/DeckContext";
import Deck from "./components/deck";
import Hand from "./components/hand";

function App() {
  const [DeckState, setDeck] = useState({
    deck: [
      "h1", "h2", "h3", "h4", "h5", "h6", "h7", "h8", "h9", "h10", "h11", "h12", "h13",
      "s1", "s2", "s3", "s4", "s5", "s6", "s7", "s8", "s9", "s10", "s11", "s12", "s13",
      "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13",
      "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "c10", "c11", "c12", "c13"
    ],
    hand: [],
    discard: [],
    draw: () => {
      //pick a random card from the deck array
      //remove it from deck
      //add it to hand

      //pick a random number between 0 and deck.length
      var randNum = Math.floor(Math.random() * DeckState.deck.length);
      var tempDeck = [...DeckState.deck];
      tempDeck.splice(randNum, 1);
      setDeck({deck: [...tempDeck],hand: [...DeckState.hand, DeckState.deck[randNum]], discard: DeckState.discard});
    }
  });

  return (
    <DeckContext.Provider value={DeckState}>
      <Deck />
      <Hand />
    </DeckContext.Provider>
  );
}

export default App;
