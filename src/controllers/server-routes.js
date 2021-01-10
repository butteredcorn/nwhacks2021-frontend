import * as axios from 'axios'
import handleError from './error'

// send this
// {
//     documenutId : string,
//     tables : number,
//     password : string
// }

// get this in response
// {name: "Momofuku Ko", tables: Array(1), menu: Array(13), generatedId: "8ba75386-e3e4-4e63-b4fb-20ef64bd8a6d"}
// generatedId: "8ba75386-e3e4-4e63-b4fb-20ef64bd8a6d"
// menu: Array(13)
// 0: {title: "Lunch", description: "served on friday, saturday and sunday. please allow at least three hours for your meal.", price: 175}
// 1: {title: "Amuse", description: "", price: 0}
// 2: {title: "Snapper Tartare", description: "jelly, shiso, green chili", price: 0}
// 3: {title: "Spanish Mackerel", description: "black sesame, watermelon", price: 0}
// 4: {title: "Steamed Trout Mousse", description: "sunchoke, kale, smoked trout consommé", price: 0}
// 5: {title: "Soft Boiled Egg", description: "potato chips, caviar, herbs", price: 0}
// 6: {title: "Sourdough", description: "radish butter", price: 0}
// 7: {title: "Farfalle", description: "aged cheddar & beef, brussel sprout, szechuan peppercorn", price: 0}
// 8: {title: "Branzino", description: "bluefoot mushroom, daikon, shishito dashi", price: 0}
// 9: {title: "Foie Gras", description: "pine nut, lychee, riesling", price: 0}
// 10: {title: "Muscovy Duck", description: "lime pickle, crème fraiche", price: 0}
// 11: {title: "Chocolate Cake", description: "mint ice cream, fernet branca", price: 0}
// 12: {title: "Coconut Lime Sorbet", description: "rum meringue, banana, shortbread", price: 0}
// length: 13
// __proto__: Array(0)
// name: "Momofuku Ko"
// tables: Array(1)
// 0:
// qr: "data:image/png;base64,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"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// __proto__: Object

const createRestaurant = async (restaurant) => {
    try {
        console.log(restaurant)
        const result = await axios.post(`https://nomno.herokuapp.com/api/restaurant/create`, restaurant)
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
        const result = await axios.get(`https://nomno.herokuapp.com/api/restaurant/${restaurant_id}`)
        console.log(result.data)
        return result.data
    } catch (err) {
        handleError(err)
    }
}

export { getRestaurantByID, createRestaurant }