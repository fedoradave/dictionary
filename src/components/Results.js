import { useContext, useState } from 'react';
import App from 'contexts/App';
import Loader from 'components/Loader';

const Legend = () => {
  const { resultsLength, loading } = useContext(App);
  const title = `${resultsLength}  word${resultsLength === 1 ? '': 's'}`;
  return (
    <legend>results <small>{!loading && `(${title})`}</small></legend>
  );
};

const GroupHeader = ({ group, expanded, setExpanded}) => {
  const { results } = useContext(App);
  return (
    <li className="group-header" onClick={() => setExpanded(!expanded)}>
      {group} letter words ({results[group].length}) [{expanded ? <>&ndash;</> : <>+</>}]
    </li>
  );
};

const Result = ({ children }) => {
  const { selected, setSelected } = useContext(App);
  return (
    <li
      className={children === selected ? 'selected' : undefined}
      onClick={() => children === selected
        ? setSelected(null)
        : setSelected(children)
      }
    >
      {children}
    </li>
  );
};

const GroupedResults = ({ group }) => {
  const { results } = useContext(App);
  const [expanded, setExpanded] = useState(true);
  return (
    <>
      {group && (
        <GroupHeader
          expanded={expanded}
          setExpanded={setExpanded}
          group={group}
        />
      )}
      {group ? (
        expanded
          ? results[group].map(result => <Result key={result}>{result}</Result>)
          : null
      ) : (
        results.map(result => <Result key={result}>{result}</Result>)
      )}
    </>
  );
};

const Results = () => {
  const {
    isGrouped, results, resultsLength, message, loading,
  } = useContext(App);
  return (
    <fieldset id="result">
      <Legend />
      {loading && <Loader />}
      <ul>
        {!loading && (isGrouped
          ? Object.keys(results).map(group =>
            <GroupedResults key={group} group={group} />
          ) : (
            <GroupedResults />
          )
        )}
        {!loading && !resultsLength && (
          <p>{message}</p>
        )}
      </ul>
    </fieldset>
  );
};

export default Results;
