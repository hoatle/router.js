
router.map('/').to(function() {
  //application root

});

router.map('/about-us', function() {

});

router.map('/products/:id').to(function(id) {

});

router.map('/contacts').to(function() {

});

router.map('/:user/:repository').to(function(user, repository) {


}).where({
    user: [
      'me',
      /\w{5,}/
    ],
    repository: [
      /\w+/
    ]
  });