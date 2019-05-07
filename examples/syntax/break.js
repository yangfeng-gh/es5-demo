outerloop:
  for (var i = 0; i < 10; i++) {
    console.log("in outerloop: i = " + i + "; j = " + j + "\n");
    innerloop:
      for (var j = 0; j < 10; j++) {
        if (j > 3) break;
        if (i == 2) break innerloop;
        if (i == 4) break outerloop;
        console.log("in innerloop: i =" + i + "; j =" + j + " -----------------");
      }
  }
console.log("final: i = " + i + "; j = " + j + "\n");
