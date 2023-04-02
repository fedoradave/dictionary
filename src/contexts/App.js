import {
  createContext, useState, useEffect, useCallback
} from 'react';
import useLocalStorageState from 'hooks/useLocalStorageState';
import { Provider as LayoutProvider } from 'layouts/Panels';
import constants from 'constants';

const App = createContext();

const Provider = ({ Header, worker, children }) => {
  const [wordList, setWordList] = useLocalStorageState('word-list', constants.lists.default);
  const [showSettings, setShowSettings] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [selected, setSelected] = useState(constants.selected.default);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(constants.results.default);
  const [message, setMessage] = useState(constants.message.default);
  const search = e => {
    e.preventDefault();
    const word = event.target.elements[constants.query.name].value.toLowerCase().trim();
    const option = event.target.elements[constants.options.name].value;
    setLoading(true);
    setResults([]);
    setDefinition(null);
    setSelected(null);
    worker.postMessage({ word, option });
  };
  const handleResult = e => {
    const { results, message } = e.data;
    setResults(results);
    setMessage(message);
    setLoading(false);
    if (results.length === 1) setSelected(results[0]);
  };
  const toggleSettings = useCallback(() =>
    setShowSettings(!showSettings),
    [setShowSettings, showSettings]
  );
  const reset = useCallback(() => {
    setShowSettings(false);
    setSelected(null);
    setDefinition(null);
    setLoading(false);
    setResults([]);
    setMessage(constants.message.default);
  }, []);
  useEffect(() => {
    worker.onmessage = handleResult;
  }, [worker]);
  return (
    <App.Provider value={{
      wordList,
      setWordList,
      selected,
      setSelected,
      definition,
      setDefinition,
      toggleSettings,
      showSettings,
      search,
      results,
      reset,
      message,
      loading,
    }}>
      <LayoutProvider
        Header={Header}
        initState={{
          panels: {
            [constants.panels.app]: true,
            [constants.panels.settings]: true,
          },
          hidden: {
            [constants.panels.settings]: true
          },
          main: constants.panels.app,
        }}
      >
        {children}
      </LayoutProvider>
    </App.Provider>
  );
};

export {
  App as default,
  Provider
};
