export const getDefinition = word => fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  .then(response => response.json())
  .catch(data => console.error(data));
