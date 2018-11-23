const axios = require('axios');
let baseURL = 'http://127.0.0.1:3001';
axios.defaults.baseURL = baseURL;

async function getFood() {
  let {data} = await axios.get('/food/getAll');
  if (data) {
    return data;
  }
  return [];
}

export default {getFood};
