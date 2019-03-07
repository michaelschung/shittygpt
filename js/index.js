$().ready(function() {
	console.log("2");
	$.getJSON("../res/assignments.json", function(data) {
		console.log("HELLO");
		var assigns = data["assigns"];
		for (var i = 0; i < assigns.length; i++) {
			console.log(assigns[i].id);
		}
	});
});