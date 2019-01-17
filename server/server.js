
const express = require('express');
const app = express();
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, (err) => { 
  console.log('mongo db connection works');
}).catch('err');


app.listen(process.env.PORT, function() {
  console.log(`Your app is listening on port ${this.address().port}`);
}
)