const model = require('../models/food');
function init(app) {
  app.get('/food/getAll', (req, res) => {
    res.send(model.getAll());
  });
}
module.exports = init;
