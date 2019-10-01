import axios from 'axios'

export const register = newUser => {
    return axios
        .post('users/signup', {
            FirstName: newUser.firstName,
            LastName: newUser.lastName,
            Email: newUser.email,
            Username: newUser.username,
            Password: newUser.password
        })
        .then(response => {
            console.log('Registered')
        })
}

export const login = user => {
    return axios
        .post('users/login', {
            Username: user.username,
            Password: user.password
        })
        .then(response => {
            localStorage.setItem('usertoken', response.data)
            return response.data
        })
        .catch(err => {
            console.log(err)
        })
}