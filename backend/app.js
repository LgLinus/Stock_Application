let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

require('./routes')(app);

app.listen(3001, () => console.log('Listening on poart 3001'));
