import { useContext } from 'react';
import constants from '../constants';
import App from '../contexts/App';

const Settings = () => {
  const { showSettings } = useContext(App);
  return showSettings ? (
    <div id="advanced">
      <label>
        <input
          type="checkbox"
          name={constants.group.name}
          defaultChecked={constants.group.default}
        />
          sort by length
      </label>
    </div>
  ) : null;
}

export default Settings;
