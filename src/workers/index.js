import constants from '../constants';
import { loadFile } from './api';
import { exact, startsWith, endsWith, contains, scramble, sortByLength } from './query';
import { validate } from './validator';
// app
const fileText = loadFile('/twl06.txt');
const table = fileText && fileText.length
  ? Object.fromEntries(
    fileText.split('\r\n').map(
      entry => [entry, true]
    )
  ) : {};
onmessage = e => {
  const { option, word, group } = e.data;
  let message = constants.message.default;
  let results = [];
  if (!validate(e.data)) return postMessage({ message, results });
  switch(option) {
    case constants.options.values.exact:
      results = exact(word, table);
      message = results.length
        ? ''
        : `"${word}" is not playable`;
      break;
    case constants.options.values.starts:
      results = startsWith(word, table);
      message = results.length
        ? ''
        : `no valid words start with "${word}"`;
      break;
    case constants.options.values.ends:
      results = endsWith(word, table);
      message = results.length
        ? ''
        : `no valid words end with "${word}"`;
      break;
    case constants.options.values.contains:
      results = contains(word, table);
      message = results.length
        ? ''
        : `no valid words contain "${word}"`;
      break;
    case constants.options.values.scramble:
      results = scramble(word, table);
      message = results.length
        ? ''
        : `no valid words contain the letters "${word}"`;
      break;
    default:
      message = `error: missing or invalid options`;
      break;
  }
  return postMessage({
    message,
    results: group
      ? sortByLength(results)
      : results
  });
}
