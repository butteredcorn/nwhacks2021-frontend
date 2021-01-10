import handleError from './error'

const login = async (email, password) => {
    if (email == "" || password == "") {
        handleError(new Error("Please enter valid input fields."))
    } else {
        console.log({email, password})
        localStorage.setItem('token', `<fake token>`)
    }
}

export {login}