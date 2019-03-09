console.log(Date());

var grid = document.querySelector(".grid-container");

var events = cal.events;
var assigns = cal.assigns;
var assessments = cal.assessments;

for (var i = 0; i < daysInTerm; i++) {
	var date = Util.nDaysLater(termStart, i);
	var id = (date.getTime()/100000).toString();
	grid.appendChild(Util.tag(
		"div",
		{
			"class": "grid-item",
			"id": id
		},
		date.getDate()
	));
}