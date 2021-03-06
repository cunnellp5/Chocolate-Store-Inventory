const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const knex = require('./db/knex');
const app = express();
const cors = require('cors');

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

function validate(coco){
  return typeof coco.name == 'string' &&
  coco.name.trim() != '' &&
  typeof coco.type == 'string' &&
  coco.type.trim() != '' &&
  typeof coco.price_lb != 'undefined' &&
  !isNaN(coco.price_lb) &&
  typeof coco.delicious_factor == 'string' &&
  coco.delicious_factor.trim() != ''
}

app.post('/chocolate', function (req, res, next){
  if (validate(req.body)) {
  knex('chocolate')
  .insert({
    name: req.body.name,
    type: req.body.type,
    price_lb: req.body.price_lb,
    delicious_factor: req.body.delicious_factor
  }, 'id').then((data) => {
    res.json(data[0]);
  });
} else {
  res.send("yeah error!")
}
});

app.put('/client/show/:id', function (req, res){
  if (validate(req.body)) {
  knex('chocolate')
  .where('id', req.params.id)
  .update({
    name: req.body.name,
    type: req.body.type,
    price_lb: req.body.price_lb,
    delicious_factor: req.body.delicious_factor
  }).then((data) => {
    res.json(data);
  });
} else {
  console.log("help");
  // res.status(400)
  res.json({
    message: "nooo"
  })
}
});

app.delete('/chocolate/:id', function(req, res){
  knex('chocolate')
  .where('id', req.params.id)
  .del()
  .then((data)=>{
    res.json(data)
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () =>{
  console.log(`Listening on ${port}`);
});
