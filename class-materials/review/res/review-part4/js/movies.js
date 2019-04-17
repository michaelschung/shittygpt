/* List of paths to images */
var posters = [
	"img/star-wars.jpg",
	"img/inception.jpg",
	"img/stitch.jpg",
	"img/lotr.jpg",
	"img/kuzco.jpg"
];

/* List of movie titles (same order as posters) */
var titles = [
	"Star Wars Episode IV: A New Hope",
	"Inception",
	"Lilo & Stitch",
	"The Lord of the Rings: The Fellowship of the Ring",
	"The Emperor's New Groove"
];

/* Keep track of the index of the current movie */
var currMovie = 0;

function changeMovie(dir) {
	/* Add the increment passed in from the HTML.
	   If dir is -1, then currMovie moves backward.
	   If dir is 1, then currMovie moves forward. */
	currMovie += dir;
	/* If currMovie goes negative, loop it around to
	   the index of the last movie. */
	if (currMovie < 0) {
		currMovie = posters.length - 1;
	} else if (currMovie > 4) {
		currMovie = 0;
	}
	
	/* Set the img source using the list of
	   poster names */
	document.getElementById("poster").src = posters[currMovie];
	
	/* Set the title using the list of titles */
	document.getElementById("title").innerHTML = titles[currMovie];
}