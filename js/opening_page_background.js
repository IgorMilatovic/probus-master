
// opening page background photo color change

/*document.getElementById("opening-link").addEventListener("mouseover", function() {
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

document.getElementById("sub-headers").addEventListener("mouseover", function() {
	document.getElementById("entry-cover-sepia").style.WebkitFilter = "none";
}, false);
document.getElementById("sub-headers").addEventListener("mouseout", function() {
    document.getElementById("entry-cover-sepia").style.WebkitFilter = "sepia(78%) saturate(150%)";
}, false);*/

function enter_link(link) {
    document.getElementById(link).addEventListener("mouseover", function() {
        document.getElementById("entry-cover-sepia").style.WebkitFilter = "none";
    }, false);
    document.getElementById(link).addEventListener("mouseout", function() {
        document.getElementById("entry-cover-sepia").style.WebkitFilter = "sepia(78%) saturate(150%)";
    }, false);
}

enter_link("opening-link");
enter_link("opening-link-top");
enter_link("sub-headers");

