import axios from 'axios';

const GOOGLE_KEY = 'AIzaSyD35GjVq94pugyIK0H69xL8lXMFw4NSRbI';

const connection = axios.create({
  baseURL: `/maps/api/`,
  headers: {
    'content-type': 'application/json'
  }
});

export const fetchBounds = async(info) => {
  const { data } = await connection.get(`geocode/json?latlng=${info}&key=${GOOGLE_KEY}`);

  return data;
}

export const fetchPlaces = async(info) => {
  const { data } = await connection.get(
    `place/nearbysearch/json?location=${info.lat},${info.lng}&radius=${info.radius}&key=${GOOGLE_KEY}`
  );

  return data;
}

export const fetchDetailsPlaces = async(info) => {
  const { data } = await connection.get(
    `place/details/json?place_id=${info}&key=${GOOGLE_KEY}`
  );

  return data;
}
