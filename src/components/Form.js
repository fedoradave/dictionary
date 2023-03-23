import { useContext } from 'react';
import App from '../contexts/App';
import Input from './Input';
import Options from './Options';

const Form = () => {
  const { search } = useContext(App);
  return (
    <form onSubmit={search}>
      <Input />
      <Options />
    </form>
  );
}

export default Form;
