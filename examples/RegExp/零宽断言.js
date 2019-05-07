//获取匹配
var reg = /industr(y|ies)/;
var str = "industries";
var result = str.match(reg);
if (result != null) {
console.log(result[0]); //industries
console.log(result[1]);  //ies
}
//非获取匹配
var reg2 = /industr(?:y|ies)/;
var str2 = "industries";
var result2 = str2.match(reg2);
if (result2 != null) {
console.log(result2[0]); //industries
console.log(result2[1]); //undefined
}

//正向肯定预查，零宽度正预测先行断言
var reg3 = /Windows(?=95|98|NT|2000)/;
var str3 = "Windows2000";
var result3 = str3.match(reg3);
if (result3 != null) {
console.log(result3[0]); //Windows
console.log(result3[1]); //undefined
}

//正向否定预查，零宽度负预测先行断言
var reg4 = /Windows(?!95|98|NT|2000)/;
var str4 = "Windows2001windows2002";
var result4 = str4.match(reg4);
if (result4 != null) {
console.log(result4[0]); //Windows
console.log(result4[1]); //undefined
}

//反向肯定预查，零宽度负预测先行断言
var reg5 = /(?<=95|98|NT|2000)Windows/; //Uncaught SyntaxError: Invalid regular expression: /(?<=95|98|NT|2000)Windows/: Invalid group
var str5 = "2000Windows";
var result5 = str5.match(reg5);
if (result5 != null) {
console.log(result5[0]);
console.log(result5[1]);
}
