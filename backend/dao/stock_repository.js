var fs = require("fs");

const stockFile = "./data/stocks.json";

function getStocks() {
  let data = getStockData(stockFile);
  console.log(data);
  return data;
}

function existsByReference(refrence) {
  let stocks = getStockData(stockFile);
  console.log("exists", stocks);
  return !!stocks[refrence];
}

// @param stock Stock
function addStock(stock) {
  let stocks = getStockData(stockFile);

  if (!stocks[stock.reference]) {
    console.log("add stock ", stock.reference);
    stocks[stock.reference] = stock;
  }

  writeToFile(stockFile, stocks);
}

function deleteStockByReference(reference) {
  let stocks = getStockData(stockFile);
  if (!stocks[reference]) {
    console.log("Stock %s doesn't exist. Can't delete", reference);
  }

  delete stocks[reference];
  writeToFile(stockFile, stocks);
}

function getStockData(path) {
  let data = {};
  try {
    data = fs.readFileSync(path, "utf8");
    data = JSON.parse(data);
  } catch (err) {
    console.log("Create", path);
    writeToFile(path, {});
  }
  return data;
}

function writeToFile(path, data) {
  fs.writeFileSync(path, JSON.stringify(data));
}

module.exports = {
  getStocks,
  addStock,
  deleteStockByReference,
  existsByReference
};
