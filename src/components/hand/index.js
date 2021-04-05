import React, { useContext } from "react";
import "./style.css";
import DeckContext from "../../utils/DeckContext";

function Hand() {

    const { deck, hand, discard, draw } = useContext(DeckContext);

    return (
        <div>
            Cards in hand: {hand}
        </div>
    );
}

export default Hand;