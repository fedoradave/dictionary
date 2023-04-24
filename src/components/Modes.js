import { useContext } from 'react';
import constants from 'constants';
import App from 'contexts/App';

const Modes = () => {
  const { toggleSettings, showSettings, params, pathname } = useContext(App);

  return (
    <div id="modes">
      <label>
        <input
          key={pathname}
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.exact}
          defaultChecked={
            params.mode === constants.modes.values.exact || !params.mode
          }
        />
        exact
      </label>
      <label>
        <input
          key={pathname}
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.starts}
          defaultChecked={params.mode === constants.modes.values.starts}
        />
        starts
      </label>
      <label>
        <input
          key={pathname}
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.ends}
          defaultChecked={params.mode === constants.modes.values.ends}
        />
        ends
      </label>
      <label>
        <input
          key={pathname}
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.contains}
          defaultChecked={params.mode === constants.modes.values.contains}
        />
        contains
      </label>
      <label>
        <input
          key={pathname}
          type="radio"
          name={constants.modes.name}
          value={constants.modes.values.scramble}
          defaultChecked={params.mode === constants.modes.values.scramble}
        />
        squamble
      </label>
      <button
        type="button"
        className="justify-right"
        onClick={toggleSettings}
      >
        [{showSettings ? <>&ndash;</>:<>+</>}]
      </button>
    </div>
  );
};
export default Modes;
