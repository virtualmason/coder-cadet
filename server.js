'use strict';
const corsHeaders = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};

const express     = import('express');
const bodyParser  = import('body-parser');
const fccTesting  = import('./freeCodeCamp/fcctesting.js');
const mongo = import('mongodb').MongoClient;
const app = express();
const cors= import('cors');
const routes = import('./routes');
const auth = import('./auth');
require('dotenv').config()
app.use(cors());
fccTesting(app); //For FCC testing purposes
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

mongo.connect(process.env.DATABASE,{ useNewUrlParser: true }, (err, database) => {
     var db = database.db('tahsinfcc');
  
    
    if (err) {
        console.log('Database error: ' + err);
    } else {
      console.log('Successful database connection');
      auth(app, db);
      routes(app, db);
      app.listen(process.env.PORT || 3000, () => {
        console.log("Listening on port " + process.env.PORT);
      });
      
     }});  