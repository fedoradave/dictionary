import { Provider as AppProvider } from 'contexts/App';
import { Provider as ThemeProvider } from 'contexts/Theme';
import { Panel } from 'layouts/Panels';
import Form from 'components/Form';
import Results from 'components/Results';
import Title from 'components/Title';
import Definition from 'components/Definition';
import ThemePicker from 'components/ThemePicker';
import WordList from 'components/WordList';
import About from 'content/About';
import Support from 'content/Support';
import Copyright from 'content/Copyright';
import Version from 'content/Version';
import constants from 'constants';
const App = (props) => {
  return (
    <ThemeProvider initTheme={constants.defaults.theme}>
      <AppProvider Header={Title} {...props}>
        <Panel name={constants.panels.app}>
          <Form />
          <Results />
          <Definition />
          <Version />
        </Panel>
        <Panel name={constants.panels.settings}>
          <About />
          <Support />
          <ThemePicker />
          <WordList />
          <Copyright />
        </Panel>
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
