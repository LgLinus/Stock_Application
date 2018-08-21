const model = require("../models/search");

module.exports = function(app) {
  app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    return next();
  });

  app.get("/", async (req, res) => {
    let data = await model.getStock(req.query.searchText);
    if (data.error) {
      res.status(400).json({ ...data });
      return;
    }

    console.log(data);
    res.send(data);
  });
};
// TODO module exports on bottom
