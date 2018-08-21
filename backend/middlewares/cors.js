module.exports = function(app) {
  app.all("/*", function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    return next();
  });
};
