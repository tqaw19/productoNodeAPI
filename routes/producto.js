var express = require('express');
const controller = require('../controller/productoController');
var router = express.Router();

/* GET productos . */
router.get('/', function(req, res, next) {
  controller.show(req, res);
});

router.get('/detail/:id', function(req, res, next) {
  controller.detail(req, res);
});

router.post('/', function(req, res, next) {
  res.send('enviando POST a productos');
});

router.put('/', function(req, res, next) {
  res.send('enviando PUT a productos');
});

router.delete('/', function(req, res, next) {
  res.send('enviando DELETE a productos');
});

module.exports = router;