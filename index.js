const express = require ('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const knex = require('./db/knex');


app.get('/chocolate', function(req,res){
  knex('chocolate').then((data)=>{
    res.json(data)
  });
});






const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
