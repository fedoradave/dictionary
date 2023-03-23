export function exact(query, table) {
  if (!query.length) return [];
  if (table[query]) return [query];
  return [];
}
export function startsWith(query, table) {
  if (!query.length) return [];
  return Object.keys(table).reduce((hits, entry) =>
    entry.substring(0, query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
export function endsWith(query, table) {
  if (!query.length) return [];
  return Object.keys(table).reduce((hits, entry) =>
    entry.substring(entry.length - query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
export function contains(query, table) {
  if (!query.length) return [];
  return Object.keys(table).reduce((hits, entry) =>
    entry.includes(query)
      ? [...hits, entry]
      : hits,
    []
  );
}
