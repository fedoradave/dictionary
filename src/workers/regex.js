export function normalize(word = '') {
  return word.toLowerCase().split('').sort().join('');
}
export function combinations(word, combo = "", combos = {}) {
  if (!word && !combo) return;
  if (!word) {
    combos[normalize(combo)] = true;
  }
  else {
    combinations(word.slice(1), combo + word[0], combos);
    combinations(word.slice(1), combo, combos);
  }
  return combos;
}
export function permute(word, prefix = '') {
  if (word.length < 2) return [prefix + word];
  const results = [];
  for (let i = 0; i < word.length; i++) {
    results.push(...permute(
      word.substring(0, i) + word.substring(i+1),
      prefix + word[i]
    ));
  }
  return results;
}
export function unique(list) {
  const map = {};
  list.forEach(item => map[item] = true);
  return Object.keys(map);
}
export function hasBlank(word) {
  return !!word.includes('?');
}
export function asScrambleRegex(word) {
  return word.includes('.')
    ? `.*${word.replace(/\./g, '').split('').join('.*')}.*`
    : word;
}
export function asRegex(word) {
  return word.replaceAll('?', '.');
}
