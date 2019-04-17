/* List of paths to images */
var posters = [
	"star-wars.jpg",
	"inception.jpg",
	"stitch.jpg",
	"lotr.jpg",
	"kuzco.jpg"
];

/* List of movie titles (same order as posters) */
var titles = [
	"Star Wars Episode IV: A New Hope",
	"Inception",
	"Lilo & Stitch",
	"The Lord of the Rings: The Fellowship of the Ring",
	"The Emperor's New Groove"
]

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
	}
	
	/* Mod currMovie by the number of posters */
	var index = currMovie % posters.length;
	
	/* Set the img source using the list of
	   poster names */
	var imgSrc = "img/" + posters[index];
	document.getElementById("poster").src = imgSrc;
	
	/* Set the title using the list of titles */
	document.getElementById("title").innerHTML = titles[index];
}