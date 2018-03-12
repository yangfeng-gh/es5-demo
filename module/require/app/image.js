define(function() {

  require(['image!../assets/images/1.jpg', 'image!../assets/images/2.jpg'], function (img1, img2) {
    document.body.appendChild(img1);
    document.body.appendChild(img2);
  })

});
