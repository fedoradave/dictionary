import constants from '../constants';

const Options = () => {
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
    </div>
  );
}
export default Options;
