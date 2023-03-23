import { useContext } from 'react';
import App from '../contexts/App';
import Loader from './Loader'

const Results = () => {
  const { results, message, loading, setSelected } = useContext(App);
  const title = `${results.length}  word${results.length === 1 ? '': 's'}`
  return (
    <fieldset id="result">
      <legend>results: {loading ? <Loader /> : title}</legend>
      <ul>
        {results.length
          ? results.map(result => <li onClick={() => setSelected(result)}key={result}>{result}</li>)
          : <li>{message}</li>
        }
      </ul>
    </fieldset>
  );
}

export default Results;
