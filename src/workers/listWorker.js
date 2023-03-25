import constants from '../constants';

// api
function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}
// queries
function exact(query, table) {
  if (hasBlank(query)) {
    const regex = new RegExp(`^${asRegex(query)}$`)
    return Object.keys(table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  } else {
    if (table[query]) return [query];
  }
  return [];
}
function startsWith(query, table) {
  if (hasBlank(query)) {
    const regex = new RegExp(`^${asRegex(query)}`)
    return Object.keys(table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  }
  return Object.keys(table).reduce((hits, entry) =>
    entry.substring(0, query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
function endsWith(query, table) {
  if (hasBlank(query)) {
    const regex = new RegExp(`${asRegex(query)}$`)
    return Object.keys(table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  }
  return Object.keys(table).reduce((hits, entry) =>
    entry.substring(entry.length - query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
function contains(query, table) {
  if (hasBlank(query)) {
    const regex = new RegExp(asRegex(query))
    return Object.keys(table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  }
  return Object.keys(table).reduce((hits, entry) =>
    entry.includes(query)
      ? [...hits, entry]
      : hits,
    []
  );
}
function scramble() {
  asScrambleRegex();
  return [];
}
// regex
function asScrambleRegex(word, options) {
  return { word, options };
}
function asRegex(word) {
  return word.replaceAll('?', '.');
}
// validator
function hasBlank(word) {
  return !!word.includes('?');
}
function validate(request) {
  if (!request.word) return false;
  if (!request.option) return false;
  if (!request.word.match(/^[A-Za-z?]+$/)) return false;
  return true;
}
// app
const fileText = loadFile('/twl06.txt');
const table = fileText && fileText.length
  ? Object.fromEntries(
    fileText.split('\r\n').map(
      entry => [entry, true]
    )
  ) : {};
onmessage = e => {
  const { option, word } = e.data;
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
  return postMessage({ message, results });
}
