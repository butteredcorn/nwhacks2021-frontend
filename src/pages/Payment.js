import React, { useState, useEffect } from 'react';
import {Redirect, useLocation} from 'react-router-dom'


import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading , PrimaryButton } from '../css/main'

function Payment({}) {

    const reducer = (accumulator, currentValue) => (accumulator.price * accumulator.quantity) + (currentValue.price * currentValue.quantity);


    const location = useLocation();
    const [order, setOrder] = useState(null)
    const [sum , setSum] = useState(0)

    useEffect(() => {
       if(location.state){
        setOrder(location.state)
        const itemsSum = (location.state.items.reduce(reducer)).price
        console.log(itemsSum)
        setSum(itemsSum)
       }
    },[location.state])



    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <MainHeading>Total : ${sum}</MainHeading>
                    <SubHeading>Stripe!</SubHeading>
                    <p>Order ID: {order && order.orderId}</p>
                    <PrimaryButton variant="primary" className="Primary-Button" >
                     Checkout
                    </PrimaryButton>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default Payment;