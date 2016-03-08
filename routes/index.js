var express = require('express');
var router = express.Router();
var knex = require('../db/knex.js')

var Alerts = function(){
  return knex('alerts')
}


/* GET home page. */
router.get('/', function(req, res, next) {
  Alerts().select().then(function(payload){
    res.json(payload)
  })
});

router.post('/', function(req, res, next) {
  Alerts().insert(req.body).then(function(xxx){
  })
});


module.exports = router;
