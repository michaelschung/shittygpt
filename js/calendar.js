var block = localStorage.getItem("block");
const cal = block == 1 ? b1Cal : b5Cal;

var grid = document.querySelector(".grid-container");

daysOfTheWeek();
setUpCalendar();
loadEvents();

/* Load events, etc. from the giant data structure */
function loadEvents() {
	var events = cal.events;
	var assigns = cal.assigns;
	var assessments = cal.assessments;
	
	/* Add the events */
	for (var i in events) {
		var e = events[i];
		var date = new Date(e.date).getTime();
		var id = date.toString();
		var agenda = e.agenda.split(" // ");
		
		for (var i in agenda) {
			$("#"+id).children (".agenda").append(Util.tag(
				"div", {
					"style": "text-indent: -1em; margin-left: 1em;"
				}, agenda[i]
			));
		}
	}
	
	/* Add the assignments */
	for (var i in assigns) {
		var a = assigns[i];
		var date = new Date(a.date).getTime();
		var id = date.toString();
		var name = a.name;
		var link = a.link;
		
		var dueNode = $("#"+id).children(".due");
		
		var assignDue = Util.tag("div", {}, name);
		if (link != "" && !name.startsWith("MINI")) {
			assignDue = Util.tag("a", {
				"href": link,
				"target": "_blank"
			}, assignDue);
		}
		
		dueNode.append(assignDue);
		
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
		
		$("#"+id).children(".agenda").append(Util.tag(
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

		var agenda = Util.tag(
			"div",
			{"class": "agenda"},
			""
		);

		var due = Util.tag(
			"div",
			{"class": "due"},
			""
		);

		/* The date box and space for agenda are there
		 * no matter what, but we only add the "due"
		 * section if it's a weekday.
		 */
		var dayTemplate = [date, agenda];
		if (day.getDay() > 0 && day.getDay() < 6) {
			dayTemplate.push(due);
		}
		
		/* Fuzz out past dates */
		if (Util.isToday(day)) {
			dayTemplate.push(Util.tag(
				"div", {"class": "today"}, ""
			));
		} else if (day < new Date()) {
			dayTemplate.push(Util.tag(
				"div", {"class": "opaque"}, ""
			));
		}

		/* Get the background color for this day */
		var color = colors[day.getMonth()];
		
		/* Add this day to the calendar */
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

/* Generate the days of the week up at the top */
function daysOfTheWeek() {
	for (var i in daysOfWeek) {
		var d = daysOfWeek[i];
		grid.appendChild(Util.tag(
			"div",
			{"class": "grid-item dayOfWeek"},
			d
		));
	}
}

/* Keeps everything at the correct relative sizes */
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
	
	$(".agenda").css({
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
		"z-index": "96"
	});
	
	$(".today").css({
		"left": -itemW/60 + "px",
		"top": -itemW/60 + "px",
		"width": "calc(100% - " + itemW/30 + "px)",
		"height": "calc(100% - " + itemW/30 + "px)",
		"border": itemW/30 + "px solid red",
		"z-index": "97"
	});
	
	$(".dayOfWeek").css({
		"height": 0.3*itemH + "px",
		"font-size": itemH/8 + "px",
		"z-index": "99"
	});
	
	/* Make sure links are always clickable */
	$($(".grid-item").children(".due").children()).css({
		"z-index": "98"
	});
}

/* Resize everything whenever the screen resizes */
$(window).resize(adjustGridItemSize).resize();