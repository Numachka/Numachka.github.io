//for the overlay --------------------------------------------------->

function on() { 
	document.getElementById("overlayBackgroundDiv").style.display = "block";
}

function off() {
	document.getElementById("overlayBackgroundDiv").style.display = "none";
}

//Gallery sorting tabs ----------------------------------------------->

function ringTag() {
	document.getElementById("ringTab").style.display = "inline";
	document.getElementById("ringButton").classList.add("activeTab");
	document.getElementById("necklaceTab").style.display = "none";
	document.getElementById("necklaceButton").classList.remove("activeTab");
	document.getElementById("braceletTab").style.display = "none";
	document.getElementById("braceletButton").classList.remove("activeTab");
	document.getElementById("earringTab").style.display = "none";
	document.getElementById("earringButton").classList.remove("activeTab");
}

function necklaceTag() {
	document.getElementById("necklaceTab").style.display = "inline";
	document.getElementById("necklaceButton").classList.add("activeTab");
	document.getElementById("ringTab").style.display = "none";
	document.getElementById("ringButton").classList.remove("activeTab");
	document.getElementById("braceletTab").style.display = "none";
	document.getElementById("braceletButton").classList.remove("activeTab");
	document.getElementById("earringTab").style.display = "none";
	document.getElementById("earringButton").classList.remove("activeTab");
}

function braceletTag() {
	document.getElementById("braceletTab").style.display = "inline";
	document.getElementById("braceletButton").classList.add("activeTab");
	document.getElementById("necklaceTab").style.display = "none";
	document.getElementById("necklaceButton").classList.remove("activeTab");
	document.getElementById("ringTab").style.display = "none";
	document.getElementById("ringButton").classList.remove("activeTab");
	document.getElementById("earringTab").style.display = "none";
	document.getElementById("earringButton").classList.remove("activeTab");
}

function earringTag() {
	document.getElementById("earringTab").style.display = "inline";
	document.getElementById("earringButton").classList.add("activeTab");
	document.getElementById("necklaceTab").style.display = "none";
	document.getElementById("necklaceButton").classList.remove("activeTab");
	document.getElementById("braceletTab").style.display = "none";
	document.getElementById("braceletButton").classList.remove("activeTab");
	document.getElementById("ringTab").style.display = "none";
	document.getElementById("ringButton").classList.remove("activeTab");
}

function resetTag() {
	document.getElementById("ringTab").style.display = "inline";
	document.getElementById("ringButton").classList.add("activeTab");
	document.getElementById("necklaceTab").style.display = "inline";
	document.getElementById("necklaceButton").classList.add("activeTab");
	document.getElementById("braceletTab").style.display = "inline";
	document.getElementById("braceletButton").classList.add("activeTab");
	document.getElementById("earringTab").style.display = "inline";
	document.getElementById("earringButton").classList.add("activeTab");
}

//Dropdown menu -------------------------------------------------->

function dropdown() { //click on dropdown to show 
	if (document.getElementById("navDropdownMenu").style.display == ("none")) {
		document.getElementById("navDropdownMenu").style.display = ("block")
	} else {
		document.getElementById("navDropdownMenu").style.display = ("none")
	}
}


window.onclick = function(e) { //Closes dropdown when clicking anywhere.
	if (!e.target.matches("#navDropdownButton")) {
		document.getElementById("navDropdownMenu").style.display = "none";
	}
}

//TODO Hide topnav logo on scroll -------------------------------------------------->


//Google maps API script ------------------------------------------------------->

// Initialize and add the map
function initMap() {
	// The location of Uluru, 35.004587
	var uluru = {lat: 32.328606, lng: 35.004587};
	// The map, centered at Uluru
	var map = new google.maps.Map(
			document.getElementById("contactMapDiv"), {zoom: 12, center: uluru});
	// The marker, positioned at Uluru
	var marker = new google.maps.Marker({position: uluru, map: map});
}
//Control panel overlay -------------------------------------------------------->

