export function validate(request) {
  if (!request.word) return false;
  if (!request.option) return false;
  if (!request.word.match(/^[A-Za-z?]+$/)) return false;
  return true;
}
