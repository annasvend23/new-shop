import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from './AppContext';
import './Card.css';

const Card = (props) => {
  const [good, setGood] = useState(props.good);
  const { currentUser, setCartItems } = useContext(AppContext);

  const handleClick = () => {
    const { inStock } = good;
    fetch(`http://localhost:3000/goods/${good.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inStock: inStock - 1,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setGood(json);
        setCartItems((prevCartItems) => prevCartItems.concat(json));
      });
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

export default Card;
