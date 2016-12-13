const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const knex = require('./db/knex');
const app = express();
const cors = require('cors')

require('dotenv').config();

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'client')));

app.get('/chocolate', function(req,res){
  knex('chocolate').then((data)=>{
    res.json(data);
  });
});

app.get('/client/:id', function(req,res){
  knex('chocolate')
  .where('id', req.params.id).then((data)=>{
    res.json(data);
  });
});

app.post('/chocolate', function (req, res, next){
  console.log(req.body);
  knex('chocolate')
  .insert({
    id: req.params.id,
    name: req.body.name,
    type: req.body.type,
    price_lb: req.body.price_lb,
    delicious_factor: req.body.delicious_factor
  }, 'id').then((data) => {
    res.json(data[0]);
  });
});

app.delete('/chocolate/:id', function(req, res){
  knex('chocolate')
  .where
})

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
