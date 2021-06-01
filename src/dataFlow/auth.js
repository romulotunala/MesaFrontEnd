import axios from 'axios';

const connection = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'content-type': 'application/json'
  }
});

export const login = async (info) => {
  return connection({
    method: 'POST',
    url: '/register',
    data: {
      email: info.email,
      password: info.password
    }
  });
};

export const register = async (info) => {
  return connection({
    method: 'POST',
    url: '/register',
    data: {
      name: info.name,
      email: info.email,
      password: info.password,
    }
  })
}

export const user = async (info) => {
  return connection({
    method: 'GET', 
    url: `/users/${info}`
  })
}
