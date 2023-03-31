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
  const permutations = unique(permute(asRegex(word)));
  return `(${permutations.join('|')})`;
}
export function asRegex(word) {
  return word.replaceAll('?', '.');
}
