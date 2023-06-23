import axios from "axios";
import customConfig from "../config";

const apiBaseUrl = customConfig.api.API_BASE_URL;

const handleLoginApi = (userPhone, userPassword, userRole) => {
  const user = {
    phone: userPhone,
    password: userPassword,
  };

  return axios.post(`${apiBaseUrl}/api/Auth/login?role=${userRole}`, user);
};

const handleRegisterApi = (user) => {
  return axios.post(`${apiBaseUrl}/api/Auth/register`, user);
}

export { handleLoginApi, handleRegisterApi };
