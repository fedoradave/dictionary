import {
  createContext, useContext, useState
} from 'react';

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
  console.log(initTheme);
  const [theme, setTheme] = useState(initTheme);
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
