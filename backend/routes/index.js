var fs = require('fs');

module.exports = function(app) {
  require('../middlewares/cors')(app);
  fs.readdirSync(__dirname).forEach(function(file) {
    if (file == 'index.js' || !file.endsWith('.js')) return;
    let name = file.substr(0, file.indexOf('.'));
    console.log(name);
    require('./' + name)(app);
  });
};
