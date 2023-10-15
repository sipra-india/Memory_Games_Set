import React, { useState } from "react";
import WordPuzzleGame from "./Games/Word_Puzzle";
import MemoryGame2 from "./Games/MemoryGame2";
import MemoryGame from "./Games/Memory_Game";
import Score from "./Games/Score";
import { score1 } from "./Games/Memory_Game";
import { score2 } from "./Games/Word_Puzzle";
import { score3 } from "./Games/MemoryGame2";

function Choice() {
  const [choice, SetChoice] = useState("nogame");

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
      <button className="" onClick={() => choiceset("puzzlegame")}>
        Word Puzzle
      </button>
      <button id="close" onClick={() => choiceset("nogame")}>
        X
      </button>
      {choice == "puzzlegame" && <WordPuzzleGame />}
      {choice == "cardgame" && <MemoryGame />}
      {choice == "nogame" && (
        <Score score1={score1} score2={score3} score3={score2} />
      )}
      {choice == "memorygame" && <MemoryGame2 />}
    </div>
  );
}

export default Choice;
