// src/App.js
import React from "react";
import WordPuzzleGame from "./Games/Word_Puzzle";
import MemoryGame2 from "./Games/MemoryGame2";
import MemoryGame from "./Games/Memory_Game";

function App() {
  return (
    <div className="App">
      <WordPuzzleGame />
      <hr></hr>
      <MemoryGame2 />
      <hr></hr>
      <MemoryGame />
    </div>
  );
}

export default App;
