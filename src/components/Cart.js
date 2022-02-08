import React from 'react';
import { connect } from 'react-redux';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const goodsInCart = cartItems.reduce((memo, cartItem) => {
    const existingItem = memo.find((item) => item.good.id === cartItem.id);
    if (existingItem) {
      existingItem.amount += 1;
    } else {
      memo.push({ good: cartItem, amount: 1 });
    }
    return memo;
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <h2 className='cart__title'>Корзина</h2>
      <ul className='cart__goods'>
        {goodsInCart &&
          goodsInCart.map((goodInCart) => {
            return (
              <li key={goodInCart.good.id} className='cart__good-container'>
                <div>{goodInCart.good.title}</div>
                <div>{goodInCart.amount} шт </div>
                <div>{goodInCart.amount * goodInCart.good.price} ₽</div>
              </li>
            );
          })}
      </ul>
      <div className='cart__total'>
        Итого {cartItems.length} шт на {total} ₽
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return { cartItems: state.cartReducer.cartItems };
};

export default connect(mapStateToProps, null)(Cart);
