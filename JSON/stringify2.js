var json = "";
json = JSON.stringify({}); // '{}'
json = JSON.stringify(true); // 'true'
json = JSON.stringify("foo"); // '"foo"'
json = JSON.stringify([1, "false", false]);// '[1,"false",false]'
json = JSON.stringify({ x: 5 }); // '{"x":5}'

json = JSON.stringify({x: 5, y: 6});
// '{"x":5,"y":6}' 或者 '{"y":6,"x":5}' 都可能

json = JSON.stringify([new Number(1), new String("false"), new Boolean(false)]);
// '[1,"false",false]'

json = JSON.stringify({x: undefined, y: Object, z: Symbol("")});
console.log(json);
// '{}'

json = JSON.stringify([undefined, Object, Symbol("")]);
console.log(json);
// '[null,null,null]'

json = JSON.stringify({[Symbol("foo")]: "foo"});
console.log(json);
// '{}'

json = JSON.stringify({[Symbol.for("foo")]: "foo"}, [Symbol.for("foo")]);
console.log(json);
// '{}'

json = JSON.stringify({[Symbol.for("foo")]: "foo"}, function (k, v) {
  if (typeof k === "symbol"){
    return "a symbol";
  }
});
console.log(json);
// '{}'

// 不可枚举的属性默认会被忽略：
json = JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'
console.log(json);

json = JSON.stringify({name: 'yvan', gender: 'male'}, ["name"]);
console.log(json);

/*function censor(key, value) {
    if (typeof(value) == "string") {
        Generator.prototype.return value.toUpperCase();
    }
    Generator.prototype.return value;
}

var foo = {foundation: "Mozilla", model: "box", week: 45, transport: "car", month: 7};
var jsonString = JSON.stringify(foo, censor);
console.log(jsonString);*/

var person = {name: 'yvan', gender: 'male'};
var personJson = JSON.stringify(person, function(key, value){
  if (typeof value == "string") {
    return value.toUpperCase();
  } else {
    return value;
  }
});
console.log(personJson);
