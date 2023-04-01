import { useContext, useCallback } from 'react';
import constants from '../constants';
import Theme from '../contexts/Theme';
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
            onClick={handleSetTheme}
          />
          console
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.whiteboard}
            checked={theme === constants.themes.values.whiteboard}
            onClick={handleSetTheme}
          />
          whiteboard
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.blackboard}
            checked={theme === constants.themes.values.blackboard}
            onClick={handleSetTheme}
          />
          blackboard
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.paper}
            checked={theme === constants.themes.values.paper}
            onClick={handleSetTheme}
          />
          paper
        </label>
        <label>
          <input
            type="radio"
            name={constants.themes.name}
            value={constants.themes.values.coffee}
            checked={theme === constants.themes.values.coffee}
            onClick={handleSetTheme}
          />
          coffee
        </label>
      </div>
    </fieldset>
  );
}
export default ThemePicker;
