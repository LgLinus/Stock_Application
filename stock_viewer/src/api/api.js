const axios = require("axios");

let baseURL = process.env.REACT_APP_API_BASEURL || "http://127.0.0.1:3001";
axios.defaults.baseURL = baseURL;

async function getFood() {
  let { data } = await axios.get("/food/getAll");
  if (data) {
    return data;
  }
  return [];
}

async function getStockSearch(searchValue) {
  let { data } = await axios.get(`/search?searchText=${searchValue}`);
  if (data) {
    return data;
  }
  return [];
}

async function postMetaData(stocks, keyList) {
  let { data } = await axios.post("getMetaDatas", { references: keyList });
  if (!data) {
    return [];
  }

  return mappedStocks(data);
}

async function deleteStock(reference) {
  await axios.delete(`stock?reference=${reference}`);
}
async function saveStock(reference) {
  await axios.post(`stocks?reference=${reference}`);
}

async function getStocks() {
  let { data } = await axios.get("stocks");
  if (!data) {
    return [];
  }
  console.log(data);
  return data;
}

function mappedStocks(stocks, data) {
  let stockMap = {};
  console.log(data);
  data.forEach(element => {
    let id = element.reference;
    stockMap[id] = { ...element };
  });
  stocks.forEach(stock => {
    let id = stock.reference;
    stock.currentValue = stockMap[id].value;
  });
  return stocks;
}
export default {
  getFood,
  deleteStock,
  getStocks,
  getStockSearch,
  postMetaData,
  saveStock
};
