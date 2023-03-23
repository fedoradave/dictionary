import constants from '../constants';

const Options = () => (
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
      contains
    </label>
  </div>
);

export default Options;
