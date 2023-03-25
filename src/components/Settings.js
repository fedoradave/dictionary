import { useContext } from 'react';
import App from '../contexts/App';

const Settings = () => {
  const { showSettings } = useContext(App);
  return showSettings ? (
    <fieldset id="settings">
      <legend>settings</legend>
      <label>
        <input type="checkbox" />
        group by lengths
      </label>
    </fieldset>
  ) : null;
}

export default Settings;
