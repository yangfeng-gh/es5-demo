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

var result2 = round(1.2345, 3);
console.log(result2);

var result3 = round(12345.6, -3);
// e<0 执行第二个for,
// 1.e=-3;t=0.1;e=-2;
// -2<0,t=0.01;e=-1;
// -1<0,t=0.001,e=0;
// 0<0 false exit;
// Math.round(12345.6*0.001)=12/0.001 = 12000
console.log(result3);
