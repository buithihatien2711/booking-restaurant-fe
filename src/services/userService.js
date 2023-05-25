import axios from 'axios'

const handleLoginApi = (userPhone, userPassword) => {
    return axios.post('https://localhost:7154/api/Auth/login', {phone : userPhone, password : userPassword})
}

export { handleLoginApi }