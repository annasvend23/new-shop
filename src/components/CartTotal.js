import React from 'react';
import { connect } from 'react-redux';
import './CartTotal.css';

const CartTotal = ({ cartItems }) => {
  const price = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <p className='cart'>
      В корзине {cartItems.length} позиции на сумму {price} ₽
    </p>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: state.cartReducer.cartItems,
  };
};

export default connect(mapStateToProps)(CartTotal);
