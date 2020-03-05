const BASE_URL = './api/brands/';

function create(data) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: new Headers({ 'Content-type': 'Application/json' }),
    body: JSON.stringify(data)
  }).then(res => {
    if (res.ok) return res.json();
    throw new Error('something went wrong');
  });
}

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

function getRecentlyAdded() {
  return fetch(BASE_URL + 'recent').then(res => res.json());
}

export default {
  create,
  index,
  getRecentlyAdded
};