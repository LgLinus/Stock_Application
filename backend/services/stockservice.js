const stock_repository = require("../dao/stock_repository");
const model = require("../models/stock");

function deleteStockByReference(reference) {
  stock_repository.deleteStockByReference(reference);
}

function getAllStocks() {
  let stocks = stock_repository.getStocks();
  let arrayStocks = [];
  for (stock in stocks) {
    arrayStocks.push(stocks[stock]);
  }

  return arrayStocks.sort((a, b) => a.title > b.title);
}

async function addStock(reference) {
  if (stock_repository.existsByReference(reference)) {
    console.log("Stock already exists ", reference);
    return -1;
  }

  let stock = await model.getMetaData(reference);

  if (stock == null) {
    console.log("Stock not found ", reference);
    return -1;
  }
  console.log("save stock ", stock);
  stock_repository.addStock(stock);
  return 1;
}

module.exports = {
  getAllStocks,
  addStock,
  deleteStockByReference
};
