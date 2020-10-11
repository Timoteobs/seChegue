import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Feed from './pages/Feed/Feed';
import Rooms from './pages/Rooms/Rooms';
import LifePlan from './pages/LifePlan/LifePlan';

export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/main" component={Main} />
      <Route path="/feed" component={Feed} />
      <Route path="/rooms" component={Rooms} />
      <Route path="/life" component={LifePlan} />
    </BrowserRouter>
  );
};