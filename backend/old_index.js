const alpha = require("alphavantage")({ key: process.env.alphavantage_key });
const data_key = "Time Series (1min)";
const headers_to_fine = {
  "1. open": "curr",
  "2. high": "high",
  "3. low": "low"
};
const stocks = ["MSFT", "NETI-B"];

const axios = require("axios");
const apikey = process.env.alphavantage_key;

let stock = stocks[0];
axios
  .get(
    `http://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${stock}&interval=5min&apikey=${apikey}`
  )
  .then(function({ data }) {
    console.log(data);
  });

let stockctr = 0;
//run();
async function run() {
  let msg = "";

  for (let stock of stocks) {
    msg += await getStock(stock);
  }

  console.log(msg);
}

async function getStock(header) {
  stockctr++;
  console.log("YO");
  let data = await alpha.data.intraday(header);
  let key = Object.keys(data[data_key])[0];
  let stock_data = data[data_key][key];

  // Delete unused headers
  delete stock_data["4. close"];
  delete stock_data["5. volume"];

  let data_arr = Object.keys(stock_data).map(key => {
    return headers_to_fine[key] + ":" + stock_data[key];
  });

  let print = data_arr.join("	");
  print = header + ":	" + print;

  if (stocks.length !== stockctr) {
    print += " || ";
  }
  return print;
}
