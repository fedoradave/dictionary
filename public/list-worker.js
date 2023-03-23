// constants
const constants = {
  dictionary: '/twl06.txt',
  message: {
    default: 'you\'re very pretty'
  },
  query: {
    name: 'query',
  },
  options: {
    name: 'options',
    values: {
      exact: 'exact',
      starts: 'starts',
      ends: 'ends',
      contains: 'contains',
    }
  }
};
// api call
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
  if (!query.length) return [];
  if (table[query]) return [query];
  return [];
}
function startsWith(query, table) {
  if (!query.length) return [];
  return Object.keys(table).reduce((hits, entry) =>
    entry.substring(0, query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
function endsWith(query, table) {
  if (!query.length) return [];
  return Object.keys(table).reduce((hits, entry) =>
    entry.substring(entry.length - query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
function contains(query, table) {
  if (!query.length) return [];
  return Object.keys(table).reduce((hits, entry) =>
    entry.includes(query)
      ? [...hits, entry]
      : hits,
    []
  );
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
  if (!word.length) return postMessage({ message, results });
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
    default:
      message = `error: missing or invalid options`;
      break;
  }
  return postMessage({ message, results });
}
