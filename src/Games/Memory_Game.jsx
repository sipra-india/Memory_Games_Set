import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

let score1 = 0;

const MemoryGame = () => {
  const animalImages = [
    "cat",
    "cat",
    "dog",
    "dog",
    "elephant",
    "elephant",
    "lion",
    "lion",
    "giraffe",
    "giraffe",
    "zebra",
    "zebra",
  ];

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [cards, setCards] = useState(shuffleArray(animalImages));
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [cardcount, SetCardcount] = useState([]);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [score, SetScore] = useState(0);
  const [showWords, setShowWords] = useState(true);

  useEffect(() => {
    if (flipped.length === 2) {
      setDisabled(true);

      if (cards[flipped[0]] === cards[flipped[1]]) {
        setSolved([...solved, cards[flipped[0]]]);
        setMatchedPairs(matchedPairs + 1);
      }

      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  }, [flipped]);

  useEffect(() => {
    if (matchedPairs == 6) {
      SetScore(score + 1);
    }
  }, [matchedPairs]);

  useEffect(() => {
    if (showWords) {
      setTimeout(() => {
        setShowWords(false);
      }, 3000); // Adjust the delay as needed (3 seconds in this case).
    }
  }, []);

  const handleCardClick = (index) => {
    if (flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
    console.log("card clicked", index);
  };

  const HandleStart = () => {
    setShowWords(true); // Show words again when restarting the game.
    setSolved([]);
    setFlipped([]);
    setCards(shuffleArray(animalImages));
    setDisabled(false);
    setMatchedPairs(0);
  };

  score1 = score;

  return (
    <div>
      <h1>Card Memory Challenge</h1>
      {showWords && <p>Flipping the cards in 3 seconds</p>}
      <div className="memorygame">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              flipped.includes(index) || solved.includes(card) ? "flipped" : ""
            }`}
            onClick={() =>
              !flipped.includes(index) &&
              !solved.includes(card) &&
              !disabled &&
              handleCardClick(index)
            }
          >
            <div className="front">{showWords ? card : ""}</div>
            <div className="back">{card}</div>
          </div>
        ))}
      </div>

      {matchedPairs == 6 && <p>Congratulation! You Won!!</p>}
      {matchedPairs == 6 && <button onClick={HandleStart}>Restart Game</button>}
      <p>Score: {score}</p>
    </div>
  );
};

export default MemoryGame;
export { score1 };
