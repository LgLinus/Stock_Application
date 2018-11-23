const mongoose = require('mongoose'),
  Recipe = mongoose.model('Recipe');

function init(app) {
  app.get('/food/getAll'),
    async (req, res) => {
      res.send('TEST');
      Recipe.find({title: 'Spaghetti'}, 'title ingredients', function(
        err,
        recipes,
      ) {
        res.send(recipes);
      });
    };

  app.post('/food/recipe'),
    async (req, res) => {
      let recipe = req.body;
      console.log(recipe);
      let newRecipe = new Recipe(recipe);
      newRecipe.save(function(err) {
        res.send('SAVED', recipe);
      });
    };
}
module.exports = init;
