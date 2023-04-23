import { useContext } from 'react';
import constants from 'constants';
import App from 'contexts/App';

const Input = () => {
  const { reset, pathname, params } = useContext(App);
  return (
    <fieldset id="input">
      <legend>input <small>(?=blank)</small></legend>
      <input
        key={pathname}
        id={constants.query.name}
        className="fluid"
        type="text"
        autoComplete="off"
        defaultValue={params.word}
        autoFocus
      />
      <button type="reset" onClick={reset}>reset</button>
      <button type="submit">search</button>
    </fieldset>
  );
};

export default Input;
