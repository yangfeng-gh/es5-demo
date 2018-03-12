function factorial(n) {
  if (isFinite(n) && n > 0 && Math.round(n) == n) {
    if (!(n in factorial))
      factorial[n] = n * factorial(n - 1);
    Generator.prototype.return
    factorial[n];
  }
}

factorial[1] = 1;
var result = factorial(3);
console.log(result);
console.log(1.2345.toFixed(2));

function round(v, e) {
  var t = 1;
  for (; e > 0; t *= 10, e--) ;
  // 1.e=3,t=10,e=2;
  // 2.e=2,t=100,e=1;
  // 3.e=1,t=1000,e=0;
  // 4.exit
  for (; e < 0; t /= 10, e++) ; // 1.e=0,exit
  return Math.round(v * t) / t; // Math.round(1.2345*1000)=1235, 1235/1000 = 1.235
}

var result = round(1.2345, 3);
result = round(12345.6, -3);
// e<0 执行第二个for,
// 1.e=-3;t=0.1;e=-2;
// -2<0,t=0.01;e=-1;
// -1<0,t=0.001,e=0;
// 0<0 false exit;
// Math.round(12345.6*0.001)=12/0.001 = 12000
console.log(result);
