import { useState, createContext } from 'react';

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const appState = useState({
    questions: [],
    user: {}
  });

  return (
    <AppContext.Provider value={appState}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
