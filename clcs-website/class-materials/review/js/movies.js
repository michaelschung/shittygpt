// List of paths to images
var posters = [
	"star-wars.jpg",
	"inception.jpg",
	"stitch.jpg",
	"lotr.jpg",
	"kuzco.jpg"
];

// List of movie titles (same order as posters)
var titles = [
	"Star Wars Episode IV: A New Hope",
	"Inception",
	"Lilo & Stitch",
	"The Lord of the Rings: The Fellowship of the Ring",
	"The Emperor's New Groove"
]

// Keep track of which poster is next
var i = 0;

function changeMovie(dir) {
	i += dir;
	if (i < 0) {
		i = posters.length - 1;
	}
	
	var index = i % posters.length;
	
	var imgPath = "img/" + posters[index];
	document.getElementById("poster").src = imgPath;
	
	document.getElementById("title").innerHTML = titles[index];
}