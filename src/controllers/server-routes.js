import * as axios from 'axios'
import handleError from './error'

// {
//     documenutId : string,
//     tables : number,
//     password : string
// }

const createRestaurant = async (restaurant) => {
    try {
        const result = await axios.post(`${process.env.REACT_APP_WEBSERVER_URL}/api/restaurant/create`, restaurant)
        console.log(result.data)
        alert("created!")
    } catch (err) {
        handleError(err)
    }
}

export { createRestaurant }