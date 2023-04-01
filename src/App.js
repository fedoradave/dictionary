import { Provider as AppProvider } from './contexts/App';
import { Panel } from './layouts/Panels';
import Form from './components/Form';
import Results from './components/Results';
import Title from './components/Title';
import Definition from './components/Definition';
import Theme from './components/Theme';
import WordList from './components/WordList';
import About from './content/About';
import Copyright from './content/Copyright';
import constants from './constants';
const App = (props) => {
  return (
    <AppProvider Header={Title} {...props}>
      <Panel name={constants.panels.app}>
        <Form />
        <Results />
        <Definition />
      </Panel>
      <Panel name={constants.panels.settings}>
        <About />
        <Theme />
        <WordList />
        <Copyright />
      </Panel>
    </AppProvider>
  );
};

export default App;
