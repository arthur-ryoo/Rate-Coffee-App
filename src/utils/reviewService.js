import tokenService from './tokenService';

const BASE_URL = '../../api/reviews/';

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

function deleteReview(id) {
  return fetch(BASE_URL + id, {
    method: 'DELETE',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken()
    }
  }).then(res => res.json());
}

function editReview(id, data) {
  return fetch(BASE_URL + id, {
    method: 'PUT',
    headers: {
      'Content-type': 'Application/json',
      Authorization: 'Bearer ' + tokenService.getToken()
    },
    body: JSON.stringify(data)
  }).then(res => res.json());
}

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

export default {
  create,
  deleteReview,
  editReview,
  index
};
