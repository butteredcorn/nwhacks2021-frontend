import handleError from './error'
const axios = require("axios").default;

function isPhoneNumber(query) {
  const phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const alphabet = /[a-zA-Z]/g;
  if (alphabet.test(query)) {
      return false;
  }

  if((query.value.match(phoneno))) {
        return true;
    } else {
        return false;
    }
}

export default function SearchRestaurant (query) {
    return new Promise((resolve, reject) => {
        try {
            if (!query) throw new Error("Please enter valid query.")

            let name;
            let phonenumber;
    
            if(isPhoneNumber(query)) {
                phonenumber = query;
                console.log(`The query detected as phonenumber. It was ${query}.`)
            } else {
                name = query;
                console.log(`The query detected as a name. It was ${query}.`)
            }
    
            console.log(process.env.REACT_APP_DOCUMENU_KEY)
            console.log(process.env.REACT_APP_X_RAPID_API_KEY)
    
    
            const options = {
                method: 'GET',
                url: 'https://documenu.p.rapidapi.com/restaurants/search/fields',
                params: {exact: 'false', restaurant_name: name, restaurant_phone: phonenumber},
                headers: {
                  'x-api-key': process.env.REACT_APP_DOCUMENU_KEY,
                  'x-rapidapi-key': process.env.REACT_APP_X_RAPID_API_KEY,
                  'x-rapidapi-host': 'documenu.p.rapidapi.com'
                }
              };
                
                axios.request(options).then((result) => {

                    // {12 items
                    //     "restaurant_name":"Pizza Hut"
                    //     "restaurant_phone":"(706) 235-4746"
                    //     "restaurant_website":"http://www.pizzahut.com"
                    //     "hours":""
                    //     "price_range":"$"
                    //     "price_range_num":1
                    //     "restaurant_id":3426038185180615
                    //     "cuisines":[...]1 item
                    //     "address":{...}5 items
                    //     "geo":{...}2 items
                    //     "menus":[0 items
                    //     ]
                    //     "last_updated":"2020-12-28T23:08:39.691Z"
                    //     }

                    const rawData = result.data
                    const restaurantArray = rawData.data

                    if (restaurantArray.length == 0) {
                        //no restaurants found
                        const queryType = phonenumber ? "phone number" : "name"
                        handleError(new Error(`No restaurant found with that ${queryType}.`))
                    } else if (restaurantArray.length > 1) {
                        const uniqueRestaurants = restaurantArray.filter((v,i,a)=>a.findIndex(t=>(t.restaurant_name === v.restaurant_name && t.restaurant_website === v.restaurant_website))===i)
                        //remove restaurants with duplicate name and website addresses (franchises)
                        console.log("multiple matches detected.")
                        resolve(uniqueRestaurants);
                    } else {
                        //only one match
                        resolve(restaurantArray)
                    }
                }).catch((error) => {
                    handleError(error);
            });
        } catch (err) {
            handleError(err)
        }
    })
}

