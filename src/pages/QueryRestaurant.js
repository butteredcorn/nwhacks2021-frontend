import React, { useState, useEffect } from 'react';
import styled from "styled-components"

import SearchRestaurant from '../controllers/documenu'
import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, FormContainer, MainHeading, SubHeading, PrimaryButton, NavbarButton, TextInput, PasswordInput } from '../css/main'

import '../css/restaurant-search.css'
import Modal from "react-bootstrap/Modal";

import handleError from '../controllers/error'
import {createRestaurant} from '../controllers/server-routes'

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

const RestaurantSelectionButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: ${props => props.theme.textColour};
    background: ${props => props.theme.backgroundColour}
    padding: 0.5rem;
    border: none;
    border-radius: 15px;
    &:focus {
        outline: none;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);;
    }
`

function RestaurantSearch({}) {

    const [restaurants, setRestaurants] = useState({data: [], loading: true})
    const [showModal, setShowModel] = useState({show: false, restaurant: null})
    const [queryParam, setQueryParam] = useState({query: ""})
    const { query } = queryParam
    const updateInput = e => setQueryParam({ ...query, [e.target.name]: e.target.value });

    const [restaurantObj, setRestaurantObj] = useState({documenuId: null, tables: null, password: null})
    const updateRestaurantObj = e => setRestaurantObj({ ...restaurantObj, [e.target.name]: e.target.value });

    const queryRestaurant = async (query) => {
        setRestaurants({data: [], loading: true})
        const result = await SearchRestaurant(query)
        setRestaurants({loading: false, data: result})
        console.log(result)
    }

    const modalFunction = (restaurant) => {
        setShowModel({show: !showModal.show, restaurant: restaurant})
    }

    const submitRestaurantSelection = async (restaurant) => {
        if (!restaurantObj.tables) handleError(new Error("Please enter a value for number of tables."))
        const token = localStorage.getItem('token')
        //setRestaurantObj({documenuId: restaurant.restaurant_id, tables: restaurantObj.tables, password: token})
        createRestaurant({documenuId: restaurant.restaurant_id, tables: restaurantObj.tables, password: token})
    }

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main className="Restaurant-Search-Main">
                <SectionContainer>
                    <SearchBar>
                        <TextInput className="Restaurant-Search-Bar" type="text" placeholder={"name or phonenumber"} name="query" onChange={updateInput}></TextInput>
                        <PrimaryButton className="Primary-Button Search-Bar-Button" onClick={() => queryRestaurant(query)}>Search</PrimaryButton>
                    </SearchBar>
                    <div>
                        {!restaurants.loading && Array.isArray(restaurants.data) && restaurants.data.length >= 1 && restaurants.data.map((restaurant, index) => 
                        <RestaurantSelectionButton key={restaurant.restaurant_id} restaurant_id={restaurant.restaurant_id} onClick={() => modalFunction(restaurant)}>
                            <p>{restaurant.restaurant_name}</p>
                            <p>{restaurant.restaurant_website}</p>
                        </RestaurantSelectionButton>
                        )}
                    </div>
                </SectionContainer>
            </main>

            <Modal show={showModal.show} onHide={modalFunction}>
                <Modal.Header closeButton>
                <Modal.Title>{showModal.restaurant && showModal.restaurant.restaurant_name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Enter the number of tables at {showModal.restaurant && showModal.restaurant.restaurant_name}:
                    <TextInput className="Modal-Table-Input" type="text" placeholder={"number of tables"} name="tables" onChange={updateRestaurantObj}></TextInput>
                </Modal.Body>
                <Modal.Footer>
                <PrimaryButton variant="secondary" className="Primary-Button" onClick={modalFunction}>
                    Close
                </PrimaryButton>
                <PrimaryButton variant="primary" className="Primary-Button" onClick={() => submitRestaurantSelection(showModal.restaurant)}>
                    Create
                </PrimaryButton>
                </Modal.Footer>
            </Modal>        

            <footer>

            </footer>
        </PageContainer>

        </div>
    )
}

export default RestaurantSearch;