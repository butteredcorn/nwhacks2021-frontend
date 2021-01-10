import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import SearchRestaurant from '../controllers/documenu'
import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, FormContainer, MainHeading, SubHeading, PrimaryButton, NavbarButton, TextInput, PasswordInput } from '../css/main'

function RestaurantSearch({}) {

    const [queryParam, setQueryParam] = useState({query: ""})
    const { query } = queryParam
    const updateInput = e => setQueryParam({ ...query, [e.target.name]: e.target.value });

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <TextInput type="text" placeholder={" name or phonenumber"} name="query" onChange={updateInput}></TextInput>
                    <PrimaryButton className="Primary-Button" onClick={() => SearchRestaurant(query)}>Confirm</PrimaryButton>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default RestaurantSearch;