import React, {useContext} from "react";
import "./style.css";
import DeckContext from "../../utils/DeckContext";

function Deck() {
  const {deck, hand, discard, draw} = useContext(DeckContext);
  return (
    <div>
      Cards Left in Deck: {deck.length}
      <button onClick = {draw} >Draw</button>
    </div>
  );
}



export default Deck;