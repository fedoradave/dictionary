import {
  createContext, useContext
} from 'react';
import useLocalStorageState from '../hooks/useLocalStorageState';

const Theme = createContext();
const Container = ({ children, ...props }) => {
  const { theme } = useContext(Theme);
  return (
    <div id="theme" className={theme} {...props}>
      {children}
    </div>
  );
}
const Provider = ({ initTheme, children, ...props }) => {
  const [theme, setTheme] = useLocalStorageState('theme', initTheme);
  return (
    <Theme.Provider value={{ theme, setTheme }}>
      <Container {...props}>
        {children}
      </Container>
    </Theme.Provider>
  )
}

export {
  Theme as default,
  Provider
}
