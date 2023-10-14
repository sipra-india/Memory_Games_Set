import React, { useState, useEffect } from "react";
import "./MemoryGame2.css";
import { wordLists } from "../data";

const MemoryGame2 = () => {
  const listnum = Math.floor(Math.random() * 15);
  const initialWords = wordLists[listnum];
  const [words, setWords] = useState(initialWords);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [timer, setTimer] = useState(20);
  const [completed, setCompleted] = useState(false);
  const [incompleted, setinCompleted] = useState(false);

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
    setWords(initialWords);
    setShuffledWords([]);
  };

  const handleCheckOrder = () => {
    if (words.join("") === initialWords.join("")) {
      setCompleted(true);
      setinCompleted(false);
    } else {
      setinCompleted(true);
      setCompleted(false);
    }
  };

  useEffect(() => {
    if (timer === 0) {
      setWords(shuffleArray(initialWords));
    }
  }, [timer]);

  function generateList() {
    return words.map((word, index) => (
      <li key={index}>
        <input
          type="text"
          value={words[index]}
          onChange={(e) => {
            const updatedWords = [...words];
            updatedWords[index] = e.target.value;
            setWords(updatedWords);
          }}
        />
      </li>
    ));
  }

  return (
    <div className="memory-game">
      <div id="name">
        <h1>Memory Word Game</h1>
      </div>
      <div id="game">
        {timer > 0 ? (
          <div>
            <p>Memorize the words for {timer} seconds:</p>
            <ul>
              {words.map((word, index) => (
                <li key={index}>{word}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div>
            <p>Arrange the words in the correct order:</p>
            <ul>{generateList()}</ul>
            <button onClick={handleCheckOrder}>Check Order</button>
            {completed && (
              <p>Congratulations! You arranged the words correctly.</p>
            )}
            {incompleted && (
              <p>Uh Oh! The words aren't arranged correctly, Try Some More</p>
            )}
          </div>
        )}
      </div>
      <div id="next">
        <button onClick={handleStartGame}>Restart Game</button>
      </div>
    </div>
  );
};

export default MemoryGame2;
