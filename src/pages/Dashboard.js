import NavBar from '../components/NavBar'
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import { getRestaurantOrders } from '../controllers/server-routes'

import { PageContainer,DashboardContainer} from '../css/main'

import styled from "styled-components"
import { useEffect, useState } from 'react'

const OrderContainer = styled.div`
display: flex;
width: 100%;
padding:50px 0;
justify-content: center;
align-items: center;
background: ${props => props.theme.header};
`

const OrderItamContainer = styled.div`
    isplay: flex;
    width: 100%;
    padding:50px 0;
    justify-content: flex-start;
`

const data = [{
    time: "2021-01-10T16:43:57.655Z",
    items: [
        {
            quantity: 1,
            title: "Today's Soup",
            price: 5
        },
        {
            price: 6,
            title: "Feijoada",
            quantity: 1
        }
    ],
    table: 1,
    isPaid: false,
    isActive: true,
    total: 12.32,
    orderId: "HZAOVXftZdaNtNSiq0k0"
}]

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
            <OrderItamContainer>
                {order.items.map(item => <OrderItem item = {item} />)}
            </OrderItamContainer>
        
       </div>
    )
}




function Dashboard({}) {


    const [orders , setOrders] = useState([])

    const loadPage = async () => {
        const query = new URLSearchParams(window.location.search);
        const restaurantId = query.get("id")
        const fetchedOrders = await getRestaurantOrders(restaurantId , localStorage.getItem('password'))
        console.log('here')

        setOrders(fetchedOrders)
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
           <DashboardContainer>
                    {orders.map((item) => 
                        <Order order={item} />
                    )}
           </DashboardContainer>
        </PageContainer>
        </div>
    )
}

export default Dashboard;