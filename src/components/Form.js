import { useContext } from 'react';
import App from 'contexts/App';
import Input from 'components/Input';
import Modes from 'components/Modes';
import Options from 'components/Options';

const Form = () => {
  const { handleSearch } = useContext(App);
  return (
    <form onSubmit={handleSearch}>
      <Input />
      <Modes />
      <Options />
    </form>
  );
};

export default Form;
