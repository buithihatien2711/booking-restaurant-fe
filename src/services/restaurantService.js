import axios from 'axios'
import customConfig from '../config'

const apiBaseUrl = customConfig.api.API_BASE_URL;

console.log(apiBaseUrl)

const handleGetRestaurantApi = (filter, page) => {
    return axios.get(`${apiBaseUrl}/api/Restaurant/collection/${filter}/${page}`)
}

const handleGetRestaurantDetailApi = (id) => {
    return axios.get(`${apiBaseUrl}/api/Restaurant/${id}`)
}

const handleGetCuisinesApi = () => {
    return axios.get(`${apiBaseUrl}/api/Cuisine`)
}

const handleGetServicesApi = () => {
    return axios.get(`${apiBaseUrl}/api/Service`)
}

const handleGetCitiesApi = () => {
    return axios.get(`${apiBaseUrl}/api/Location/cities`)
}

const handleGeDistrictsApi = (id) => {
    return axios.get(`${apiBaseUrl}/api/Location/cities/${id}`)
}
export { handleGetRestaurantApi, handleGetRestaurantDetailApi, handleGetCuisinesApi, handleGetServicesApi, handleGetCitiesApi, handleGeDistrictsApi }