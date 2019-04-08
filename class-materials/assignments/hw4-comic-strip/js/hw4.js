var paddingOn = false;
var bordersOn = false;
var marginsOn = false;

function moveImage(direction) {
	var imgBox = document.getElementById("img-box");
	if (direction == 0) {
		imgBox.style.justifyContent = "center";
		imgBox.style.alignItems = "center";
	} else if (direction == 1) {
		imgBox.style.alignItems = "flex-start";
	} else if (direction == 2) {
		imgBox.style.alignItems = "flex-end";
	} else if (direction == 3) {
		imgBox.style.justifyContent = "flex-start";
	} else if (direction == 4) {
		imgBox.style.justifyContent = "flex-end";
	}
}

function togglePadding() {
	var panels = document.getElementsByClassName("panel");
	for (var i = 0; i < panels.length; i++) {
		if (paddingOn) {
			panels[i].style.padding = "0px";
		} else {
			panels[i].style.padding = "8px";
		}
	}
	paddingOn = !paddingOn;
}

function toggleBorder() {
	var panels = document.getElementsByClassName("panel");
	for (var i = 0; i < panels.length; i++) {
		if (bordersOn) {
			panels[i].style.border = "0px";
		} else {
			panels[i].style.border = "3px solid limegreen";
		}
	}
	bordersOn = !bordersOn;
}

function toggleMargin() {
	var panels = document.getElementsByClassName("panel");
	for (var i = 0; i < panels.length; i++) {
		if (marginsOn) {
			panels[i].style.margin = "0px";
		} else {
			panels[i].style.margin = "10px";
		}
	}
	marginsOn = !marginsOn;
}