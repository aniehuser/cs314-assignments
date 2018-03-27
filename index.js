"use strict";

// 4 //
let elseIf = function(){
	let value = confirm("Press button");

	if(value)
		alert("ok.");
	else
		alert("cancel.");
}

// 5 //
let ternary = function(){
	let value = confirm("Press button");

	alert((value) ? "ok." : "cancel.");
}

// 6 //
elseIf();
ternary();

// 7 //
let numberAlert = function(){
	let number = prompt("Input a number.","");
	if(number == null){
		alert("cancelled.");
	} else if(number == "") {
		alert("nothing.");
	} else if(isNaN(number)) {
		alert("not a number.");
	} else {
		alert("this is definitiely a number.");
	}
	return number;
}

// 8 //
alert(numberAlert());


// 9 //
function newFunction(one, two){
	this.first = one;
	this.second = two;
	this.sum = function(){
		return this.first + this.second;
	}
}

// 10 //
function copyObject(obj, newAttr){
	let copy = Object.assign({}, obj);
	if(typeof(newAttr) === "boolean" && newAttr) {
		copy.third = "this is another value";
	}
	return copy;
}

// 11 //
let newX = new newFunction(1, 2);

// 12 //
let newY = copyObject(newX, true);

// 13 //
console.log("object 1 label: ", newX);
console.log("object 2 label: ", newY);

// 14 //
newY.first = 3;
console.log("object 1:::");
console.log("  first : " + newX.first);
console.log("  second: " + newX.second);
console.log("  sum   : " + newX.sum());

console.log("object 2:::");
console.log("  first : " + newY.first);
console.log("  second: " + newY.second);
console.log("  sum   : " + newY.sum());

// 15 //
// function yeah(str1, str2, str3) {
// 	str3 = str3 || " optional :)";
// 	return str1 + str2 + str3 + "";
// }

// 16 //
// let yeah = function (str1, str2, str3) {
// 	str3 = str3 || " optional :)";
// 	return "" + str1 + str2 + str3;
// }

// 17 //
let yeah = (str1, str2, str3) => ""+str1+str2+(str3 || " optional :)");

console.log(yeah("a ","b"));


