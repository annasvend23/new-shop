import { createContext, useState } from 'react';

export const AppContext = createContext({
  cartItems: [],
  setCartItems: () => {},
  popupActive: false,
  setPopupActive: () => {},
  currentUser: null,
  setCurrentUser: () => {},
});

const AppContextProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  return (
    <AppContext.Provider value={{ cartItems, setCartItems, popupActive, setPopupActive, currentUser, setCurrentUser }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
