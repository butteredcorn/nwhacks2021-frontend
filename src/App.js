import React, { useState, useEffect } from 'react';
import styled from "styled-components"
import {Route} from "react-router-dom"

import './css/App.css';

import Home from './pages/Home'
import Login from './pages/Login'

function App({}) {

  const [token, setToken] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    setToken(token)
  }, [])

  return token ? (
    <div>
      <Route exact path="/" component={Home}/>
      {/* <Route path="/page" component={}></Route> */}
    </div>
  ) 
  :
  (<div>
    <Route path="*" component = {Login}/>
  </div>)
}

export default App;