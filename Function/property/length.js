console.log(Function.length); /* 1 */

console.log((function()    {}).length); /* 0 */
console.log((function(a)   {}).length); /* 1 */
console.log((function(a, b){}).length); /* 2 etc. */

console.log((function(...args) {}).length);
// 0, rest parameter is not counted

console.log((function(a, b, c = 1, d , e = 2, f, g) {}).length);
// 2, only parameters before the first one with a default value is counted
