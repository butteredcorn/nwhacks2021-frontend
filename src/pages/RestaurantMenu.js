import React, { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom'
import styled from "styled-components"
import queryString from 'query-string'
import Modal from "react-bootstrap/Modal";

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
    const [showModal, setShowModel] = useState({show: false, order: null})

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

    const modalFunction = (order) => {
        setShowModel({show: !showModal.show, order: order})
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
                    <PrimaryButton className="Primary-Button Review-Order-Button" onClick={() => modalFunction(order)}>Review Order</PrimaryButton>
                </SectionContainer>
            </main>

            <Modal show={showModal.show} onHide={modalFunction}>
                <Modal.Header closeButton>
                <Modal.Title>Review Order</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {showModal.order && showModal.order.order && Object.keys(showModal.order.order).map((item, index) => 
                        <div key={item}>
                            <p>{item}</p>
                            <p>Qty: {showModal.order.order[item].qty}</p>
                            <p>Price: ${((showModal.order.order[item].qty * showModal.order.order[item].pricePerQty)*100/100).toFixed(2)}</p>
                        </div>
                    )}
                </Modal.Body>
                <Modal.Footer>
                <PrimaryButton variant="secondary" className="Primary-Button" onClick={modalFunction}>
                    Close
                </PrimaryButton>
                <PrimaryButton variant="primary" className="Primary-Button" onClick={() => alert('submitted!')}>
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

export default RestaurantMenu;