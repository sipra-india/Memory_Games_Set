import React, { useState } from "react";
import WordPuzzleGame from "./Games/Word_Puzzle";
import MemoryGame2 from "./Games/MemoryGame2";
import MemoryGame from "./Games/Memory_Game";
import Score from "./Games/Score";
import { score1 } from "./Games/Memory_Game";
import { score2 } from "./Games/Word_Puzzle";
import { score3 } from "./Games/MemoryGame2";
import "./Games/choice.css";

function Choice() {
  const [choice, SetChoice] = useState("nogame");

  function choiceset(ch) {
    SetChoice(ch);
  }

  return (
    <div id="game">
      <h1 id="title">AgeWell</h1>
      <p id="choice-text">Please choose your desired game: </p>
      <div id="btns">
        <button className="btn" onClick={() => choiceset("cardgame")}>
          Card Memory Challenge
        </button>
        <button className="btn" onClick={() => choiceset("memorygame")}>
          Memory Game
        </button>
        <button className="btn" onClick={() => choiceset("puzzlegame")}>
          Word Puzzle
        </button>
        <button id="close" onClick={() => choiceset("nogame")}>
          X
        </button>
        <hr></hr>
      </div>
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
