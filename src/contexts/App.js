import {
  createContext, useState, useEffect, useCallback
} from 'react';
import constants from '../constants';

const App = createContext();

const Provider = ({ worker, children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState(constants.message.default);
  const search = e => {
    e.preventDefault();
    const word = event.target.elements[constants.query.name].value.toLowerCase().trim();
    const option = event.target.elements[constants.options.name].value;
    setLoading(true);
    worker.postMessage({ word, option });
  }
  const handleResult = e => {
    const { results, message } = e.data;
    setResults(results);
    setMessage(message);
    setLoading(false);
  }
  const toggleSettings = useCallback(() =>
    setShowSettings(!showSettings),
    [setShowSettings, showSettings]
  );
  useEffect(() => {
    worker.onmessage = handleResult;
  }, [worker]);
  return (
    <App.Provider value={{
      selected,
      setSelected,
      definition,
      setDefinition,
      toggleSettings,
      showSettings,
      search,
      results,
      message,
      loading,
    }}>
      {children}
    </App.Provider>
  )
}

export {
  App as default,
  Provider as Provider
}
