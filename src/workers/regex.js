export function hasBlank(word) {
  return !!word.includes('?');
}
export function asScrambleRegex(word, options) {
  return { word, options };
}
export function asRegex(word) {
  return word.replaceAll('?', '.');
}
