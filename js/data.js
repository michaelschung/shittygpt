/* If true, then the auto-calendar shows the entire term.
   If false, it only shows from the current week on. */
const showFullTerm = false;

/* Background colors for the months March-June */
const colors = {
	2: "#FFDEDE",
	3: "#DEFFE9",
	4: "#DEE7FF",
	5: "#FDDEFF",
}

const daysOfWeek = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
]

/* First and last days of class */
const termStart = new Date("03/02/2019");
const termEnd = new Date("06/05/2019");

const milsInDay = 1000*60*60*24;

/* Returns the most recent Sunday before the given date */
function recentSunday(someDate) {
	/* -7 so that it shows the previous week too */
	someDate.setDate(someDate.getDate() - someDate.getDay() - 7);
	someDate.setHours(0, 0, 0, 0);
	return someDate;
}

/* Returns the next Saturday after the given date */
function nextSaturday(someDate) {
	someDate.setDate(someDate.getDate() + 6 - someDate.getDay());
	return someDate;
}

/* We may want to start/end the calendar on days other
   than the actual start/end of the term */
const dispStart = recentSunday(showFullTerm ? termStart : new Date());
const dispEnd = nextSaturday(termEnd);

const daysInTerm = Math.round((dispEnd-dispStart) / milsInDay)+1;

/* Data for B1 */
const b1Cal = {
	"events": [
		{
			"date": "03/19/2019",
			"agenda": "Welcome back // Logistics // HTML: body, tags"
		},
		{
			"date": "03/21/2019",
			"agenda": "HTML: img, lists, div"
		},
		{
			"date": "03/25/2019",
			"agenda": "HTML: class, id // CSS: size, color, font"
		},
		{
			"date": "03/27/2019",
			"agenda": "CSS: positioning"
		},
		{
			"date": "03/28/2019",
			"agenda": "CSS: hover, click, padding, border, margin"
		},
		{
			"date": "04/01/2019",
			"agenda": "CSS: flex positioning"
		},
		{
			"date": "04/03/2019",
			"agenda": "HTML/CSS: review, practice"
		},
		{
			"date": "04/05/2019",
			"agenda": "JS: sneak preview"
		},
		{
			"date": "04/08/2019",
			"agenda": "JS: DOM, buttons"
		},
		{
			"date": "04/10/2019",
			"agenda": "HTML/JS: labels, input, checkboxes, forms"
		},
		{
			"date": "04/12/2019",
			"agenda": "HTML/JS: review, practice problems"
		},
		{
			"date": "04/16/2019",
			"agenda": "Review problem"
		},
		{
			"date": "04/17/2019",
			"agenda": "Debugging"
		},
		{
			"date": "04/19/2019",
			"agenda": "HTML input // JS alert, prompt, confirm"
		},
		{
			"date": "04/24/2019",
			"agenda": "Responsive web pages"
		},
		{
			"date": "04/26/2019",
			"agenda": "JS: HTML nodes"
		},
		{
			"date": "04/29/2019",
			"agenda": "HTML nodes (continued)"
		},
		{
			"date": "05/01/2019",
			"agenda": "HTML nodes practice problem"
		},
		{
			"date": "05/03/2019",
			"agenda": "Review work session"
		},
		{
			"date": "05/07/2019",
			"agenda": "HTML/CSS/JS: Review"
		},
		{
			"date": "05/08/2019",
			"agenda": "HTML/CSS/JS: practice problems"
		},
		{
			"date": "05/14/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/16/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/17/2019",
			"agenda": "Document-switching"
		},
		{
			"date": "05/21/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/23/2019",
			"agenda": "Project presentations!"
		},
		{
			"date": "05/28/2019",
			"agenda": "Class"
		},
		{
			"date": "05/29/2019",
			"agenda": "Class"
		},
		{
			"date": "05/31/2019",
			"agenda": "Review session"
		},
		{
			"date": "06/05/2019",
			"agenda": "Exam day"
		}
	],
	"assigns": [
		{
			"date": "03/25/2019",
			"name": "HW1: About You",
			"due": "10:45 AM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw1-about-you/hw1-spec.html",
			"type": 0
		},
		{
			"date": "03/28/2019",
			"name": "PROJ1: Proposal",
			"due": "02:05 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 0
		},
		{
			"date": "04/01/2019",
			"name": "HW2: Positioning (Part 1)",
			"due": "12:10 PM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw2-positioning1/hw2-spec.html",
			"type": 0
		},
		{
			"date": "04/08/2019",
			"name": "HW3: Positioning (Part 2)",
			"due": "02:05 PM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw3-positioning2/hw3-spec.html",
			"type": 0
		},
		{
			"date": "04/12/2019",
			"name": "PROJ2: Basic Layout",
			"due": "10:45 AM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 0
		},
		{
			"date": "04/16/2019",
			"name": "HW4: Comic Strip",
			"due": "08:30 AM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw4-comic-strip/hw4-spec.html",
			"type": 0
		},
		{
			"date": "04/17/2019",
			"name": "Upload 2 PG images to Google Drive folder",
			"due": "11:30 AM",
			"link": "https://drive.google.com/drive/folders/1CXAoJsEqoCTOloGXiA-VEij7R_zJLi1Q?usp=sharing",
			"type": 0
		},
		{
			"date": "04/24/2019",
			"name": "PROJ2.5: Inputs",
			"due": "09:30 AM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 0
		},
		{
			"date": "04/26/2019",
			"name": "PROJ3: Responsive Interface",
			"due": "08:30 AM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 0
		},
		{
			"date": "05/01/2019",
			"name": "HW5 Prep",
			"due": "10:30 AM",
			"link": "",
			"type": 0
		},
		{
			"date": "05/03/2019",
			"name": "HW5: Photo Generator",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw5-photo-generator/hw5-spec.html",
			"type": 2
		},
		{
			"date": "05/07/2019",
			"name": "HW6: Review Worksheet (Part 1)",
			"due": "08:30 AM",
			"link": "",
			"type": 0
		},
		{
			"date": "05/08/2019",
			"name": "HW6: Review Worksheet (Part 2)",
			"due": "11:30 AM",
			"link": "",
			"type": 0
		},
		{
			"date": "05/14/2019",
			"name": "PROJ4: Goals",
			"due": "12:00 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 1
		},
		{
			"date": "05/17/2019",
			"name": "PROJ5: Check-in",
			"due": "02:05 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 0
		},
		{
			"date": "05/22/2019",
			"name": "PROJ6: Code",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 2
		},
		{
			"date": "05/23/2019",
			"name": "PROJ7: Reflection",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B1.pdf",
			"type": 2
		}
	],
	"assessments": [
		{
			"date": "04/05/2019",
			"name": "QUIZ: HTML/CSS"
		},
		{
			"date": "05/10/2019",
			"name": "TEST: HTML/CSS/JS"
		}
	]
}

/* Data for B5 */
const b5Cal = {
	"events": [
		/*
		{
			"date": "",
			"agenda": ""
		},
		*/
		{
			"date": "03/19/2019",
			"agenda": "Welcome back // Logistics // HTML: body, tags"
		},
		{
			"date": "03/20/2019",
			"agenda": "HTML: img, lists, div"
		},
		{
			"date": "03/22/2019",
			"agenda": "HTML: class, id // CSS: size, color, font"
		},
		{
			"date": "03/26/2019",
			"agenda": "CSS: positioning"
		},
		{
			"date": "03/28/2019",
			"agenda": "CSS: hover, click"
		},
		{
			"date": "03/29/2019",
			"agenda": "CSS: positioning practice"
		},
		{
			"date": "04/02/2019",
			"agenda": "CSS: flex positioning"
		},
		{
			"date": "04/04/2019",
			"agenda": "HTML/CSS: review, practice // JS: sneak preview"
		},
		{
			"date": "04/08/2019",
			"agenda": "JS: DOM, buttons"
		},
		{
			"date": "04/09/2019",
			"agenda": "HTML/JS: labels, input, checkboxes, forms"
		},
		{
			"date": "04/11/2019",
			"agenda": "HTML/JS: review, practice problems"
		},
		{
			"date": "04/15/2019",
			"agenda": "Review problem"
		},
		{
			"date": "04/17/2019",
			"agenda": "Review problem (continued)"
		},
		{
			"date": "04/18/2019",
			"agenda": "HTML input // JS alert, prompt, confirm"
		},
		{
			"date": "04/23/2019",
			"agenda": "Debugging // Responsive web pages"
		},
		{
			"date": "04/25/2019",
			"agenda": "JS: HTML nodes"
		},
		{
			"date": "04/29/2019",
			"agenda": "JS: HTML nodes (continued)"
		},
		{
			"date": "04/30/2019",
			"agenda": "HTML nodes practice problem"
		},
		{
			"date": "05/02/2019",
			"agenda": "Review work session"
		},
		{
			"date": "05/06/2019",
			"agenda": "HTML/CSS/JS: Review"
		},
		{
			"date": "05/08/2019",
			"agenda": "HTML/CSS/JS: practice problems"
		},
		{
			"date": "05/13/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/15/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/17/2019",
			"agenda": "Document-switching"
		},
		{
			"date": "05/20/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/22/2019",
			"agenda": "Project work session"
		},
		{
			"date": "05/24/2019",
			"agenda": "Project presentations!"
		},
		{
			"date": "05/29/2019",
			"agenda": "Class"
		},
		{
			"date": "05/30/2019",
			"agenda": "Review session"
		},
		{
			"date": "06/04/2019",
			"agenda": "Exam day"
		}
	],
	"assigns": [
		/*
		{
			"date": "",
			"name": "",
			"due": "",
			"link": "",
			"type": 0	// 0 = normal, 1 = end of class, 2 = use the due time
		},
		*/
		{
			"date": "03/26/2019",
			"name": "HW1: About You",
			"due": "10:45 AM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw1-about-you/hw1-spec.html",
			"type": 0
		},
		{
			"date": "03/29/2019",
			"name": "PROJ1: Proposal",
			"due": "02:05 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 0
		},
		{
			"date": "04/02/2019",
			"name": "HW2: Positioning (Part 1)",
			"due": "12:10 PM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw2-positioning1/hw2-spec.html",
			"type": 0
		},
		{
			"date": "04/08/2019",
			"name": "HW3: Positioning (Part 2)",
			"due": "08:30 AM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw3-positioning2/hw3-spec.html",
			"type": 0
		},
		{
			"date": "04/11/2019",
			"name": "PROJ2: Basic Layout",
			"due": "12:10 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 0
		},
		{
			"date": "04/16/2019",
			"name": "HW4: Comic Strip",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw4-comic-strip/hw4-spec.html",
			"type": 0
		},
		{
			"date": "04/17/2019",
			"name": "Upload 2 PG images to Google Drive folder",
			"due": "08:30 AM",
			"link": "https://drive.google.com/drive/folders/1CXAoJsEqoCTOloGXiA-VEij7R_zJLi1Q?usp=sharing",
			"type": 0
		},
		{
			"date": "04/23/2019",
			"name": "PROJ2.5: Inputs",
			"due": "12:10 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 0
		},
		{
			"date": "04/25/2019",
			"name": "PROJ3: Responsive Interface",
			"due": "10:45 AM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 0
		},
		{
			"date": "04/30/2019",
			"name": "HW5 Prep",
			"due": "02:05 PM",
			"link": "",
			"type": 0
		},
		{
			"date": "05/03/2019",
			"name": "HW5: Photo Generator",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/class-materials/assignments/hw5-photo-generator/hw5-spec.html",
			"type": 2
		},
		{
			"date": "05/06/2019",
			"name": "HW6: Review Worksheet (Part 1)",
			"due": "10:45 AM",
			"link": "",
			"type": 0
		},
		{
			"date": "05/08/2019",
			"name": "HW6: Review Worksheet (Part 2)",
			"due": "08:30 AM",
			"link": "",
			"type": 0
		},
		{
			"date": "05/13/2019",
			"name": "PROJ4: Goals",
			"due": "01:55 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 1
		},
		{
			"date": "05/17/2019",
			"name": "PROJ5: Check-in",
			"due": "08:30 AM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 0
		},
		{
			"date": "05/23/2019",
			"name": "PROJ6: Code",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 2
		},
		{
			"date": "05/24/2019",
			"name": "PROJ7: Reflection",
			"due": "11:59 PM",
			"link": "https://michaelschung.github.io/res/Spring-Project-B5.pdf",
			"type": 2
		}
	],
	"assessments": [
		{
			"date": "04/08/2019",
			"name": "QUIZ: HTML/CSS"
		},
		{
			"date": "05/09/2019",
			"name": "TEST: HTML/CSS/JS"
		}
	]
};