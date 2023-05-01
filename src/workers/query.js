import { combinations, hasBlank, asRegex, asScrambleRegex } from 'workers/regex';

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
    };
  }, {});
}
export function exact(query, state) {
  if (hasBlank(query)) {
    const regex = new RegExp(`^${asRegex(query)}$`);
    return Object.keys(state.table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  } else {
    if (state.table[query]) return [query];
  }
  return [];
}
export function startsWith(query, state) {
  if (hasBlank(query)) {
    const regex = new RegExp(`^${asRegex(query)}`);
    return Object.keys(state.table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  }
  return Object.keys(state.table).reduce((hits, entry) =>
    entry.substring(0, query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
export function endsWith(query, state) {
  if (hasBlank(query)) {
    const regex = new RegExp(`${asRegex(query)}$`);
    return Object.keys(state.table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  }
  return Object.keys(state.table).reduce((hits, entry) =>
    entry.substring(entry.length - query.length) === query
      ? [...hits, entry]
      : hits,
    []
  );
}
export function contains(query, state) {
  if (hasBlank(query)) {
    const regex = new RegExp(asRegex(query));
    return Object.keys(state.table).reduce((hits, entry) =>
      entry.match(regex)
        ? [...hits, entry]
        : hits,
      []
    );
  }
  return Object.keys(state.table).reduce((hits, entry) =>
    entry.includes(query)
      ? [...hits, entry]
      : hits,
    []
  );
}
export function scramble(query, state) {
  const combos = combinations(asRegex(query));
  const comboMap = Object.keys(combos).reduce(
    (map, combo) => {
      if (!combo.includes('.')) map[combo] = state.normalized[combo];
      else {
        Object.keys(state.normalGroups[combo.length] || []).forEach((group) => {
          if (group.match(`^${asScrambleRegex(combo)}$`)) {
            map[group] = state.normalized[group];
          }
        }, {});
      }
      return map;
    }, {}
  );
  return Object.values(comboMap).reduce(
    (results, comboGroup) => {
      if (comboGroup) results.push(...comboGroup);
      return results;
    }, []
  );
}
