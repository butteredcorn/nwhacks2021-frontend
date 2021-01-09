import React, { useReducer, createContext, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "styled-components"
import AOS from 'aos';
import "aos/dist/aos.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';
import App from './App';

import ScrollOnNavigate from './components/ScrollOnNavigate'

import { initialState, reducer } from "./theme"

export const ThemeContext = createContext();

function Index() {
  AOS.init({
    duration : 2000
  })

  const [state, dispatch] = useReducer(reducer, initialState);
  const {currentTheme} = state;

  useEffect(() => {
    if (currentTheme.id == "dark" || currentTheme.id == "light") {
      localStorage.setItem('theme', JSON.stringify(currentTheme.id))
    }
  }, [state])

  return (
    <React.StrictMode>
      <ThemeProvider theme={currentTheme}>
        <ThemeContext.Provider value={{...state, dispatch}}>
          <BrowserRouter>
            <ScrollOnNavigate/>
            <App/>
          </BrowserRouter>
        </ThemeContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
}

ReactDOM.render(
  <Index />,
  document.getElementById("root")
);
