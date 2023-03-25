import { hasBlank, asRegex, asScrambleRegex } from './regex'
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
export function scramble() {
  asScrambleRegex();
  return [];
}
