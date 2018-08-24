const axios = require("axois");
const cheerio = require("cheerio");

async function getStockDetails(stock) {
  let query = ``;
  let data;

  try {
    data(await axios.get(query)).data;
  } catch (exception) {
    return defaultError("errConnect");
  }
}
