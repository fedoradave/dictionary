import constants from '../constants';
const WordList = () => (
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
          defaultChecked
        />
        twl06
      </label>
      <label>
        <input
          type="radio"
          name={constants.lists.name}
          value={constants.lists.values.sowpods}
        />
        sowpods
      </label>
      <label>
        <input
          type="radio"
          name={constants.lists.name}
          value={constants.lists.values.enable}
        />
        enable
      </label>
      <label>
        <input
          type="radio"
          name={constants.lists.name}
          value={constants.lists.values.all}
        />
        all
      </label>
    </div>
  </fieldset>
);

export default WordList;
