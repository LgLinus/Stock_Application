const model = require("../models/search");

function init(app) {
  app.get("/", async (req, res) => {
    let data = await model.getStock(req.query.searchText);
    if (data.error) {
      res.status(400).json({ ...data });
      return;
    }

    console.log(data);
    res.send(data);
  });
}
module.exports = init;
