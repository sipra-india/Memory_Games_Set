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
    "zebra"
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

  useEffect(() => {
    if (flipped.length === 2) {
      setDisabled(true);

      if (cards[flipped[0]] === cards[flipped[1]]) {
        setSolved([...solved, cards[flipped[0]]]);
      }

      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  }, [flipped, cards, solved]);

  const handleCardClick = (index) => {
    if (flipped.length < 2) {
      setFlipped([...flipped, index]);
    }
  };

  return (
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
          <div className="front">Front</div>
          <div className="back">{card}</div>
        </div>
      ))}
    </div>
  );
};

export default MemoryGame;
