import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import { Route, Switch } from "react-router-dom"

import './css/App.css';

import Landing from './pages/Landing'
import Home from './pages/Home'
import Login from './pages/Login'
import RestaurantSearch from './pages/QueryRestaurant'
import RestaurantQRCodes from './pages/QRCodes'
import RestaurantMenu from './pages/RestaurantMenu'

function App({ }) {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])

  return token ? (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/restaurant/search" component={RestaurantSearch}/>
        <Route path="/restaurant/qrcodes" component={RestaurantQRCodes}/>
        <Route path="/restaurant/menu" component={RestaurantMenu}/>
      </Switch>
    </div>
  )
    :
    (<div>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/*" component={Login} />
      </Switch>
    </div>)
}

export default App;