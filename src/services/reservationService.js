import axios from "axios";
import customConfig from "../config";

const apiBaseUrl = customConfig.api.API_BASE_URL;

const handleCreateReservation = (reservation, userId, reservationId) => {
  return axios.post(
    `${apiBaseUrl}/api/Reservation?userId=${userId}&restaurantId=${reservationId}`,
    reservation
  );
};

const handleGetReservation = (restaurantId, status, date) => {
  let url = `${apiBaseUrl}/api/Reservation?`;
  if (restaurantId) {
    url += `restaurantId=${restaurantId}&`;
  }
  if (status) {
    url += `status=${status}&`;
  }
  if (date) {
    url += `date=${date}`;
  }
  // Remove the trailing '&' character if no parameters were included
  if (url.endsWith("&")) {
    url = url.slice(0, -1);
  }
  return axios.get(url);
};

const handleGetReservationDetail = (id) => {
  let url = `${apiBaseUrl}/api/Reservation/${id}`;
  return axios.get(url)
}

const handleChangeReservationStatus = (idReservation, idStatus) => {
  let url = `${apiBaseUrl}/api/Reservation/changestatus/${idReservation}?statusId=${idStatus}`
  return axios.put(url)
}

export {
  handleCreateReservation,
  handleGetReservation,
  handleGetReservationDetail,
  handleChangeReservationStatus,
};
