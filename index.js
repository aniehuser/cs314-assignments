"use strict";

let apiRoot = 'https://jsonplaceholder.typicode.com';


$(document).ready(()=>{
	fetch(apiRoot + '/users')
	.then(response => response.json())
	.then(json => addUsers(json))
})



let addUsers = function(json) {
	console.log(json.length);
	for(let i=0; i<json.length; i++){
		let but1 = document.createElement("button")
		but1.innerHTML = "Todos";
		but1.setAttribute("class", "click-button")
		let but2 = document.createElement("button")
		but2.innerHTML = "Albums";
		but2.setAttribute("class", "click-button")
		let div = document.createElement("div")
		addToH(div, json[i].name, 3);
		addToP(div, `E-mail: ${json[i].email}`);
		addToP(div, `Company: ${json[i].company.name}`);
		div.appendChild(but1);
		div.appendChild(but2);
		div.setAttribute("class", "inner-content");
		let section = document.createElement("section")
		section.appendChild(div)
		section.setAttribute("id", `sec${i}`)
		section.setAttribute("class",(i%2==0) ? "dark-bg": "");
		document.body.appendChild(section);
		$(but1).click(()=>{
			let div1 = $(`#albums-${i}`)
			let div2 = $(`#todo-${i}`)
			if(div2.length == 0){
				fetch(apiRoot + `/todos?userId=${i+1}`)
					.then(response => response.json())
					.then(json => addTodos(json));
			} else {
				div2.toggle();
				div1.hide();
			}
		})
		$(but2).click(()=>{
			let div1 = $(`#albums-${i}`)
			let div2 = $(`#todo-${i}`)
			if(div1.length == 0){
				fetch(apiRoot + `/albums?userId=${i+1}`)
					.then(response => response.json())
					.then(json => addAlbums(json))
			} else {
				div2.hide();
				div1.toggle();
			}

		})

	}
}

let addTodos = function(json) {
	console.log(json);
	let id = json[0].userId -1;
	let bigDaddyDiv = document.createElement("div")
	bigDaddyDiv.setAttribute("id",`todo-${id}`)
	for(let i=0; i<json.length; i++){
		let div = document.createElement("div");
		let span = document.createElement("span");
		span.setAttribute("class", "flex")
		addToH(div, `Todo #${i+1}`, 4);
		addToP(span, json[i].title)
		let icon = document.createElement("i");
		console.log(typeof(json[i].completed))
		icon.setAttribute("class", (json[i].completed) ? "fas fa-check-square green":"fas fa-times-circle red")
		icon.classList.add("pad-1")
		span.append(icon);
		div.append(span);
		$(bigDaddyDiv).append(div);
	}
	$(`#albums-${id}`).hide()
	$(`#sec${id}`).append(bigDaddyDiv);
}

let addAlbums = function(json) {
	console.log(json);
	let id = json[0].userId -1;
	let bigDaddyDiv = document.createElement("div")
	bigDaddyDiv.setAttribute("id",`albums-${id}`)
	for(let i=0; i<json.length; i++){
		let div = document.createElement("div");
		addToH(div, `Album #${i+1}`, 4);
		addToP(div, json[i].title)
		$(bigDaddyDiv).append(div);
	}
	$(`#todo-${id}`).hide();
	$(`#sec${id}`).append(bigDaddyDiv);

}


let addToH = function(ele, innerhtml, h=1){
	let newH = document.createElement(`h${h}`);
	newH.innerHTML = innerhtml;
	ele.appendChild(newH);
}

let addToP = function(ele, innerhtml){
	let p = document.createElement("p")
	p.innerHTML = innerhtml;
	ele.appendChild(p);
}

