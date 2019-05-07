var oldArr = [{first_name: "Colin", last_name: "Toh"}, {first_name: "Addy", last_name: "Osmani"}, {
  first_name: "Yehuda",
  last_name: "Katz"
}];

function getNewArr() {

  var newArr = [];

  for (var i = 0, l = oldArr.length; i < l; i++) {
    var item = oldArr[i];
    item.full_name = [item.first_name, item.last_name].join(" ");
    newArr[i] = item;
  }

  return newArr;
}

console.log(getNewArr());


function getNewArr2() {

  return oldArr.map(function (item, index) {
    item.full_name = [item.first_name, item.last_name].join(" ");
    return item;
  });

}

console.log(getNewArr2());
