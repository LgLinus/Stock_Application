var express = require("express"),
  app = express();
require("./routes")(app);
app.listen(3001, () => console.log("Listening on poart 3001"));
