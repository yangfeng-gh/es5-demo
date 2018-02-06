/**
 * AMD: Asynchronous Module Definition, 异步模块定义。
 * 问题：
 * 服务端所有的模块都存放在本地硬盘，可以同步加载，等待的时间就是硬盘的读取时间。
 * 但是对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待的时间取决于网速的快慢，
 * 在网络情况不好的时候，可能要等很长时间，这时浏览器处于“假死”状态。
 *
 * 解决方案：
 * 采用“异步加载”（asynchronous）,模块的加载不影响它后面语句的运行。
 * 所有依赖这个模块的语句 ，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。
 */

// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling directory.
requirejs.config({
  //To get timely, correct error triggers in IE, force a define/shim exports check.
  // enforceDefine: true,
  baseUrl: 'lib',
  paths: {
    app: '../app',
    jquery: ['https://cdn.bootcss.com/jquery/1.8.3/jquery',
      //If the CDN location fails, load from this location
      'jquery-1.8.3'
    ],
    underscore: 'https://cdn.bootcss.com/underscore.js/0.2.0/underscore-min',
    backbone: 'https://cdn.bootcss.com/backbone.js/0.2.0/backbone-min',
    'jquery.scroll': 'https://cdn.bootcss.com/jquery.js-scrollTo/1.4.2/jquery.js.scrollTo.min'
  },
  waitSeconds: 15,
  shim: { // 加载非规范的模块
    'underscore':{
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'jquery.scroll': {
      deps: ['jquery'],
      exports: 'jQuery.fn.scroll'
    }
  }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['app/main']);
