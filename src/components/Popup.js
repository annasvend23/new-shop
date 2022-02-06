import React, {useContext} from 'react';
import Form from './Form';
import { AppContext } from './AppContext';
import './Popup.css';

const Popup = () => {
  const { popupActive, setPopupActive } = useContext(AppContext);
  return (
    <div className={popupActive ? 'popup active' : 'popup'}>
      <div className='popup__content'>
        <img
          src='/close.svg'
          alt='close'
          className='popup__close'
          onClick={() => setPopupActive(false)}
        />
        <h3 className='popup__title'>Вход</h3>
        <Form />
      </div>
    </div>
  );
};

export default Popup;
