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
        {Object.entries(constants.themes.values).map(([key, value]) => (
          <label key={key}>
            <input
              type="radio"
              name={constants.themes.name}
              value={value}
              checked={theme === value}
              onChange={handleSetTheme}
            />
            {key}
          </label>
        ))}
      </div>
    </fieldset>
  );
};
export default ThemePicker;
