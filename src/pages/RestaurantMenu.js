import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import styled from "styled-components"
import queryString from 'query-string'

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading, SmallButton, PrimaryButton } from '../css/main'

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
    const [order, setOrder] = useState({restaurant: null, order: null})

    const updateOrder = e => setOrder({...order, order: {...order.order, [e.target.name]: {qty: e.target.value, pricePerQty: e.currentTarget.attributes.getNamedItem("data-price").value } }});

    const getRestaurant = async (restaurant_id) => {
        const restaurantObj = await getRestaurantByID(restaurant_id)
        setRestaurant({loading: false, data: restaurantObj})
        setOrder({restaurant: restaurantObj[0], order: null})
    }

    const loadPage = async () => {
        //ie. /restaurant/menu?id=62590177-7b89-42d2-af7a-600e1a35e943&table=1
        const restaurantQS = queryString.parse(location.search);
        console.log(restaurantQS) //{id: "62590177-7b89-42d2-af7a-600e1a35e943", table: "1"}
        getRestaurant(restaurantQS.id)
    }

    const reviewOrder = () => {
        console.log(order)
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
                    {!restaurant.loading && Array.isArray(restaurant.data) && restaurant.data[0].menu.map((item, index) => 
                        <MenuContainer key={index}>
                            <p>{item.title}</p>
                            <p>{item.description}</p>
                            <p>{item.price}</p>
                            <SmallButton name={item.title} value={1} data-price={item.price} onClick={updateOrder}>Add to cart</SmallButton>
                        </MenuContainer>
                    )}
                    <PrimaryButton className="Primary-Button Review-Order-Button" onClick={() => reviewOrder(order)}>Review Order</PrimaryButton>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default RestaurantMenu;