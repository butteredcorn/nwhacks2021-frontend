
import styled from "styled-components"
import { useEffect, useState } from 'react'

import NavBar from '../components/NavBar'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { getRestaurantOrders } from '../controllers/server-routes'

import { PageContainer, SectionContainer, MainHeading, SubHeading, PrimaryButton, Text } from '../css/main'

const OrderContainer = styled.div`
display: flex;
flex-direction: column;
width: 100%;
justify-content: center;
align-items: center;
background: ${props => props.theme.backgroundColour};
`

const OrderItimContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-bottom: 1rem;
`

//  eachOrder = [{
//     time: "2021-01-10T16:43:57.655Z",
//     items: [
//         {
//             quantity: 1,
//             title: "Today's Soup",
//             price: 5
//         },
//         {
//             price: 6,
//             title: "Feijoada",
//             quantity: 1
//         }
//     ],
//     table: 1,
//     isPaid: false,
//     isActive: true,
//     total: 12.32,
//     orderId: "HZAOVXftZdaNtNSiq0k0"
// }]

const OrderItem = ({item}) => {
    return (
        <div key={item}>
            <p>{item.title}</p>
            <p>Qty: {item.quantity}</p>
        </div>
    )
}

const Order = ({order}) => {
    return (
       <div>
            <div>
                <p>Table : {order.table}</p>
                <p>Total : {order.total}</p>
                <p>{order.isPaid && 'Paid For'}</p>
            </div>
            <OrderItimContainer>
                {order.items.map(item => <OrderItem item = {item} />)}
            </OrderItimContainer>
        
       </div>
    )
}




function Dashboard({}) {
    const location = useLocation()

    const [orders , setOrders] = useState({loading: true, data: []})

    const loadPage = async () => {
        const restaurantQS = queryString.parse(location.search);
        const fetchedOrders = await getRestaurantOrders(restaurantQS.id, localStorage.getItem('token'))
        setOrders({loading: false, data: fetchedOrders})
        console.log(fetchedOrders)
    }

    useEffect(() => {
        loadPage()
    } , [])

    return (
        <div>
            <header>
                <NavBar/>
            </header>
        
        <PageContainer>
           <SectionContainer className="Dashboard-Container">
                {!orders.loading && Array.isArray(orders.data) && orders.data.map((order, index) => 
                    <OrderContainer key={order.orderId}>
                        <div className="Order-Header Dashboard-OrderItem-Container">
                            <Text>Order ID: {order.orderId}</Text>
                            <Text>Table Number: {order.table}</Text>
                        </div>
                        {Array.isArray(order.items) && order.items.map((orderItem, index) => 
                            <OrderItimContainer className="Dashboard-OrderItem-Container">
                                <Text>Title: {orderItem.title}</Text>
                                <Text>Quantity: {orderItem.quantity}</Text>
                            </OrderItimContainer>
                        )}
                    </OrderContainer>
                )}
           </SectionContainer>
        </PageContainer>
        </div>
    )
}

export default Dashboard;