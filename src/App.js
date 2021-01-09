import styled from "styled-components"
import {Route} from "react-router-dom"

import './css/App.css';

import Home from './pages/Home'

function App({}) {
  return (
    <div>
      <Route exact path="/" component={Home}></Route>
      {/* <Route path="/page" component={}></Route> */}
    </div>
  );
}

export default App;