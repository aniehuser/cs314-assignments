'use strict';

$(document).ready(()=>{
	console.log("ready")
	$("#submit").click(()=>{
		console.log("click")
		let value = validate();
		console.log(value);
		if(value.iserror){
			badInput(value);
		} else {
			goodInput(value);
		}
	});
});

function goodInput(value){
	let container = document.createElement("div");
	container.setAttribute("class","form-output side-left-bar");
	let h3 = document.createElement("h3");
	h3.innerHTML = "Your Info:"
	
	let p1 = document.createElement("p");
	p1.innerHTML = `${value.val[0].value} ${value.val[1].value}, Age ${value.val[2].value}.`;
	let p2 = document.createElement("p");
	p2.innerHTML = `Contact: ${value.val[3].value}`;

	container.appendChild(h3);
	container.appendChild(p1);
	container.appendChild(p2);

	let section = $("#submit-results");
	section.empty();
	section.append(container);

	for(let i=0; i<value.val.length; i++){
		value.val[i].value = "";
		value.val[i].placeholder = removeFirstWord(value.val[i].placeholder);
	}
}

function removeFirstWord(input){
	let split = input.split(" ");
	let output = "";
	if(split[0] != "Invalid"){
		return input;
	}
	for(let i=1; i<split.length;i++){
		output = output + split[i];
	}
	return output;
}

function badInput(error) {
	let container = document.createElement("div");
	container.setAttribute("class", "error side-left-bar");
	let h3 = document.createElement("h3");
	h3.innerHTML = "Invalid Input!";
	container.appendChild(h3);
	console.log(error);
	for(let i=0; i<error.msg.length; i++){
		if(error.msg[i]){
			let p = document.createElement("p");
			console.log(typeof(error.val[i]));
			console.log(error);
			let outval = (typeof(error.val[i])=="string") ? error.val[i].value +" is" : "Cannot have "
			p.innerHTML = `${outval} an ${error.msg[i]}.`;
			container.appendChild(p);
		}		
	}

	let section = $("#submit-results");
	section.empty();
	section.append(container);
}

function validate(){
	let error = {
		iserror:false,
		msg : [],
		val : [],
	}
	let f = $("form input")
	console.log(f);
	for(let i=0; i<f.length; i++){
		f[i].classList.remove("bad-input");
		if(isEmpty(f[i].value)){
			error.iserror = true;
			error.val.push(false)
			if(!f[i].classList.contains("bad-input")){
				f[i].classList.add("bad-input");
				f[i].placeholder="Invalid " + f[i].name;	
			}
			
		}
	}
	if(error.iserror){
		error.msg.push("empty input");
		return error;
	}
	console.log($("#first"));
	validName($("#first")[0],error);
	validName($("#last")[0],error);
	validAge($("#age")[0],error);
	validEmail($("#email")[0],error);

	return error
}

function validName(name,error) {
	let reg = /^[A-Za-z]+$/;
	if(!reg.test(name.value)){
		error.iserror = true;
		error.msg.push("invalid name");
		name.classList.add("bad-input");
	} else{
		// false indicates that there was no error at this value
		error.msg.push(false);
		name.classList.remove("bad-input");
	}
	error.val.push(name);
}

function validAge(age,error){
	let reg = /^\d+$/;

	if(!reg.test(age.value)){
		error.iserror = true;
		error.msg.push("invalid age");
		age.classList.add("bad-input");
	} else{
		error.msg.push(false);
		age.classList.toggle("bad-input", false);
	}
	error.val.push(age);
}

function validEmail(email,error){
	let reg = /^\w+@\w+\.(\w+\.)*\w+$/;
	if(!reg.test(email.value)){
		console.log(email.value)
		error.iserror = true;
		error.msg.push("invalid email address");
		email.classList.add("bad-input");
	} else{
		error.msg.push(false);
		email.classList.remove("bad-input");
	}
	error.val.push(email);
}

function isEmpty(input){
	return (input==="") ? true : false;
}