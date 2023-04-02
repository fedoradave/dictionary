import { useContext } from 'react';
import App from 'contexts/App';
import Input from 'components/Input';
import Modes from 'components/Modes';
import Options from 'components/Options';

const Form = () => {
  const { search } = useContext(App);
  return (
    <form onSubmit={search}>
      <Input />
      <Modes />
      <Options />
    </form>
  );
};

export default Form;
