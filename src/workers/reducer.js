import { exact, startsWith, endsWith, contains, scramble, groupByLength } from 'workers/query';
import { normalize } from 'workers/regex';
import { validate } from 'workers/validator';
import { loadFile } from 'workers/api';
import actions from 'workers/actions';
import constants from 'constants';
const reducer = {
  [constants.actions.query]: (state, { payload }) => {
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
        results = exact(payload.word, state);
        message = results.length
          ? ''
          : `"${payload.word}" is not a playable word.`;
        break;
      case constants.modes.values.starts:
        results = startsWith(payload.word, state);
        message = results.length
          ? ''
          : `No valid words start with "${payload.word}."`;
        break;
      case constants.modes.values.ends:
        results = endsWith(payload.word, state);
        message = results.length
          ? ''
          : `No valid words end with "${payload.word}."`;
        break;
      case constants.modes.values.contains:
        results = contains(payload.word, state);
        message = results.length
          ? ''
          : `No valid words contain "${payload.word}."`;
        break;
      case constants.modes.values.scramble:
        results = scramble(payload.word, state);
        message = results.length
          ? ''
          : `No valid words contain the letters "${payload.word}."`;
        break;
      default:
        message = `Error: missing or invalid options`;
        break;
    }
    if (results.length) results = results.sort();
    if (
      results.length
      && payload.group
      && payload.mode !== constants.modes.values.exact
    ) {
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
    const list = fileText && fileText.length
      ? fileText.trim().split(/\s+/)
      : [];
    const table = Object.fromEntries(
      list.map(entry => [entry, normalize(entry)])
    );
    const normalized = Object.entries(table).reduce(
      (groups, [entry, group]) => {
        if (groups[group]) groups[group].push(entry);
        else groups[group] = [entry];
        return groups;
      }, {}
    );
    const groups = list.reduce(
      (groups, entry) => {
        if (groups[entry.length]) groups[entry.length].push(entry);
        else groups[entry.length] = [entry];
        return groups;
      }, {}
    );
    const normalGroups = Object.entries(normalized).reduce(
      (groups, [group, list]) => {
        if  (groups[group.length]) groups[group.length][group] = list;
        else groups[group.length] = { [group]: list };
        return groups;
      }, {}
    );
    const totals = {
      groups: Object.entries(groups).reduce(
        (groups, [group, list]) => {
          groups[group] = Object.values(list).length;
          return groups;
        }, {}
      ),
      normalGroups: Object.entries(normalGroups).reduce(
        (groups, [length, group]) => {
          groups[length] = Object.values(group).length;
          return groups;
        }, {}
      )
    };
    const delta = Object.entries(totals.groups).reduce(
      (groups, [group, total]) => {
        groups[group] = `${Number.parseFloat(
          (totals.normalGroups[group] / total) * 100
        ).toFixed(2)}%`;
        return groups;
      }, {}
    );
    return {
      ...state,
      list,
      table,
      normalized,
      normalGroups,
      groups,
      totals,
      delta,
      response: actions.worker.setWordListSuccess(),
    };
  },
};
export default reducer;
