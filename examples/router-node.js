
var router = require('routerjs');

router.get('/', function(req, res) {

});


router.get('/products/:productId', function(req, res) {
  //req.params.productId
}).where({
    productId: [
      /\d+/
    ]
  });


router.map('POST /products').to(function(req, res) {

});


router.map('GET /about-us').to(function(req, res) {

});

router.map('GET /:username/:repository').to(function(req, res) {
  //req.params.username
  //req.params.repository
}).where({
    username: [
      /\w{5,0}/
    ],
    repository: [
      /\w+/
    ]
  });