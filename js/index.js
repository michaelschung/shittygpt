$().ready(function() {
	console.log("youaklsjdflkasjdflasjdf");
	$.getJSON("../res/assignments.json", function(data) {
		console.log("HELLO");
		let assigns = data["assigns"];
		for (let i = 0; i < assigns.length; i++) {
			console.log(assigns[i].id);
		}
	});
});