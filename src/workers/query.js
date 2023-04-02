import { hasBlank, asRegex, asScrambleRegex } from 'workers/regex'
export function sortByLength(list) {
  const groups = groupByLength(list);
  console.log(groups);
  return Object.keys(groups).reduce((sortedList, length) => [
    ...sortedList,
    ...groups[length]
  ], []);
}
export function groupByLength(list) {
  if (!list) return {};
  return list.reduce((groups, entry) => {
    const newList = [
      ...(groups[entry.length] ? groups[entry.length] : []),
      entry,
    ];
    if (!groups[entry.length]) groups[entry.length] = [entry];
    else groups[entry.length].push(entry);
    return {
      ...groups,
      [entry.length]: newList
    }
  }, {})
}
export function exact(query, table) {
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
export function startsWith(query, table) {
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
export function endsWith(query, table) {
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
export function contains(query, table) {
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
export function scramble(query, table) {
  const regex = new RegExp(`^${asScrambleRegex(query)}$`);
  return Object.keys(table).reduce((hits, entry) =>
    entry.match(regex)
      ? [...hits, entry]
      : hits,
    []
  );
}
