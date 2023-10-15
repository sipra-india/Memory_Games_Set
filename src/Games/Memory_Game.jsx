import React, { useState, useEffect } from "react";
import "./MemoryGame.css";

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

  useEffect(() => {
    if (flipped.length === 2) {
      setDisabled(true);

      if (cards[flipped[0]] === cards[flipped[1]]) {
        setSolved([...solved, cards[flipped[0]]]);
        if (matchedPairs + 1 > matchedPairs) {
          setMatchedPairs(matchedPairs + 1);
        }
      }

      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  }, [flipped, cards, solved, matchedPairs]);

  const handleCardClick = (index) => {
    if (flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
    console.log("card clicked", index);
  };

  const HandleStart = () => {
    setSolved([]);
    setFlipped([]);
    setCards(shuffleArray(animalImages));
    setDisabled(false);
    setMatchedPairs(0);
  };

  return (
    <div>
      <h1>Card Memory Challenge</h1>
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
            <div className="front"></div>
            <div className="back">{card}</div>
          </div>
        ))}
      </div>

      {matchedPairs > 6 && <p>Game WOn!</p>}
      {matchedPairs > 6 && <button onClick={HandleStart}>Restart Game</button>}
      <p>{matchedPairs}</p>
    </div>
  );
};

export default MemoryGame;
