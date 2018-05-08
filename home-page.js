"use strict";
$(document).ready(()=>{
	addPunListeners();
});

function addPunListeners(){
	addAnswerListeners();
	addYikesListeners();
}

function addAnswerListeners(){
	let i=0;
	let button = $(`#A${i}`)
	console.log(button);
	while(button.length!=0){
		button.click(function(event){
			$(`#answer${event.target.id[1]}`).slideDown();
		});
		i = i+1;
		button = $(`#A${i}`);
		// console.log(answer);
	}

}

function addYikesListeners(){
	let i=0;
	let button = $(`#R${i}`);
	while(button.length!=0){
		button.click(function(event){
			$(`#pun${event.target.id[1]}`).hide(1000, "swing");
		});
		i++;
		button = $(`#R${i}`);
	}
}