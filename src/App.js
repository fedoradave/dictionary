import { Provider } from './contexts/App';
import Form from './components/Form';
import Results from './components/Results';
import Title from './components/Title';
import Definition from './components/Definition';
const App = (props) => {
  return (
    <Provider {...props}>
      <Title />
      <Form />
      <Results />
      <Definition />
    </Provider>
  );
};

export default App;
