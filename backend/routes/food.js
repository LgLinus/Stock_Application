function init(app) {
  app.get('/food/getAll'),
    async (req, res) => {
      Recipe.find({title: 'Spaghetti'}, 'title ingredients', function(
        err,
        recipes,
      ) {
        res.send(recipes);
      });
    };
}
module.exports = init;
