import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import styled from "styled-components"
import queryString from 'query-string'

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading, SmallButton } from '../css/main'

import { getRestaurantByID } from '../controllers/server-routes'

const MenuContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
`


function RestaurantMenu({}) {
    const location = useLocation()
    const [restaurant, setRestaurant] = useState({loading: true, data: []})

    const getRestaurant = async (restaurant_id) => {
        const restaurantObj = await getRestaurantByID(restaurant_id)
        setRestaurant({loading: false, data: restaurantObj})
    }

    const loadPage = async () => {
        //ie. /restaurant/menu?id=62590177-7b89-42d2-af7a-600e1a35e943&table=1
        const restaurantQS = queryString.parse(location.search);
        console.log(restaurantQS) //{id: "62590177-7b89-42d2-af7a-600e1a35e943", table: "1"}
        getRestaurant(restaurantQS.id)
    }

    useEffect(() => {
        loadPage()
    },[])

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    {restaurant.loading ? <MainHeading>Loading Menu</MainHeading> : <MainHeading>{restaurant.data[0].name}</MainHeading>}
                    <SubHeading>Menu</SubHeading>
                    {!restaurant.loading && restaurant.data[0].menu.map((item, index) => 
                        <MenuContainer key={index}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <SmallButton onClick={() => alert('added to cart!')}>Add to cart</SmallButton>
                        </MenuContainer>
                    )}
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default RestaurantMenu;