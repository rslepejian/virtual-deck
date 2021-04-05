import React, {useContext} from "react";
import "./style.css";
import DeckContext from "../../utils/DeckContext";

function Deck() {
  const {deck, hand, discard} = useContext(DeckContext);
  return (
    <div>
      Cards Left in Deck: {deck.length}
    </div>
  );
}
Deck.contextType = DeckContext;


export default Deck;