"use strict";

let apiRoot = 'https://api.punkapi.com/v2/beers';

$(document).ready(()=>{
	$("#random").click(function(){
		getAPI("/random");
	});
	$("#query").click(function(){
		let input = $(".search-beer");
		let val = input.val().toLowerCase();
		console.log(val);
		// console.log($(`#${val}`));
		if(val && $(`#${val}`).id != val){
			console.log(val.replace(/ /g, "_"))
			getAPI(`?beer_name=${val.replace(/ /g, "_")}`)
		}	
	});
});

function getAPI(call){
	fetch(apiRoot + call)
	.then(response => response.json())
	.then(json => {

		console.log(json);
		if(json.length!=0){
			console.log(json[0]);
			searchResult(json[0]);
		}
		else{
			console.log();
			beerDNE();
		}
	});
};

function beerDNE() {
	let content = $("#result")
	content.empty();
	let name = document.createElement("h3");
	name.innerHTML = "That beer isn't in our records!";
	let more = document.createElement("h4");
	more.innerHTML = "Try searching for another beer or select Random!";
	let container = document.createElement("div");
	container.setAttribute("id", "none");
	container.setAttribute("class", "result-content");
	container.appendChild(name);
	container.appendChild(more);
	content.append(container);
}

function searchResult (json){
	let content = $("#result")
	content.empty();
	let name = document.createElement("h3");
	name.innerHTML = json.name;
	let tagline = document.createElement("h4");
	tagline.innerHTML = json.tagline;
	let description = document.createElement("p");
	description.innerHTML = json.description;
	let image = document.createElement("img");
	image.setAttribute("src", json.image_url);
	image.setAttribute("alt", "Sorry! There is no image available.");
	image.setAttribute("class", "constrain");
	
	let ibu = document.createElement("p");
	let ebc = document.createElement("p");
	let abv = document.createElement("p");
	ibu.innerHTML = "IBU: " + json.ibu;
	ebc.innerHTML = "EBC: " + json.ebc;
	abv.innerHTML = "ABV: " + json.abv + "%";

	let info = document.createElement("div");
	info.setAttribute("class", "inline-flex children-padding-small");
	info.appendChild(abv);
	info.appendChild(ibu);
	info.appendChild(ebc);

	let all_info = document.createElement("div");

	all_info.setAttribute("class", "all-info");
	all_info.appendChild(name);
	all_info.appendChild(tagline);
	all_info.appendChild(description);
	all_info.appendChild(info);

	let container = document.createElement("div");
	container.setAttribute("id", json.name.toLowerCase());
	container.setAttribute("class", "result-content");
	container.appendChild(image);
	container.appendChild(all_info);

	content.append(container);
};