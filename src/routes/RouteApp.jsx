import React from 'react';
import { Route,Routes } from "react-router-dom"
import Home from '../Pages/Home';
import Movies from '../Pages/Movie';
import Songs from '../Pages/Songs';
import NotFound from '../Pages/NotFund';

export default function RouteApp() {
  return (
      <Routes>
          <Route path='/' exact Component={Home}></Route>
          <Route path='/movies' exact Component={Movies}></Route>
          <Route path='/songs' exact Component={Songs}></Route>
          <Route Component={NotFound}></Route>
      </Routes>
  )
}
