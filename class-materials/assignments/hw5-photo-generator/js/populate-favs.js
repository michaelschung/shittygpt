var favs = JSON.parse(localStorage.getItem("favs"));

for (var i = 0; i < favs.length; i++) {
	var newImg = document.createElement("img");
	newImg.src = favs[i];
	newImg.className = "fav";
	document.body.appendChild(newImg);
}