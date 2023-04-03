import { useContext } from 'react';
import constants from 'constants';
import App from 'contexts/App';

const Modes = () => {
  const { toggleSettings, showSettings } = useContext(App);

  return (
    <div id="modes">
      <label>
        <input
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.exact}
          defaultChecked
        />
        exact
      </label>
      <label>
        <input
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.starts}
        />
        starts
      </label>
      <label>
        <input
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.ends}
        />
        ends
      </label>
      <label>
        <input
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.contains}
        />
        contains
      </label>
      <label>
        <input
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.scramble}
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
};
export default Modes;
