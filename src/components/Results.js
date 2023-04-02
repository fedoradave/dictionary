import { useContext } from 'react';
import App from 'contexts/App';
import Loader from 'components/Loader'

const Legend = () => {
  const { results, loading } = useContext(App);
  const title = `${results.length}  word${results.length === 1 ? '': 's'}`
  return (
    <legend>results <small>{!loading && `(${title})`}</small></legend>
  );
}

const Results = () => {
  const { results, message, loading, setSelected, selected } = useContext(App);
  return (
    <fieldset id="result">
      <Legend />
      <ul>
        {loading && <Loader />}
        {!loading && !!results.length && results.map(result => (
            <li
              className={result === selected ? 'selected' : undefined}
              onClick={() => setSelected(result)}key={result}>
              {result}
            </li>
        ))}
        {!loading && !results.length && (
          <p>{message}</p>
        )}
      </ul>
    </fieldset>
  );
}

export default Results;
