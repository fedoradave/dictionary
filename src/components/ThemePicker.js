import { useContext, useCallback } from 'react';
import constants from 'constants';
import Theme from 'contexts/Theme';
const ThemePicker = () => {
  const { setTheme, theme } = useContext(Theme);
  const handleSetTheme = useCallback(e => setTheme(e.target.value), [setTheme]);
  return (
    <fieldset id="theme-picker">
      <legend>
        theme
      </legend>
      <div id="theme-options">
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.console}
            checked={theme === constants.themes.values.console}
            onChange={handleSetTheme}
          />
          console
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.whiteboard}
            checked={theme === constants.themes.values.whiteboard}
            onChange={handleSetTheme}
          />
          whiteboard
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.blackboard}
            checked={theme === constants.themes.values.blackboard}
            onChange={handleSetTheme}
          />
          blackboard
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.paper}
            checked={theme === constants.themes.values.paper}
            onChange={handleSetTheme}
          />
          paper
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.coffee}
            checked={theme === constants.themes.values.coffee}
            onChange={handleSetTheme}
          />
          coffee
        </label>
      </div>
    </fieldset>
  );
}
export default ThemePicker;
