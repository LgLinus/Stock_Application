const axios = require("axios");
const cheerio = require("cheerio");
const Stock = require("./stockClass");

/**
 * Returns a list of stock objects from avanza
 * @param {string} searchText
 */
async function getStock(searchText) {
  const query = `http://www.avanza.se/ab/sok/inline?query=${searchText}`; //&_=1534268201806`;
  let data;
  let $;
  try {
    data = (await axios.get(query)).data;
    console.log("HMM");
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

/**
 * Returns metadata for one stock based on unique key
 * @param {string} key
 */
async function getMetaData(key) {
  return (await getStock(key)).filter(obj => obj.ref === key)[0];
}

/**
 *  Returns a list of stocks based on array of unique keys
 * @param {stringArray} keys
 */
async function getMetaDatas(keys) {
  let stocks = [];
  for (const key of keys) {
    let stock = await getMetaData(key);
    if (stock) {
      stocks.push(stock);
    }
  }
  return stocks;
}

// Internal

// Generate stocks based on the HTML classes
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
  getStock,
  getMetaData,
  getMetaDatas
};
