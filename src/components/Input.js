import constants from '../constants';

const Input = () => {
  return (
    <fieldset id="input">
      <legend>input <small>(?=blank)</small></legend>
      <input
        id={constants.query.name}
        className="fluid"
        type="text"
        autoComplete="off"
        autoFocus
      />
      <button type="reset">clear</button>
      <button type="submit">search</button>
    </fieldset>
  );
}

export default Input;
