"use strict";

let mapcenter = {lat: 45.5031149, lng: -122.7150562}
let positions = [
	{
		//home @45.5039918,-122.7902381,
		position: {lat:45.5039918, lng: -122.7902381},	
		title: "Home",
		contentString: "<div>" +
							"<h3>Home</h3>" + 
							"<p>This is the place I grew up. I spent 18 years living under this roof until I would gradutate high school.</p>" +
						"</div>",
	},
	{
		//jesuit @45.4848482,-122.7709645
		position: {lat: 45.4848482, lng: -122.7709645},
		title: "Jesuit High School",
		contentString: "<div>" +
							"<h3>Jesuit High School</h3>" + 
							"<p>This is the high school I attended. It was a great four years, but I don't think I'd ever wish to go back to those days.</p>" +
						"</div>",
	},
	{
		//stepping stone: @45.5332161,-122.7028043
		position: {lat: 45.5332161, lng: -122.7028043},
		title: "Stepping Stone Cafe",
		contentString: "<div>" +
							"<h3>Stepping Stone Cafe</h3>" + 
							"<p>The best pancakes Portland has to offer. You're not my friend unless you complete Stack of Mancakes challenge.</p>" +
						"</div>",
	},
]

// map should not be loaded synchronously


$(document).ready(()=>{
	
});


// let map;
//portland/beaverton coord @45.5031149,-122.7150562,12z
function initMap() {
	let map = new google.maps.Map(document.getElementById('map'), {
  		center: mapcenter,
  		zoom: 12
	});

	for(let i=0; i<positions.length; i++){
		let infowindow = new google.maps.InfoWindow({
			content: positions[i].contentString
		});
		let marker = new google.maps.Marker({
			position: positions[i].position,
			map: map,
			title: positions[i].title
		});
		marker.addListener("click",function(){
			infowindow.open(map,marker);
		});
	};
};









// initMap();