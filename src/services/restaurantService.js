import axios from 'axios'

const handleGetRestaurantApi = (filter) => {
    return axios.get(`https://localhost:7154/api/Restaurant/collection/${filter}`)
}

export { handleGetRestaurantApi }