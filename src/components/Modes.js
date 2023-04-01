import { useContext } from 'react';
import constants from '../constants';
import App from '../contexts/App';

const Options = () => {
  const { toggleSettings, showSettings } = useContext(App);

  return (
    <div id="modes">
      <label>
        <input
          type="radio"
          name={constants.options.name}
          value={constants.options.values.exact}
          defaultChecked
        />
        exact
      </label>
      <label>
        <input
          type="radio"
          name={constants.options.name}
          value={constants.options.values.starts}
        />
        starts
      </label>
      <label>
        <input
          type="radio"
          name={constants.options.name}
          value={constants.options.values.ends}
        />
        ends
      </label>
      <label>
        <input
          type="radio"
          name={constants.options.name}
          value={constants.options.values.contains}
        />
        contains
      </label>
      <label>
        <input
          type="radio"
          name={constants.options.name}
          value={constants.options.values.scramble}
        />
        squamble
      </label>
      <button
        type="button"
        className="justify-right"
        onClick={toggleSettings}
      >
        options [{showSettings ? <>&ndash;</>:<>+</>}]
      </button>
    </div>
  );
}
export default Options;
