import styled from "styled-components"

import { PageContainer, SectionContainer, MainHeading, SubHeading, NavbarButton } from '../css/main'

const NavBar = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.theme.backgroundColor};
    margin-left: 1rem;
`


function AuthNavBar({}) {

    return (
        <NavBar>
            <NavbarButton className="UI-Button" onClick={() => window.history.back()}>Go back</NavbarButton>
        </NavBar>
    )
}

export default AuthNavBar;