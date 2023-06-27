import axios from "axios";
import customConfig from "../config";

const apiBaseUrl = customConfig.api.API_BASE_URL;

// console.log(apiBaseUrl)

const handleGetRestaurantApi = (filter, page) => {
  return axios.get(`${apiBaseUrl}/api/Restaurant/collection/${filter}/${page}`);
};

const handleGetRestaurantDetailApi = (id) => {
  return axios.get(`${apiBaseUrl}/api/Restaurant/${id}`);
};

const handleGetCuisinesApi = () => {
  return axios.get(`${apiBaseUrl}/api/Cuisine`);
};

const handleGetServicesApi = () => {
  return axios.get(`${apiBaseUrl}/api/Service`);
};

const handleGetSuitabilitiesApi = () => {
  return axios.get(`${apiBaseUrl}/api/Suitability`);
};

const handleGetExtraServicesApi = () => {
  return axios.get(`${apiBaseUrl}/api/ExtraService`);
};

const handleGetCitiesApi = () => {
  return axios.get(`${apiBaseUrl}/api/Location/cities`);
};

const handleGetDistrictsApi = (id) => {
  return axios.get(`${apiBaseUrl}/api/Location/cities/${id}`);
};

const handleGetWardsApi = (id) => {
  return axios.get(`${apiBaseUrl}/api/Location/districts/${id}`);
};

const handleGetRestaurantIdByUserId = (idUser) => {
  return axios.get(`${apiBaseUrl}/api/Restaurant/user/${idUser}`)
}

const handleUploadImage = (userId, typeImage, images) => {
  return axios.post(`${apiBaseUrl}/api/Image?typeImage=${typeImage}&userId=${userId}`, images, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
}

const handleAddRestaurant = (userId, restaurant) => {
  return axios.post(`${apiBaseUrl}/api/Restaurant?userId=${userId}`, restaurant)
}

export {
  handleGetRestaurantApi,
  handleGetRestaurantDetailApi,
  handleGetCuisinesApi,
  handleGetServicesApi,
  handleGetCitiesApi,
  handleGetDistrictsApi,
  handleGetRestaurantIdByUserId,
  handleGetSuitabilitiesApi,
  handleGetExtraServicesApi,
  handleGetWardsApi,
  handleUploadImage,
  handleAddRestaurant, 
  
};
