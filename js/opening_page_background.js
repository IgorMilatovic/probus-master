
// opening page background photo color change

document.getElementById("opening-link").addEventListener("mouseover", function() {
	document.getElementById("entry-cover-sepia").style.WebkitFilter = "none";
}, false);
document.getElementById("opening-link").addEventListener("mouseout", function() {
    document.getElementById("entry-cover-sepia").style.WebkitFilter = "sepia(78%) saturate(150%)";
}, false);

document.getElementById("opening-link-top").addEventListener("mouseover", function() {
	document.getElementById("entry-cover-sepia").style.WebkitFilter = "none";
}, false);
document.getElementById("opening-link-top").addEventListener("mouseout", function() {
    document.getElementById("entry-cover-sepia").style.WebkitFilter = "sepia(78%) saturate(150%)";
}, false);
