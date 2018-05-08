"use strict";

$(document).ready(()=>{
	addHeaderScroll();
});

let prevScroll = Infinity;
let numScrolls = 0
let addHeaderScroll = () => {
	$(window).scroll(function(){
		let currScroll = $(this).scrollTop();
		if(currScroll > prevScroll){
			numScrolls = numScrolls + 1;
			if(numScrolls>1){
				// console.log("slideUp");
				$("#head-of-page").slideUp(150);
			}
		} else {
			$("#head-of-page").slideDown(100);
			// console.log("slideDown");
			numScrolls = 0;
		}
		// console.log(numScrolls);
		prevScroll = currScroll;
	});
};
