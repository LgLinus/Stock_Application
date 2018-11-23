const recipes = require('../data/recipes');
function getAll() {
  console.log(recipes);
  return recipes;
}

module.exports = {getAll};
