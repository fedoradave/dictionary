import { useContext } from 'react';
import App from '../contexts/App';
import Input from './Input';
import Modes from './Modes';
import Options from './Options';

const Form = () => {
  const { search } = useContext(App);
  return (
    <form onSubmit={search}>
      <Input />
      <Modes />
      <Options />
    </form>
  );
}

export default Form;
