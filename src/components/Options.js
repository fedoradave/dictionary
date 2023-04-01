import { useContext } from 'react';
import constants from '../constants';
import App from '../contexts/App';

const Options = () => {
  const { showSettings } = useContext(App);
  return (
    <fieldset
      id="options"
      className={showSettings ? null : 'hidden'}
    >
      <legend>options</legend>
      <label>
        <input
          type="checkbox"
          name={constants.group.name}
          defaultChecked={constants.group.default}
        />
          sort by length
      </label>
    </fieldset>
  );
}

export default Options;
