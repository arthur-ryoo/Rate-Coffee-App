import tokenService from './tokenService';

const BASE_URL = './api/brands/';

function create(data) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('something went wrong');
  });
}

function index() {
  return fetch(BASE_URL, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}

function getRecentlyAdded() {
  return fetch(BASE_URL + 'recent').then(res => res.json());
}

export default {
  create,
  index,
  getRecentlyAdded
};
