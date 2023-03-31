import { useContext } from 'react';
import Layout from '../layouts/Panels';
import constants from '../constants';
const Title = () => {
  const { toggle, hidden } = useContext(Layout);

  return (
    <header>
      <h1>
        <strong>SQUABBLE</strong>
        <small>.BAND&#169; Word Game Dictionary</small>
      </h1>
      <button
        onClick={() => toggle(constants.panels.settings)}
        type="button"
      >
        {hidden[constants.panels.settings]
          ? <>&#9776;</>
          : <>&#10005;</> 
        }
      </button>
    </header>
  );
};
export default Title;
