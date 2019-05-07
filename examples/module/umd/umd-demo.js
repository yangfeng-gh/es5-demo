(function(root, factory) {
      if (typeof define === 'function' && define.amd) {
          //AMD
          define(['jquery'], factory);
      } else if (typeof module !== 'undefined' && module.exports) {
          //Node, CommonJS-like
          module.exports = factory(require('jquery'));
      } else {
          //Browser globals (root is window)
          root.returnExports = factory(root.jQuery);
      }
  }(this, function($) {
      //methods
      function myFunc() {};

      //exposed public method
      return myFunc;
  }));
