import { useState } from 'react';
const metadata = () => {
  const now = new Date().getTime();
  return {
    created: now,
    updated: now,
  };
};
const useLocalStorageState = (key, defaultValue) => {
  const newMeta = metadata();
  const localMeta = JSON.parse(localStorage.getItem(`metadata/${key}`));
  const isNew = !localMeta;
  if (isNew) {
    localStorage.setItem(`metadata/${key}`, JSON.stringify(newMeta));
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }
  const [state, setState] = useState(isNew
    ? defaultValue
    : JSON.parse(localStorage.getItem(key))
  );
  const handleSetState = (newState) => {
    const localMeta = JSON.parse(localStorage.getItem(`metadata/${key}`));
    localStorage.setItem(`metadata/${key}`, JSON.stringify({
      ...localMeta,
      updated: metadata().updated
    }));
    localStorage.setItem(key, JSON.stringify(newState));
    setState(newState);
  };
  return [
    state,
    handleSetState,
  ];
};

export default useLocalStorageState;
