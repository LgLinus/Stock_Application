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

async function getStockSearch(searchValue) {
  let {data} = await axios.get(`/search?searchText=${searchValue}`);
  if (data) {
    return data;
    console.log({data});
  }
  return [];
}

async function postMetaData(stocks, keyList) {
  let {data} = await axios.post('getMetaDatas', {references: keyList});
  if (data) {
    let stockMap = {};
    console.log(data);
    data.forEach(element => {
      let id = element.reference;
      stockMap[id] = {...element};
    });
    stocks.forEach(stock => {
      let id = stock.reference;
      stock.currentValue = stockMap[id].value;
    });
    return stocks;
  }
  return [];
}
export default {getFood, getStockSearch, postMetaData};
