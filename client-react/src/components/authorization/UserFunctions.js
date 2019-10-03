import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/signup', {
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            username: user.username,
            password: user.password
        })
        .then(response => {
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}
