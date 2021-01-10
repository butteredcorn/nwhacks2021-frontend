import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"

import './css/App.css';

import Landing from './pages/Landing'
import Partner from './pages/Partner'
import Home from './pages/Home'
import Login from './pages/Login'
import RestaurantSearch from './pages/QueryRestaurant'

function App({ }) {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])

  return token ? (
    <div>
      <Switch>
        <Route path="/" component={Landing} />
        <Route exact path="/home" component={Home} />
        <Route path="/restaurant/search" component={RestaurantSearch}></Route>
      </Switch>
    </div>
  )
    :
    (<div>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/partner" component={Partner} exact />
        <Route path="*" component={Login} />
      </Switch>
    </div>)
}

export default App;