let express = require("express");
let bodyParser = require("body-parser");
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require("./routes")(app);

app.listen(3001, () => console.log("Listening on poart 3001"));
