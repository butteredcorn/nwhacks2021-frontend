import React, { useState, useEffect } from 'react';
import {Redirect, useLocation} from 'react-router-dom'


import styled from "styled-components"

import NavBar from '../components/NavBar'

import { PageContainer, SectionContainer, MainHeading, SubHeading } from '../css/main'

function Payment({}) {
    const location = useLocation();
    const [orderID, setOrderID] = useState(null)

    useEffect(() => {
        console.log(location.state)
        setOrderID(location.state.orderId)
    },[])

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
            <main>
                <SectionContainer>
                    <MainHeading>Payment Page!</MainHeading>
                    <SubHeading>Stripe!</SubHeading>
                    <p>Order ID: {orderID}</p>
                </SectionContainer>
            </main>
            <footer>

            </footer>
        </PageContainer>
        </div>
    )
}

export default Payment;