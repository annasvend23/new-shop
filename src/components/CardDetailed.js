import React, { useRef, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchGood, updateInStock } from './redux/actions';
import './CardDetailed.css';

const CardDetailed = (props) => {
  const { currentUser, updateInStock, good, fetchGood, loading } = props;
  const { id } = useParams();
  const [isValid, setIsValid] = useState(true);
  const inputEl = useRef(null);

  useEffect(() => {
    fetchGood(id);
  }, [id, fetchGood]);

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleClick = () => {
    const value = inputEl.current.value;
    if (value <= good.inStock) {
      setIsValid(true);
      updateInStock(good, value);
    } else {
      setIsValid(false);
    }
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
              {!currentUser ? (
                <button className='button'>
                  Войдите, чтобы добавить в корзину
                </button>
              ) : good.inStock ? (
                <div>
                  <input
                    ref={inputEl}
                    type='number'
                    min='1'
                    max={good.inStock}
                  ></input>
                  <button className='button' onClick={handleClick}>
                    Добавить в корзину
                  </button>
                  {isValid ? null : (
                    <div className='error'>
                      Количество товара не может быть больше {good.inStock}
                    </div>
                  )}
                </div>
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.userReducer.currentUser,
    good: state.goodReducer.good,
    loading: state.goodsReducer.loading,
  };
};

const mapDispatchToProps = {
  updateInStock,
  fetchGood,
};

export default connect(mapStateToProps, mapDispatchToProps)(CardDetailed);
