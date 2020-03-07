const BASE_URL = './api/details/';

function index() {
  return fetch(BASE_URL).then(res => res.json());
}

export default {
  index
};
