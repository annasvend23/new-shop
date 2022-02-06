import React from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';
import Popup from './Popup';
import AppContextProvider from './AppContext';

const App = () => {
  return (
    <div className='App'>
      <AppContextProvider>
        <Header />
        <Main />
        <Popup />
      </AppContextProvider>
    </div>
  );
};

export default App;
