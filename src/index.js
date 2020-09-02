import React, { useReducer } from 'react';
import { initialState, reducer, AppContext } from './storage/reducers';
import ReactDOM from 'react-dom';
import App from './App';

const AppContent = () => {
    let [state, dispatch] = useReducer(reducer, initialState);
    let value = { state, dispatch };
  
      return (
        <AppContext.Provider value={value}>
          <App />
        </AppContext.Provider>
      );
}

ReactDOM.render(<AppContent />,document.getElementById('root'));