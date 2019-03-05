$().ready(function() {
	$.getJSON("res/assignments.json", function(data) {
		let assigns = data.assigns;
		for (let i = 0; i < assigns.length; i++) {
			console.log(assigns[i].id);
		}
	});
});