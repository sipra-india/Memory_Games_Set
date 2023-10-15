import React, { useState, useEffect } from "react";
import { wordpuzzlehint, words } from "../data";

function WordPuzzleGame() {
  const [word, setWord] = useState("");
  const [score, SetScore] = useState(0);
  const [shuffledWord, setShuffledWord] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const [hint, setHint] = useState("");

  const hints = wordpuzzlehint;

  const generateWord = () => {
    const randomWord = words[Math.floor(Math.random() * 50)];
    setWord(randomWord);
    setShuffledWord(
      randomWord
        .split("")
        .sort(() => 0.5 - Math.random())
        .join(""),
    );
    setIsCorrect(false);
    setInputValue("");
  };

  useEffect(() => {
    generateWord();
  }, []);

  const checkAnswer = (input) => {
    if (input === word) {
      setIsCorrect(true);
      setInputValue("");
      setHint("");
      SetScore(score + 1);
    }
  };

  const change = (e) => {
    checkAnswer(e.target.value);
    setInputValue(e.target.value);
  };

  return (
    <div>
      <h1>Word Puzzle Game</h1>
      <p>Unscramble the word:</p>
      <p>{shuffledWord}</p>
      <input
        type="text"
        placeholder="Your answer..."
        value={inputValue}
        onChange={change}
      />
      {isCorrect && <p>Correct!</p>}
      {hint && <p>Hint: {hint}</p>}
      <button onClick={generateWord}>Next Word</button>
      <button onClick={() => setHint(hints[word])}>Hint</button>
      <div id="score">Score: {score}</div>
    </div>
  );
}

export default WordPuzzleGame;
