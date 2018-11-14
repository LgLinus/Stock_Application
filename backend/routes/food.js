function init(app) {
  app.get('/food/getAll', async (req, res) => {
    const foodData = [
      {name: 'Spaghetti & Köttfärsås'},
      {name: 'Tacos'},
      {name: 'Kyckling med curry och ris'},
    ];
    res.send(foodData);
  });
}
module.exports = init;
