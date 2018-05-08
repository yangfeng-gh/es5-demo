function factorial(n) {
  if (isFinite(n) && n > 0 && Math.round(n) == n) {
    if (!(n in factorial))
      factorial[n] = n * factorial(n - 1);
    return factorial[n];
  }
}
factorial[1] = 1;
var result = factorial(3);
console.log(result);
console.log(factorial);

