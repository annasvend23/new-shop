import React, { useState, useEffect, useContext, useRef } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetailed.css';
import { AppContext } from './AppContext';

const CardDetailed = () => {
  const { id } = useParams();
  const [good, setGood] = useState(null);
  const { currentUser, setCartItems } = useContext(AppContext);
  const inputEl = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/goods/${id}`)
      .then((res) => res.json())
      .then((json) => setGood(json));
  }, [id]);

  const handleClick = () => {
    const { inStock } = good;
    const value = inputEl.current.value;

    fetch(`http://localhost:3000/goods/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        inStock: inStock - value,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        setGood(json);
        const goodsArr = Array.from({ length: value }).fill(json);
        setCartItems((prevCartItems) => prevCartItems.concat(goodsArr));
      });
  };

  return (
    <div className='container'>
      {good && (
        <>
          <img className='image' alt={good.title} src={good.image} />
          <div className='container_right'>
            <h2 className='title'>{good.title}</h2>
            <span className='country'>{good.country}</span>
            <p className='description'>{good.description}</p>
            <div className='price-container'>
              <p className='amount'>за {good.amount} кг</p>
              <p className='price'>{good.price} ₽</p>
            </div>
            <p className='in-stock'>В наличии {good.inStock} шт</p>
            <div className='button-container'>
              <input
                ref={inputEl}
                type='number'
                min='1'
                max={good.inStock}
              ></input>
              {!currentUser ? (
                <button className='button'>
                  Войдите, чтобы добавить в корзину
                </button>
              ) : good.inStock ? (
                <button className='button' onClick={handleClick}>
                  Добавить в корзину
                </button>
              ) : (
                <button className='button button_not-active'>
                  Нет в наличии
                </button>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CardDetailed;
