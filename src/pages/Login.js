import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import '../css/login.css'

//controllers
import {login} from '../controllers/auth'

import { PageContainer, SectionContainer, FormContainer, MainHeading, SubHeading, PrimaryButton, TextInput, PasswordInput } from '../css/main'


function Login({}) {

    const [loginCredentials, setLoginCredentials] = useState({email: "", password: ""})
    const {email, password} = loginCredentials
    const updateInput = e => setLoginCredentials({ ...loginCredentials, [e.target.name]: e.target.value });

    return (
        <PageContainer>
            <header>

            </header>
            <main>
                <FormContainer className="Login-Form">
                    <SubHeading className="Login-Heading">Login</SubHeading>
                    <TextInput type="text" placeholder={" Email"} name="email" onChange={updateInput}></TextInput>
                    <PasswordInput placeholder={" Password"} name="password" textContentType={"password"} onChange={updateInput}></PasswordInput>
                    <PrimaryButton className="Primary-Button" type="submit" onClick={() => login(email, password)}>Confirm</PrimaryButton>
                </FormContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
    )
}

export default Login;