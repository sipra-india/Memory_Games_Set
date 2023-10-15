import React, { useState, useEffect } from "react";
import "./MemoryGame2.css";
import { wordLists } from "../data";
import InputList from "../components/InputList";
import PrintList from "../components/PrintList";

const MemoryGame2 = () => {
  const listnum = Math.floor(Math.random() * 15);
  const initialWords = wordLists[listnum];
  const [words, setWords] = useState([...initialWords]);
  const [suffleWords, setSuffleWords] = useState([]);
  const [count, Setcount] = useState(0);
  const [timer, setTimer] = useState(20);
  const [completed, setCompleted] = useState(false);
  const [completionMsg, setCompletionMsg] = useState("");
  const [newGame, setNewGame] = useState(true);

  useEffect(() => {
    if (timer > 0 && !completed) {
      const interval = setInterval(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer, completed]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleStartGame = () => {
    setTimer(20);
    setCompleted(false);
    setCompletionMsg("");
    setWords(initialWords);
    setNewGame(true);
  };

  const handleCheckOrder = () => {
    if (words.join("") === suffleWords.join("")) {
      setCompleted(true);
      setCompletionMsg("Congratulations! You arranged the words correctly.");
      Setcount(count + 1);
    } else {
      setCompletionMsg(
        "Uh Oh! The words aren't arranged correctly, Try Some More",
      );
    }
    setNewGame(false);
  };

  useEffect(() => {
    if (timer === 0) {
      setSuffleWords(shuffleArray(words));
    }
  }, [timer]);

  return (
    <div className="memory-game">
      <div id="name">
        <h1>Memory Word Game</h1>
      </div>
      <div id="game">
        {timer > 0 ? (
          <div>
            <p>Memorize the words for {timer} seconds:</p>
            <PrintList words={words} />
          </div>
        ) : (
          <div>
            <p>Arrange the words in the correct order:</p>
            <ul>
              <InputList words={suffleWords} setWords={setSuffleWords} />
            </ul>
            {newGame && <button onClick={handleCheckOrder}>Check Order</button>}
            <p>{completionMsg}</p>
          </div>
        )}
      </div>
      <div id="next">
        {!newGame && <button onClick={handleStartGame}>Restart Game</button>}
      </div>
      {!newGame && <div id="score">Score: {count}</div>}
    </div>
  );
};

export default MemoryGame2;
