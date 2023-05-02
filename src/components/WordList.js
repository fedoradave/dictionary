import { useContext, useCallback } from 'react';
import constants from 'constants';
import App from 'contexts/App';
const WordList = () => {
  const { wordList, setWordList } = useContext(App);
  const handleSetWordList = useCallback(e => setWordList(e.target.value), [setWordList]);
  return (
    <fieldset id="word-list">
      <legend>
        word list
      </legend>
      <div id="list-options">
        {Object.entries(constants.lists.values).map(([key, value]) => (
          <label key={key}>
            <input
              type="radio"
              name={constants.lists.name}
              value={value}
              onChange={handleSetWordList}
              checked={wordList === value}
            />
            {key}
          </label>
        ))}
      </div>
      <p>
        {constants.lists.descriptions[wordList]}
      </p>
    </fieldset>
  );
};
export default WordList;
