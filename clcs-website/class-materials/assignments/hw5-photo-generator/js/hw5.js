var favs = [];

var curr = 1;

function changeImage(dir) {
//	if (dir < 0) {
//		console.log("Previous");
//	} else {
//		console.log("Next");
//	}
	
	curr += dir;
	
	if (curr < 1) {
		curr = 42
	} else if (curr > 42) {
		curr = 1;
	}
	
	var imgSrc = "img/img" + curr + ".jpg";
//	console.log("Next image path: " + imgSrc);
	document.getElementById("display").src = imgSrc;
}

function save() {
	var currImgSrc = document.getElementById("display").src;
	console.log(currImgSrc);
	
	favs.push(currImgSrc);
	
	var newFav = document.createElement("img");
	newFav.src = currImgSrc;
	newFav.className = "fav";
	
	document.getElementById("fav-bar").appendChild(newFav);
}

function done() {
	localStorage.setItem("favs", JSON.stringify(favs));
	window.location = "html/favs.html";
}