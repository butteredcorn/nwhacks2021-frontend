import handleError from './error'
const axios = require("axios").default;

function isPhoneNumber(query) {
  const phoneno = /^\d{10}$/;
  if((query.value.match(phoneno))) {
        return true;
    } else {
        return false;
    }
}

export default function SearchRestaurant (query) {
    return new Promise((resolve, reject) => {
        if (!query) throw new Error("Please enter valid query.")

        let name;
        let phonenumber;

        if(isPhoneNumber(query)) {
            phonenumber = query;
        } else {
            name = query;
        }

        const options = {
            method: 'GET',
            url: 'https://documenu.p.rapidapi.com/restaurants/search/fields',
            params: {exact: 'false', restaurant_name: name, restaurant_phone: phonenumber},
            headers: {
              'x-api-key': process.env.DOCUMENU_KEY,
              'x-rapidapi-key': process.env.X_RAPID_API_KEY,
              'x-rapidapi-host': 'documenu.p.rapidapi.com'
            }
          };
            
            axios.request(options).then((result) => {
                console.log(result.data)
                resolve(result.data);
            }).catch((error) => {
                handleError(error);
        });
    })
}

