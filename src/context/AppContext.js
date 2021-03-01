import { useState, createContext } from 'react';

import questions from '../data/questions';

const AppContext = createContext([{}, () => {}]);

const AppProvider = ({ children }) => {
  const [state, setState] = useState({
    questions
  });

  return (
    <AppContext.Provider value={[state, setState]}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
