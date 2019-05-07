define(function() {
  require(['text!../assets/txt/review.txt'], function(review) {
    console.log('require plugin text: ' + review);
  })
});
