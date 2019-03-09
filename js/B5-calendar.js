console.log(Date());

var grid = document.querySelector(".grid-container");

setUpCalendar();
loadEvents();

function loadEvents() {
	var events = cal.events;
	var assigns = cal.assigns;
	var assessments = cal.assessments;
	
	for (var i in events) {
		var e = events[i];
//		console.log(e);
		var date = new Date(e.date).getTime();
		var content = e.content.split(" // ");
		var id = (date/100000).toString();
		
		for (var i in content) {
			$("#"+id).children (".content").append(Util.tag("div", {}, content[i]));
		}
	}
}

function setUpCalendar() {
	for (var i = 0; i < daysInTerm; i++) {
		var day = Util.nDaysLater(termStart, i);
		var id = (day.getTime()/100000).toString();

		var date = Util.tag(
			"div",
			{"class": "date"},
			day.getDate()
	//		Util.tag("div", {}, day.getDate())
		);

		var content = Util.tag(
			"div",
			{"class": "content"},
			""
		);

		var due = Util.tag(
			"div",
			{"class": "due"},
			""
		);

		var dayTemplate = [date, content];
		if (day.getDay() > 0 && day.getDay() < 6) {
			dayTemplate.push(due);
		}

		grid.appendChild(Util.tag(
			"div",
			{
				"class": "grid-item",
				"id": id
			},
			dayTemplate
		));
	}
}

function adjustGridItemSize() {
	var item = $(".grid-item");
	var itemW = item.width();
	
	$(".grid-item").css({
		"height": 1.3*itemW + "px"
	});
	
	var itemH = item.height();
	$(".date").css({
		"width": itemW/4 + "px",
		"height": itemH/6.6 + "px",
		"font-size": itemH/8 + "px"
	});
	
	$(".content").css({
		"top": itemH/6 + "px",
		"height": itemH/2.2 + "px",
		"padding": itemW/15 + "px",
		"font-size": itemH/12 + "px"
	});
	
	$(".due").css({
		"bottom": 0,
		"height": itemH/4.5 + "px",
		"padding": itemW/15 + "px",
		"font-size": itemH/12 + "px",
		"font-style": "italic"
	});
}

$(window).resize(adjustGridItemSize).resize();