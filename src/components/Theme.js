import constants from '../constants';
const Theme = () => (
  <fieldset id="theme">
    <legend>
      theme
    </legend>
    <div id="theme-options">
      <label>
        <input
          type="radio"
          name={constants.themes.name}
          value={constants.themes.values.console}
          defaultChecked
        />
        console
      </label>
      <label>
        <input
          type="radio"
          name={constants.themes.name}
          value={constants.themes.values.blackboard}
        />
        blackboard
      </label>
      <label>
        <input
          type="radio"
          name={constants.themes.name}
          value={constants.themes.values.whiteboard}
        />
        whiteboard
      </label>
      <label>
        <input
          type="radio"
          name={constants.themes.name}
          value={constants.themes.values.paper}
        />
        paper
      </label>
      <label>
        <input
          type="radio"
          name={constants.themes.name}
          value={constants.themes.values.coffee}
        />
        coffee
      </label>
    </div>
  </fieldset>
);

export default Theme;
