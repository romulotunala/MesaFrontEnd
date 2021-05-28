import axios from 'axios';

const GOOGLE_KEY = 'AIzaSyD35GjVq94pugyIK0H69xL8lXMFw4NSRbI';

const connection = axios.create({
  baseURL: '/googleapis/maps/api/',
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