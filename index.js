"use strict";


///SElection sectino
// could make dynamic
let sectionStart = [150,300,475,668,882];

let scrollButtons = document.body.querySelectorAll("#selection > div > button");

for(let i=0; i<5; i++){
	scrollButtons[i].addEventListener("click", (event) => { 
		window.scrollTo(0, sectionStart[i]); 
		console.log("scroll to " + i)
	})
}


let section1 = document.querySelector("#one");
let section2 = document.querySelector("#two");
let section3 = document.querySelector("#three");
let section4 = document.querySelector("#four");
let section5 = document.querySelector("#five");

// Sectoin 1
let colorButtons = section1.querySelectorAll("button");
colorButtons[0].addEventListener("click", (event) => {
	section1.style.backgroundColor = "blue";
	console.log("blue")
})

colorButtons[1].addEventListener("click", (event) => {
	section1.style.backgroundColor = "green";
	console.log("green")
})

// Section 2
let toggleColorButton = section2.querySelector("button");
toggleColorButton.addEventListener("click", (event) => {
	section2.style.backgroundColor = (section2.style.backgroundColor == "pink") ? "orange" : "pink";
	console.log("pink/orange");
})

// section3
let addToListButton = section3.querySelector("button");
addToListButton.addEventListener("click", (event) => {
	let table = section3.querySelector("ul");
	let form = section3.querySelector("input");
	let newEle = document.createElement("li");
	let node = document.createTextNode(form.value);
	newEle.appendChild(node);
	table.appendChild(newEle);
})

// section 4
let removeClicker = section4.querySelectorAll("li");
for(let i=0; i<4; i++){
	removeClicker[i].addEventListener("click", (event) => {
		event.target.parentNode.removeChild(event.target);
		console.log("remove " + i);
	})	
}

// section 5
let highlightClicker = section5.querySelectorAll("li");
for(let i=0; i<4; i++) {
	highlightClicker[i].addEventListener("click", (event) => {
		for(i=0; i<4; i++){
			highlightClicker[i].classList.remove("highlight");
		}
		event.target.classList.add("highlight");
	})
}



