//SCROLL TO TOP
// scroll back to top button
let scrollTopButton = document.querySelector('.scroll-top-button');

// show / hide button
showHideButton = () => {
	window.pageYOffset < 150  ? (scrollTopButton.style.display = 'none') : 
						   	    (scrollTopButton.style.display = 'block');
}
document.addEventListener('scroll', showHideButton);

// scroll to top
window.addEventListener('load', function() {
	document.querySelector('.scroll-top-button').addEventListener('click', function(e) {
	e.preventDefault();
	document.querySelector('header').scrollIntoView({ behavior: 'smooth' });
	});
});
