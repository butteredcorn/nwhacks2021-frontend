import * as axios from 'axios'
import handleError from './error'
const serverUrl = process.env.REACT_APP_WEBSERVER_URL


const createRestaurant = async (restaurant) => {
    try {
        console.log(restaurant)
<<<<<<< HEAD
        const result = await axios.post(`${serverUrl}/api/restaurant/create`, restaurant)
=======
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/restaurant/create`, restaurant)
>>>>>>> 994c4a3768ca26aeb91ce4d8a54c2f59e7529f2c
        const rawData = result.data
        //const qrCodeArray = rawData.data.tables
        const newRestaurantObj = {restaurant_id: rawData.generatedId, restaurant_name: rawData.name, table_qr_codes: rawData.tables, menu: rawData.menu, }
        console.log(newRestaurantObj)
        return newRestaurantObj;
    } catch (err) {
        handleError(err)
    }
}

const getRestaurantByID = async (restaurant_id) => {
    try {
        const result = await axios.get(`${process.env.REACT_APP_WEBSERVER_URL}/api/restaurant/${restaurant_id}`)
        console.log(result.data)
        return result.data
    } catch (err) {
        handleError(err)
    }
}

// POST /api/restaurant/[restaurantId]/[tableId]/place-order
// JSON body { items }
// items is an array of {
//   title: string
//   quantity: number
//   price: number
// }
const placeOrder = async (order) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/restaurant/${order.restaurant_id}/${order.table_id}/place-order`, {items: order.items})
        console.log(result.data) //{orderId: "lJUsrQy8uKbY9Tn1iMf8"}
        return result.data
    } catch (err) {
        handleError(err)
    }
}


const getStripeCode = async (orderId) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/purchase/`, {orderId})
        console.log(result.data)
        return result.data
    } catch (err) {
        handleError(err)
    }
}


const purchaseCompleted = async (orderId) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/purchase/completed`, {orderId , isPaid : true})
    } catch (err) {
        handleError(err)
    }
}

export { getRestaurantByID, createRestaurant, placeOrder , getStripeCode , purchaseCompleted }