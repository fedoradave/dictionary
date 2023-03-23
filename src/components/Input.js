import constants from '../constants';

const Input = () => {
  return (
    <fieldset id="input">
      <legend>input</legend>
      <input
        id={constants.query.name}
        className="fluid"
        type="text"
        autoComplete="off"
        autoFocus
      />
      <button action="submit">&gt;</button>
    </fieldset>
  );
}

export default Input;
