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
        <label>
          <input
            type="radio"
            name={constants.lists.name}
            value={constants.lists.values.twl06}
            onChange={handleSetWordList}
            checked={wordList === constants.lists.values.twl06}
          />
          twl06
        </label>
        <label>
          <input
            type="radio"
            name={constants.lists.name}
            value={constants.lists.values.sowpods}
            onChange={handleSetWordList}
            checked={wordList === constants.lists.values.sowpods}
          />
          sowpods
        </label>
        <label>
          <input
            type="radio"
            name={constants.lists.name}
            value={constants.lists.values.enable}
            onChange={handleSetWordList}
            checked={wordList === constants.lists.values.enable}
          />
          enable
        </label>
      </div>
    </fieldset>
  );
};
export default WordList;
