import React, { useState, useEffect } from 'react';
import {Redirect, useLocation} from 'react-router-dom'
import {getStripeCode } from '../controllers/server-routes'
import { loadStripe } from "@stripe/stripe-js"
import styled from "styled-components"
import NavBar from '../components/NavBar'
import { PageContainer, SectionContainer, MainHeading, SubHeading , PrimaryButton } from '../css/main'
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE);


function Payment(props) {

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

    const handlePayment = async (e) => {
        e.preventDefault()
        if(order.orderId){
            const stripeCode = await getStripeCode(order.orderId)
            const stripe = await stripePromise
            const result = await stripe.redirectToCheckout({
                sessionId: stripeCode.id,
            });

            if (result.error) {
                alert('unsuccessful transaction')    
            }

        }
    }



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
                    <PrimaryButton variant="primary" className="Primary-Button" onClick={handlePayment}>
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