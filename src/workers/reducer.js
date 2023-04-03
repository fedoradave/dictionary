import { exact, startsWith, endsWith, contains, scramble, groupByLength } from 'workers/query';
import { validate } from 'workers/validator';
import { loadFile } from 'workers/api';
import actions from 'workers/actions';
import constants from 'constants';
const reducer = {
  [constants.actions.query]: (state, { payload }) => {
    console.log(payload);
    let message = constants.message.default;
    let results = [];
    if (!validate(payload)) return {
      ...state,
      response: actions.worker.resultFail({
        isGrouped: payload.group,
        message,
        results
      })
    };
    switch(payload.mode) {
      case constants.modes.values.exact:
        results = exact(payload.word, state.table);
        message = results.length
          ? ''
          : `"${payload.word}" is not a playable word.`;
        break;
      case constants.modes.values.starts:
        results = startsWith(payload.word, state.table);
        message = results.length
          ? ''
          : `No valid words start with "${payload.word}."`;
        break;
      case constants.modes.values.ends:
        results = endsWith(payload.word, state.table);
        message = results.length
          ? ''
          : `No valid words end with "${payload.word}."`;
        break;
      case constants.modes.values.contains:
        results = contains(payload.word, state.table);
        message = results.length
          ? ''
          : `No valid words contain "${payload.word}."`;
        break;
      case constants.modes.values.scramble:
        results = scramble(payload.word, state.table);
        message = results.length
          ? ''
          : `No valid words contain the letters "${payload.word}."`;
        break;
      default:
        message = `Error: missing or invalid options`;
        break;
    }
    if (results.length && payload.group) {
      results = groupByLength(results);
    }
    return {
      ...state,
      response: actions.worker.result({
        isGrouped: payload.group,
        message,
        results
      }),
    };
  },
  [constants.actions.setWordList]: (state, { payload }) => {
    if (!payload || !payload.wordList) return {
      ...state,
      response: actions.worker.setWordListFail(),
    };
    const fileText = loadFile(`/${payload.wordList}`);
    const table = fileText && fileText.length
      ? Object.fromEntries(
        fileText.split(/\s+/).map(
          entry => [entry, true]
        )
      ) : {};
    return {
      ...state,
      table,
      response: actions.worker.setWordListSuccess(),
    };
  },
};
export default reducer;
