import {
  createContext, useState, useEffect, useCallback, useMemo
} from 'react';
import { useLocation } from 'react-router-dom';
import useLocalStorageState from 'hooks/useLocalStorageState';
import useSearch from 'hooks/useSearch';
import { Provider as LayoutProvider } from 'layouts/Panels';
import actions from 'workers/actions';
import constants from 'constants';

const { root, search: searchRoutes } = constants.routes;
const pattern = `${root}${searchRoutes.root}${searchRoutes.mode}${searchRoutes.word}`;

const App = createContext();

const Provider = ({ Header, worker, children }) => {
  const { pathname } = useLocation();
  const { params, search } = useSearch({ pathname, pattern });
  const [wordList, setWordList] = useLocalStorageState('word-list', params.list || constants.lists.default);
  const [showSettings, setShowSettings] = useState(false);
  const [definition, setDefinition] = useState(null);
  const [selected, setSelected] = useState(constants.selected.default);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(constants.results.default);
  const isGrouped = useMemo(() => !(results instanceof Array), [results]);
  const resultsLength = useMemo(() => isGrouped
    ? Object.values(results).reduce((accum, curr) => accum + curr.length, 0)
    : results.length,
    [isGrouped, results]
  );
  const [message, setMessage] = useState(constants.message.default);
  const handleSearch = e => {
    e.preventDefault();
    const word = e.target.elements[constants.query.name].value
      .toLowerCase().trim();
    const mode = e.target.elements[constants.modes.name].value;
    //const group = e.target.elements[constants.group.name].checked;
    search({ word, mode });
  };
  const handleResponse = e => {
    const { type, payload } = e.data;
    if ([
      constants.actions.result,
      constants.actions.resultFail
    ].includes(type)) {
      const { results, message } = payload;
      setResults(results);
      setMessage(message);
      setLoading(false);
      if (results.length === 1) setSelected(results[0]);
    }
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
    worker.onmessage = handleResponse;
  }, [worker]);
  useEffect(() => {
    worker.postMessage(actions.client.setWordList({
      wordList
    }));
  }, [worker, wordList]);
  useEffect(() => {
    if (params.word && params.mode) {
      setLoading(true);
      setResults([]);
      setDefinition(null);
      setSelected(null);
      // todo: check if user wants to group it!
      worker.postMessage(actions.client.query({
        word: params.word,
        mode: params.mode,
        group: true
      }));
    }
  }, [params.word, params.mode, worker]);
  return (
    <App.Provider value={{
      params,
      pathname,
      wordList,
      setWordList,
      selected,
      setSelected,
      definition,
      setDefinition,
      toggleSettings,
      showSettings,
      handleSearch,
      results,
      isGrouped,
      resultsLength,
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
