var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('wtf', __dirname);
  res.sendFile('index.html', { root: __dirname });
});

module.exports = router;
