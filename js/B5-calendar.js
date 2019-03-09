console.log(Date());

setUpCalendar();
loadEvents();

/* Load events, etc. from the giant data structure */
function loadEvents() {
	var events = b5Cal.events;
	var assigns = b5Cal.assigns;
	var assessments = b5Cal.assessments;
	
	/* Add the events */
	for (var i in events) {
		var e = events[i];
		var date = new Date(e.date).getTime();
		var id = date.toString();
		var content = e.content.split(" // ");
		
		for (var i in content) {
			$("#"+id).children (".content").append(Util.tag(
				"div", {
					"style": "text-indent: -1em; margin-left: 1em;"
				}, content[i]
			));
		}
	}
	
	/* Add the assignments */
	for (var i in assigns) {
		var a = assigns[i];
		var date = new Date(a.date).getTime();
		var id = date.toString();
		var name = a.name;
		
		var dueNode = $("#"+id).children(".due");
		
		dueNode.append(Util.tag(
			"div", {}, name
		));
		
		/* Special cases with assignment types */
		var type = a.type == 1
			? "(due at end of class)"
			: "(due at " + a.due + ")";
		
		if (a.type) {
			dueNode.append(Util.tag("div", {}, type));
		}
	}
	
	/* Add the assessments */
	for (var i in assessments) {
		var a = assessments[i];
		var date = new Date(a.date).getTime();
		var id = date.toString();
		var name = a.name;
		
		$("#"+id).children(".content").append(Util.tag(
			"div", {"class": "assessment"}, name
		));
	}
}

/*
 * Generate the calendar template
 */
function setUpCalendar() {
	for (var i = 0; i < daysInTerm; i++) {
		var day = Util.nDaysLater(dispStart, i);
		/* Use the time string as the ID */
		var id = day.getTime().toString();

		var date = Util.tag(
			"div",
			{"class": "date"},
			day.getDate()
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

		/* The date box and space for content are there
		 * no matter what, but we only add the "due"
		 * section if it's a weekday.
		 */
		var dayTemplate = [date, content];
		if (day.getDay() > 0 && day.getDay() < 6) {
			dayTemplate.push(due);
		}
		
		/* Fuzz out past dates */
		if (day < new Date() && !Util.isToday(day)) {
			dayTemplate.push(Util.tag(
				"div", {"class": "opaque"}, ""
			));
		}

		/* Get the background color for this day */
		var color = colors[day.getMonth()];
		
		/* Add this day to the calendar */
		var grid = document.querySelector(".grid-container");
		grid.appendChild(Util.tag(
			"div",
			{
				"class": "grid-item",
				"id": id,
				"style": "background-color: " + color + ";"
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
		"font-size": itemH/15 + "px"
	});
	
	$(".due").css({
		"bottom": 0,
		"height": itemH/6 + "px",
		"padding": itemW/15 + "px",
		"font-size": itemH/15 + "px",
		"font-style": "italic"
	});
	
	$(".opaque").css({
		"z-index": "99"
	});
}

$(window).resize(adjustGridItemSize).resize();