function Score({ score1, score2, score3 }) {
  return (
    <div>
      <h2>Your Latest Scores:- </h2>
      <p>Card Memory Challenge: {score1}</p>
      <p>Memory Game: {score2}</p>
      <p>Word Puzzle: {score3}</p>
    </div>
  );
}

export default Score;
