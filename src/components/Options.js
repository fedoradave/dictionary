import { useContext } from 'react';
import constants from '../constants';
import App from '../contexts/App';

const Options = () => {
  const { toggleSettings, showSettings } = useContext(App);
  return (
    <div id="options">
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
        has
      </label>
      <label>
        <input
          type="radio"
          name={constants.options.name}
          value={constants.options.values.scramble}
        />
        scramble
      </label>
      <button className="justify-right" type="button" onClick={toggleSettings}>
        {showSettings
          ? <>settings [&#8211;]</>
          : <>settings [+]</>
        }
      </button>
    </div>
  );
}
export default Options;
