let express = require('express');
let bodyParser = require('body-parser');
let app = express();
let cors = require('cors');
require('./models/recipes');
const mongoose = require('mongoose'),
  Recipe = mongoose.model('Recipe');

var mongoDB = 'mongodb://127.0.0.1/smartapp';
mongoose.connect(
  mongoDB,
  {useNewUrlPaser: true},
);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

require('./routes')(app);

app.listen(3001, () => console.log('Listening on poart 3001'));

//let recipe1 = new Recipe({title: 'Spaghetti', ingredients: ['1 ing', '2 ing']});
