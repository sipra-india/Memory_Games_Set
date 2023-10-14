import React, { useState } from "react";
import WordPuzzleGame from "./Games/Word_Puzzle";
import MemoryGame2 from "./Games/MemoryGame2";
import MemoryGame from "./Games/Memory_Game";

function Choice() {
  const [choice, SetChoice] = useState("");

  function choiceset(ch) {
    SetChoice(ch);
  }

  return (
    <div id="game">
      <h1 id="title">AgeWell</h1>
      <p>Please choose your desired game</p>
      <button onClick={() => choiceset("cardgame")}>
        Card Memory Challenge
      </button>
      <button onClick={() => choiceset("memorygame")}>Memory Game</button>
      <button className="" onClick={() => choiceset("puzzlegame")}>Word Puzzle</button>
      <button id="close" onClick={() => choiceset("nogame")}>X</button>
      {choice == "puzzlegame" && <WordPuzzleGame />}
      {choice == "cardgame" && <MemoryGame />}
      {choice == "memorygame" && <MemoryGame2 />}
    </div>
  );
}

export default Choice;
