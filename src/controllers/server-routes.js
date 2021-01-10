import * as axios from 'axios'
import handleError from './error'
const serverUrl = process.env.REACT_APP_WEBSERVER_URL


const createRestaurant = async (restaurant) => {
    try {
        console.log(restaurant)
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/restaurant/create`, restaurant)
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
        const result = await axios.get(`${serverUrl}/api/restaurant/${restaurant_id}`)
        console.log(result.data)
        return result.data
    } catch (err) {
        handleError(err)
    }
}

const placeOrder = async (order) => {
    try {
        const result = await axios.post(`${serverUrl}/api/restaurant/${order.restaurant_id}/${order.table_id}/place-order`, {items: order.items})
        console.log(result.data) //{orderId: "lJUsrQy8uKbY9Tn1iMf8"}
        return result.data
    } catch (err) {
        handleError(err)
    }
}


const getStripeCode = async (orderId) => {
    try {
        const result = await axios.post(`${serverUrl}/api/purchase/`, {orderId})
        console.log(result.data)
        return result.data
    } catch (err) {
        handleError(err)
    }
}


const purchaseCompleted = async (orderId) => {
    try {
        const result = await axios.post(`${serverUrl}/api/purchase/completed`, {orderId , isPaid : true})
    } catch (err) {
        handleError(err)
    }
}

const getRestaurantOrders = async (restaurantId , password) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/restaurant/${restaurantId}/orders`, {password})
        return result.data
    } catch (err) {
        handleError(err)
    }
}

export { getRestaurantByID, createRestaurant, placeOrder , getStripeCode , purchaseCompleted , getRestaurantOrders }