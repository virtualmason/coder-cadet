
const express = require('express');
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
// var path = require('path');

const cors = require('cors');
app.use(cors());
const dotenv = require('dotenv');
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
// parse some custom thing into a Buffer
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }))
 
// parse an HTML body into a string
app.use(bodyParser.text({ type: 'text/html' }))
app.use(express.static('public'));
// app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => { 
  console.log('mongo db connection works');
}).catch('err');

app.post('/signup',(req, res) => {
  console.log( req.body);
  res.send(req.body.username);
});
const PORT = process.env.PORT || 3001;


app.listen(PORT, function() {
  console.log(`Your app is listening on port ${PORT}`);
}
)