import {
  createContext, useState, useContext, useCallback, useEffect
} from 'react';

const Panels = createContext();

const Panel = ({ name, children, ...props }) => {
  const { register, panels, hidden, main } = useContext(Panels);
  useEffect(() => {
    if (!panels[name]) register(name);
  }, [panels, name, register]);
  return (
    <div className={[
      'panel',
      hidden[name] ? 'hidden' : '',
      main === name ? 'main' : 'secondary'
    ].join(' ')} {...props}>
      {children}
    </div>
  );
};
const Provider = ({
  Header, children, initState,
}) => {
  const [main, setMain] = useState(initState.main);
  const [panels, setPanels] = useState(initState.panels || {});
  const [hidden, setHidden] = useState(initState.hidden || {});
  const register = useCallback(name => {
    setPanels({
      ...panels,
      [name]: true
    });
  }, [setPanels, panels]);
  const hide = useCallback(name => {
    setHidden({
      ...hidden,
      [name]: true
    });
  }, [hidden, setHidden]);
  const show = useCallback(name => {
    setHidden({
      ...hidden,
      [name]: undefined
    });
  }, [hidden, setHidden]);
  const toggle = useCallback(name => {
    setHidden({
      ...hidden,
      [name]: hidden[name]
        ? undefined
        : true
    });
  }, [hidden, setHidden]);
  return (
    <Panels.Provider value={{
      register,
      panels,
      main,
      setMain,
      hidden,
      toggle,
      show,
      hide
    }}>
      {!!Header && <Header />}
      <div className="panels">
        {children}
      </div>
    </Panels.Provider>
  );
};

export {
  Panels as default,
  Provider,
  Panel
};
