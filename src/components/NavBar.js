import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ThemeContext } from "../index";

const NavBar = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${props => props.theme.backgroundColour};
  min-height: 50px;
  font-size: 0.9em;
  font-weight: 500;
  list-style: none;
`;

const NavLink = styled(Link)`
  display: block;
  padding: 1rem;
  transition: 250ms ease background-color;
  color: ${props => props.theme.textColour};
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.textColour};
    background-color: ${props => props.theme.uiBackgroundColour};
  }
`;

const NavToggle = styled(NavLink)``;

function Navbar({}) {

    const [localThemeState, setLocalThemeState] = useState(JSON.parse(localStorage.getItem('theme')))

    const { dispatch } = useContext(ThemeContext);

    const toggleTheme = () => {
        let nextTheme
        if(localThemeState == 'dark') {
            nextTheme = 'light'
        } else {
            nextTheme = 'dark'
        }
        setLocalThemeState(nextTheme)
        dispatch({ type: "toggleTheme" });
    };

    return (        
        <NavBar className="btn-group">
            <div className="navbar">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/restaurant/search">Create a New Restaurant</NavLink>
            </div>
            <NavToggle onClick={toggleTheme}>{localThemeState == 'dark' ? "Light Mode" : "Dark Mode"}</NavToggle>
        </NavBar>
    );
}

export default Navbar;