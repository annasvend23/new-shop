import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cards from './Cards';
import CardDetailed from './CardDetailed';
import Contact from './Contact';
import './Main.css';

const Main = () => {
  return (
    <div className='main'>
      <Switch>
        <Route exact path='/goods' component={Cards} />
        <Route exact path={'/goods/:id'} component={CardDetailed} />
        <Route exact path='/about' component={Contact} />
        <Route exact path='*' component={Cards} />
      </Switch>
    </div>
  );
};

export default Main;
