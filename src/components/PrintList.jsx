const PrintList = ({ words }) => {
  return (
    <ul>
      {words.map((word, index) => (
        <li key={index}>{word}</li>
      ))}
    </ul>
  );
};

export default PrintList;
