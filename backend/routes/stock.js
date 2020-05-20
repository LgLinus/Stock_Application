const model = require("../models/stock");
const stock_repository = require("../dao/stock_repository");
const stockService = require("../services/stockservice");
function init(app) {
  app.get("/search", async (req, res) => {
    let searchText = req.query.searchText;
    console.log("Get /search ", searchText);
    let data = await model.getStock(searchText);
    if (data.error) {
      res.status(400).json({ ...data });
      return;
    }

    res.send(data);
  });

  app.get("/getMetaData", async (req, res) => {
    let stockKey = req.query.reference;
    console.log("Getmetadata ", stockKey);
    let data = await model.getMetaData(stockKey);
    res.send(data);
  });

  app.post("/getMetaDatas", async (req, res) => {
    let stockKeys = req.body.references;
    console.log(stockKeys);
    if (!stockKeys) {
      res.send({ msg: "No keys" });
      return;
    }
    let data = await model.getMetaDatas(stockKeys);
    res.send(data);
  });

  app.delete("/stock", async (req, res) => {
    let reference = req.query.reference;
    if (!reference || reference === "") {
      res.send("No reference provided");
      return;
    }

    stockService.deleteStockByReference(reference);
    res.send("Deleted");
  });

  app.get("/stocks", async (req, res) => {
    let data = stockService.getAllStocks();
    res.send(data);
  });
  app.post("/stocks", async (req, res) => {
    let reference = req.query.reference;
    if (!reference || reference === "") {
      res.send("No reference provided");
      return;
    }

    await stockService.addStock(reference);
    res.send("ok");
  });
}
module.exports = init;
