const InputList = ({ words, setWords }) => {
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
};

export default InputList;
