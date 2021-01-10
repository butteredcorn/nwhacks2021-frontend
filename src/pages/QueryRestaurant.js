import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import SearchRestaurant from '../controllers/documenu'
import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, FormContainer, MainHeading, SubHeading, PrimaryButton, NavbarButton, TextInput, PasswordInput } from '../css/main'

const SearchBar = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: center;
align-items: center;
background: ${props => props.theme.backgroundColour};
margin: 2rem;
border-radius: 25px;
`

function RestaurantSearch({}) {

    const [restaurants, setRestaurants] = useState({data: [], loading: true})
    const [queryParam, setQueryParam] = useState({query: ""})
    const { query } = queryParam
    const updateInput = e => setQueryParam({ ...query, [e.target.name]: e.target.value });

    const queryRestaurant = async (query) => {
        setRestaurants({data: [], loading: true})
        const result = await SearchRestaurant(query)
        setRestaurants({loading: false, data: result})
        console.log(result)
    }

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <SearchBar>
                        <TextInput type="text" placeholder={" name or phonenumber"} name="query" onChange={updateInput}></TextInput>
                        <PrimaryButton className="Primary-Button Search-Bar-Button" onClick={() => queryRestaurant(query)}>Confirm</PrimaryButton>
                    </SearchBar>
                    <div>
                        {!restaurants.loading && Array.isArray(restaurants.data) && restaurants.data.length > 1 && restaurants.data.map((restaurant, index) => 
                        <div key={index}>
                            <p>{restaurant.restaurant_name}</p>
                            <p>{restaurant.restaurant_website}</p>
                        </div>
                        )}
                    </div>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default RestaurantSearch;