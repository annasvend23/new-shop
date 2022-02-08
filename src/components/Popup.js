import React from 'react';
import { connect } from 'react-redux';
import Form from './Form';
import { setPopupActive } from './redux/actions';
import './Popup.css';

const Popup = ({ isActive, setPopupActive }) => {
  return (
    <div className={isActive ? 'popup active' : 'popup'}>
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

const mapStateToProps = (state) => {
  return { isActive: state.popupReducer.isActive };
};

const mapDispatchToProps = {
  setPopupActive,
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
