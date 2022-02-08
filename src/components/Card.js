import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateInStock } from './redux/actions';
import './Card.css';

const Card = (props) => {
  const { currentUser, good, updateInStock } = props;

  const handleClick = () => {
    const value = 1;
    updateInStock(good, value);
  };

  return (
    <li className='card'>
      <Link to={`/goods/${good.id}`}>
        <img className='card__image' alt={good.title} src={good.image} />
      </Link>
      <Link to={`/goods/${good.id}`}>
        <h2 className='card__title'>{good.title}</h2>
      </Link>
      <Link to={`/goods/${good.id}`}>
        <p className='card__country'>{good.country}</p>
      </Link>
      <div className='price-container'>
        <p className='card__amount'>за {good.amount} кг</p>
        <p className='card__price'>{good.price} ₽</p>
      </div>
      {!currentUser ? (
        <button className='card__button'>
          Войдите, чтобы добавить в корзину
        </button>
      ) : good.inStock ? (
        <button className='card__button' onClick={handleClick}>
          Добавить в корзину
        </button>
      ) : (
        <button className='card__button card__button_not-active'>
          Нет в наличии
        </button>
      )}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
  };
};

const mapDispatchToProps = {
  updateInStock,
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
