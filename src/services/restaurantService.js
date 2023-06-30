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

const handleGetRestaurantsAdmin = (pageIndex, status) => {
  return axios.get(`${apiBaseUrl}/api/Restaurant/admin/restaurants/${pageIndex}?status=${status}`)
}

const handleGetRestaurantsFilter = (city, district, price, cuisine, service, suitability, sort, page) => {
  let url = `${apiBaseUrl}/api/Restaurant/filter?`;
  if (city) {
    url += `City=${city}&`;
  }
  if (district) {
    url += `District=${district}&`;
  }
  if (price) {
    url += `PriceRange=${price}&`;
  }
  if (cuisine) {
    url += `Cuisine=${cuisine}&`;
  }
  if (service) {
    url += `Service=${service}&`;
  }
  if (suitability) {
    url += `Suitability=${suitability}&`;
  }
  if (sort) {
    url += `Sort=${sort}&`;
  }
  if (page) {
    url += `pageIndex=${page}&`;
  }
  // Remove the trailing '&' character if no parameters were included
  if (url.endsWith("&")) {
    url = url.slice(0, -1);
  }
  return axios.get(url)
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
  handleGetRestaurantsAdmin,
  handleGetRestaurantsFilter,

};
