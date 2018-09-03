function MatchDemo(){
  var r, re;         // 声明变量。
  var s = "The rain in Spain falls mainly in the plain";
  re = /ain/i;    // 创建正则表达式模式。
  r = s.match(re);   // 尝试匹配搜索字符串。
  return(r);         // 返回第一次出现 "ain" 的地方。
}

function MatchDemo2(){
  var r, re;         // 声明变量。
  var s = "The rain in Spain falls mainly in the plain";
  re = /ain/ig;      // 创建正则表达式模式。
  r = s.match(re);   // 尝试去匹配搜索字符串。
  return(r);         // 返回的数组包含了所有 "ain" 出现的四个匹配。
}

var r = MatchDemo();
console.log(r[0]);
console.log(r.input);
console.log(r.index);
console.log(r.lastIndex);
console.log(MatchDemo2());
