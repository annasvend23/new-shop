import React, { useEffect, useState } from 'react';
import Card from './Card';
import './Cards.css';

const Cards = () => {
  const [goods, setGoods] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/goods')
      .then((res) => res.json())
      .then((json) => setGoods(json));
  }, []);

  return (
    <ul className='cards'>
      {goods && goods.map((good) => {
        return (
          <Card good={good} key={good.id}/>
        )
      })}
    </ul>
  );
};

export default Cards;
