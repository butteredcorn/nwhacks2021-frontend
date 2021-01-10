import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import '../css/login.css'

//components
import AuthNavBar from '../components/AuthNavBar'

//controllers
import {login} from '../controllers/auth'

import { PageContainer, SectionContainer, FormContainer, MainHeading, SubHeading, PrimaryButton, NavbarButton, TextInput, PasswordInput } from '../css/main'

const FormHeader = styled.div`
    width: 100%;
    display: flex;
    background: ${props => props.theme.backgroundColor};
`

function Login({}) {

    const [loginCredentials, setLoginCredentials] = useState({email: "", password: ""})
    const {email, password} = loginCredentials
    const updateInput = e => setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value });

    return (
        <PageContainer>
            <header>

            </header>
            <main>
                <SectionContainer className="Login-Form">
                    <FormHeader className="Form-Header"><AuthNavBar/></FormHeader>
                    <SubHeading className="Login-Heading">Login</SubHeading>
                    <TextInput type="text" placeholder={"Email"} name="email" onChange={updateInput}></TextInput>
                    <PasswordInput placeholder={"Password"} name="password" textContentType={"password"} onChange={updateInput}></PasswordInput>
                    <PrimaryButton className="Primary-Button" onClick={() => login(email, password)}>Confirm</PrimaryButton>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
    )
}

export default Login;