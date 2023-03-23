import { Provider } from './contexts/App';
import Form from './components/Form';
import Results from './components/Results';
import Definition from './components/Definition';
const App = (props) => {
  return (
    <Provider {...props}>
      <Form />
      <Results />
      <Definition />
    </Provider>
  );
};

export default App;
