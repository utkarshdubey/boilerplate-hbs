const express = require('express');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Method override middleware
app.use(methodOverride('_method'));

// Index Route
app.get('/', (req, res) => {
  const title = 'Welcome';
  res.render('index', {
    title: title
  });
});

// More Routes Below 🙃


// Server Setup here :}
const port = process.env.PORT || 5000;

app.listen(port, () =>{
  console.log(`Server started on port ${port}`);
});




/* DATABASE CONNECTION IF ANY, PLEASE USE THE FOLLOWING CODE*/
// // DB Config
// const db = require('./config/database');


// // Map global promise - get rid of warning
// mongoose.Promise = global.Promise;
// // Connect to mongoose
// mongoose.connect(db.mongoURI, {
//   useNewUrlParser: true
// })
//   .then(() => console.log('MongoDB Connected...'))
//   .catch(err => console.log(err));