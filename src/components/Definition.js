import { useContext, useState, useEffect } from 'react';
import { getDefinition } from '../utils/api';
import App from '../contexts/App';

const Definition = () => {
  const { selected } = useContext(App);
  const [definition, setDefinition] = useState(null);
  const [defNum, ] = useState(0);
  useEffect(() => {
    if (!selected) return;
    getDefinition(selected)
      .then(res => setDefinition(res));
  }, [selected]);
  if (!selected || !definition) return null;
  if (definition.title) return (
    <fieldset id="definition">
      <legend>{selected} <small><a target="_blank" href="https://dictionaryapi.dev/" rel="noreferrer">source</a></small></legend>
      <p>No definition found</p>
    </fieldset>
  );
  const {
    word, phonetic, meanings
  } = definition[defNum];
  return (
    <fieldset id="definition">
      <legend>{word}{phonetic && ` (${phonetic})`} <small><a target="_blank" href="https://dictionaryapi.dev/" rel="noreferrer">source</a></small></legend>
      {meanings.map(({ partOfSpeech, definitions }, i) => (
        <p key={i}>
          <strong>{partOfSpeech}</strong>: {definitions[0].definition}<br />
          <i>{definitions[0].example}</i>
        </p>
      ))}
    </fieldset>
  );
}

export default Definition;
