const axios = require("axios");
const cheerio = require("cheerio");
const Stock = require("./stock");

async function getStock(searchText) {
  let query = `http://www.avanza.se/ab/sok/inline?query=${searchText}&_=1534268201806`;
  let data;
  try {
    data = (await axios.get(query)).data;
  } catch (exception) {
    return defaultError("errconnect");
  }
  let $ = cheerio.load(data);
  let mainClasses = $(".srchResLink");
  let latestValues = $(".MText");
  // Build up stock objects which will be returned to Frontend
  let stocks = generateStocks(mainClasses, latestValues).filter(
    ({ title, currency, value, ref }) => title && currency && value && ref
  );
  return stocks;
}

let generateStocks = (mainClasses, latestValues) => {
  let stocks = Object.keys(mainClasses).map(key => {
    let latestValue = latestValues[key];
    let object = mainClasses[key];
    return new Stock(object, latestValue);
  });
  return stocks;
};

let defaultError = msg => {
  return {
    error: 1,
    msg
  };
};

module.exports = {
  getStock
};
