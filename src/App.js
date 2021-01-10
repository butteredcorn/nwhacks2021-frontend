import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom"
import './css/App.css';
import Landing from './pages/Landing'
import Partner from './pages/Partner'
import Home from './pages/Home'
import Login from './pages/Login'
import RestaurantSearch from './pages/QueryRestaurant'
import RestaurantQRCodes from './pages/QRCodes'
import RestaurantMenu from './pages/RestaurantMenu'
import Payment from './pages/Payment'
import PostPayment from './pages/PostPayment'
import Dashboard from './pages/Dashboard'

function App(props) {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])

  return token ? (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/landing" component={Landing} />
        <Route path="/restaurant/search" component={RestaurantSearch}/>
        <Route path="/restaurant/qrcodes" component={RestaurantQRCodes}/>
        <Route path="/restaurant/menu" component={RestaurantMenu}/>
        <Route path="/restaurant/payment" component={Payment}/>
        <Route path="/postpayment" component={PostPayment} />
        <Route path="/partner" component={Partner} exact />
        <Route path="/restaurant/dashboard" component={Dashboard} exact/>
      </Switch>
    </div>
  )
    :
    (<div>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/partner" component={Partner} exact />
        <Route path="/restaurant/menu" component={RestaurantMenu}/>
        <Route path="/*" component={Login} />
      </Switch>
    </div>)
}

export default App;