import React, { useState } from 'react';
import { connect } from 'react-redux';
import { customer, admin } from './constants';
import { setCurrentUser, setPopupActive } from './redux/actions';
import './Form.css';

const isObjectEmpty = (object) => Object.keys(object).length === 0;

const Form = ({ setCurrentUser, setPopupActive }) => {
  const initialValues = {
    userName: '',
    password: '',
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const validateErrors = validate(formValues);
    setFormErrors(validate(formValues));
    if (!isObjectEmpty(validateErrors)) {
      return;
    }

    const submitErrors = submitUser(formValues);
    setFormErrors(submitErrors);
    if (!isObjectEmpty(submitErrors)) {
      return;
    }

    setCurrentUser(formValues);
    setPopupActive(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validate = (values) => {
    const errors = {};

    if (!values.userName) {
      errors.userName = 'Поле пустое. Заполните пожалуйста';
    } else if (values.userName[0] !== values.userName[0].toUpperCase()) {
      errors.userName = 'Первая буква должна быль заглавной';
    }

    if (!values.password) {
      errors.password = 'Поле пустое. Заполните пожалуйста';
    }

    return errors;
  };

  const submitUser = (values) => {
    const errors = {};
    if (
      values.userName !== admin.userName &&
      values.userName !== customer.userName
    ) {
      errors.userName = 'Пользователь с таким имением не существует';
      return errors;
    }

    const user = admin.userName === values.userName ? admin : customer;
    if (values.password !== user.password) {
      errors.password = 'Неверный пароль';
    }

    return errors;
  };

  return (
    <form className='popup__form' name='login' onSubmit={handleSubmit}>
      <div>
        <input
          type='text'
          name='userName'
          className='popup__input'
          placeholder='Ваше имя'
          value={formValues.userName}
          onChange={handleChange}
        />
        <div className='popup__input-error'>{formErrors.userName}</div>
      </div>
      <div>
        <input
          type='password'
          name='password'
          className='popup__input'
          placeholder='Пароль'
          value={formValues.password}
          onChange={handleChange}
        />
        <div className='popup__input-error'>{formErrors.password}</div>
      </div>
      <div className='popup__form-error'></div>
      <button type='submit' className='popup__button'>
        Войти
      </button>
    </form>
  );
};

const mapDispatchToProps = {
  setCurrentUser,
  setPopupActive,
};

export default connect(null, mapDispatchToProps)(Form);
