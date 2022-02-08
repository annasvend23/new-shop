import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchGoods } from './redux/actions';
import Card from './Card';
import './Cards.css';

const Cards = (props) => {
  const { goods, fetchGoods, loading } = props;

  useEffect(() => {
    fetchGoods();
  }, [fetchGoods]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className='cards'>
      {goods &&
        goods.map((good) => {
          return <Card good={good} key={good.id} />;
        })}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  loading: state.goodsReducer.loading,
  goods: state.goodsReducer.goods,
});

const mapDispatchToProps = {
  fetchGoods,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
