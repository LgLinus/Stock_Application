const model = require("../models/stock");

function init(app) {
  app.get("/search", async (req, res) => {
    let data = await model.getStock(req.query.searchText);
    if (data.error) {
      res.status(400).json({ ...data });
      return;
    }

    res.send(data);
  });

  app.get("/getMetaData", async (req, res) => {
    let stockKey = req.query.key;
    let data = await model.getMetaData(stockKey);
    res.send(data);
  });

  app.post("/getMetaDatas", async (req, res) => {
    let stockKeys = req.body.keys;
    if (!stockKeys) {
      res.send({ msg: "No keys" });
      return;
    }
    let data = await model.getMetaDatas(stockKeys);
    res.send(data);
  });
}
module.exports = init;
