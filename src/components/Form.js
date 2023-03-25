import { useContext } from 'react';
import App from '../contexts/App';
import Input from './Input';
import Settings from './Settings';
import Options from './Options';

const Form = () => {
  const { search } = useContext(App);
  return (
    <form onSubmit={search}>
      <Input />
      <Options />
      <Settings />
    </form>
  );
}

export default Form;
