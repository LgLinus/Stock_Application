const axios = require("axios");
const cheerio = require("cheerio");
const Stock = require("./stock");

/**
 * Returns a list of stock objects from avanza
 * @param {searchText} searchText
 */
async function getStock(searchText) {
  const query = `http://www.avanza.se/ab/sok/inline?query=${searchText}&_=1534268201806`;
  let data;
  let $;
  try {
    data = (await axios.get(query)).data;
    $ = cheerio.load(data);
  } catch (exception) {
    return defaultError("errconnect");
  }

  const mainClasses = $(".srchResLink");
  const latestValues = $(".MText");

  let stocks = generateStocks(mainClasses, latestValues).filter(
    ({ title, currency, value, ref }) => title && currency && value && ref
  );
  return stocks;
}

let generateStocks = (mainClasses, latestValues) => {
  const stocks = Object.keys(mainClasses).map(key => {
    const latestValue = latestValues[key];
    const object = mainClasses[key];
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
