import axios from 'axios'

const handleGetRestaurantApi = (filter) => {
    return axios.get(`https://localhost:7154/api/Restaurant/collection/${filter}`)
}

const handleGetRestaurantDetailApi = (id) => {
    return axios.get(`https://localhost:7154/api/Restaurant/${id}`)
}

export { handleGetRestaurantApi, handleGetRestaurantDetailApi }