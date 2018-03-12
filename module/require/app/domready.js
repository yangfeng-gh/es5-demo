define(function() {

  require(['domReady!'], function (doc){

    // called once the DOM is ready
    console.log(doc.getElementById('input1').value);

  });

});
