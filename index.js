"use strict";

let handle_input = function(input){
	if(!input){
		if(input == ""){
			alert("Invalid, must enter some input.")
		}
		return false;
	}
	return true;
}

let split_and_trim = function (str){
	let array = str.split(",");
	for(let i=0; i<array.length; i++){
		array[i] = array[i].trim();
	}
	return array;
}

let to_int_array = function (arr){
	let a = [];
	for(let i=0; i<arr.length; i++){
		a.push(parseInt(arr[i]));

	}
	return a;
}

let is_all_ints = function (arr) {
	let b = to_int_array(arr);
	for(let i=0; i<b.length; i++){
		if(!b[i] && b[i] != 0){
			return false;
		}
	}
	return true;
}



let msg = "Input some string:";

/// 1 -- Char Swap
let char_swap = function(){
	let input = prompt(msg);
	
	if(!handle_input(input)){
		return "";
	}
	
	return  input.substr(input.length-1,1) + input.substr(1, input.length-2) + ((input.length==1)? "" : input.substr(0,1));	

}

alert("Char swap " + char_swap());

/// 2 -- Hi string
let hi_string = function() {
	let input = prompt(msg);
	
	if(!handle_input(input)){
		return "";
	}

	return (input.substr(0,2)==="Hi") ? input : "Hi" + input;
}

alert("Hi string " + hi_string());


/// 3 -- Three Chars to Front
let three_chars_to_front = function() {
	let input = prompt(msg);

	if(!handle_input(input)){
		return "";
	}
	if(input.length < 3){
		alert("Input must be at least 3 characters long!")
		return "";
	}
	return input.slice(3) + input.slice(0,3);
}

alert("Three Chars To Front " + three_chars_to_front());

/// 4 -- Strings to Setnence
let strings_to_sentence = function(){
	let input = prompt(msg.slice(0,msg.length-1) + " with elements seperated by commas:");
	
	if(!handle_input(input)){
		return "";
	}
	let arr = split_and_trim(input);
	let str = "";
	for(let i=0; i<arr.length-1; i++){
		str += `${arr[i]} `;
	}
	str += `${arr[arr.length-1].trim()}.`
	alert("Strings to sentence:\n" + str);
}

strings_to_sentence();

/// 5 -- Upper or Lower
let upper_or_lower = function(){
	let input = prompt(msg);
	
	if(!handle_input(input)){
		return "";
	}

	if(input.length < 3){
		return input.toUpperCase();
	}
	return input.slice(0,3).toLowerCase() + input.slice(3);

}

alert("Upper or Lower " + upper_or_lower());

/// 6 -- Integer Swap
let integer_swap = function() {
	let input = prompt("Enter comma seperated list of integers:");
	
	if(!handle_input(input)){
		return "";
	}
	let arr = split_and_trim(input);

	if(!is_all_ints(arr)){
		alert("Must only enter integers values.");
		return "";
	}

	return arr.slice(arr.length-1).concat(arr.slice(1,length-1)).concat(arr.slice(0,1)); 

}

alert("Swapped Integers " + integer_swap());


/// 7 -- Longest String
let max_length = function (arr){
	let max = "";
	for(let i=0; i<arr.length; i++){
		if(max.length <arr[i].length){
			max = arr[i];
		}
	}
	return max;
}

let longest_string = function(){
	let input = prompt("Enter comma seperated list of strings");
	
	if(!handle_input(input)){
		return "";
	}
	let arr = split_and_trim(input);
	alert("The largest string is " +  max_length(arr));
}
longest_string();

/// 8 -- Largest Even Number
let even_int_array = function(arr) {
	let out = [];
	for(let i=0; i<arr.length; i++){
		if(arr[i]%2==0){
			out.push(arr[i]);
		}
	}
	return out;
}

let max_int = function(arr) {
	let max = arr[0];
	for(let i=1; i<arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	}
	return max;
}

let largest_even_number = function() {
	let input = prompt("Enter comma seperated list of integers:");
	
	if(!handle_input(input)){
		return "";
	}
	let arr = split_and_trim(input);
	if(!is_all_ints(arr)){
		alert("Not all values are integers");
		return;
	}
	let even_arr = even_int_array(to_int_array(arr));
	alert("largest even number is " + max_int(even_arr));
}

largest_even_number();

/// 9 -- Current Day
let current_day = function(){
	let day_of_week = {
	"0" : "Sunday",
	"1" : "Monday",
	"2" : "Tuesday",
	"3" : "Wednesday",
	"4" : "Thursday",
	"5" : "Friday",
	"6" : "Saturday"
	};

	let myDate = new Date();
	 // myDate.setHours(24);
	// console.log(myDate.getHours()%12==0)
	let am_pm = (myDate.getHours() >= 12) ? "PM" : "AM";
	let minutes = ((myDate.getMinutes()<10) ? "0" : "") + myDate.getMinutes();
	let hours = (myDate.getHours()%12==0) ? 12 : myDate.getHours()%12;
	alert(`Today is ${day_of_week[myDate.getDay()]}.\nIt is ${hours}:${minutes}${am_pm}.\n`)

}

current_day();


/// 10 -- Unlimited Function
let unlimited_function = function(...args){
	let str = "";
	for(let i=0; i<args.length; i++){
		str += args[i];
	}
	alert( str + '\n');
}

let display_unlimited = function(){
	
	unlimited_function(1,false,"arr","asldfkjsdfa",true,50505,50.5);
}

display_unlimited();
