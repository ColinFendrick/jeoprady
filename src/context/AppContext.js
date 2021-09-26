import { useState, createContext, useEffect } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [appState, setAppState] = useState({
    questions: [],
    user: {}
  });

  useEffect(() => {
    const localStorageContext = localStorage.getItem('appContext');

    if (localStorageContext)
      setAppState(JSON.parse(localStorageContext));
  }, [setAppState]);

  useEffect(() => {
    localStorage.setItem('appContext', JSON.stringify(appState));
  }, [appState]);

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
