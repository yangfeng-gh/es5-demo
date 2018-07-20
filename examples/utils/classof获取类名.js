function classof(o) {
if (o === null) return "Null";
if (o === undefined) return "Undefined";
return Object.prototype.toString.call(o).slice(8, -1);
}

classof(new Date()); //"Date"
classof('yvan'); //"String"
classof(true); //"Boolean"
classof(/\w/); //"RegExp"
classof([]); //"Array"
