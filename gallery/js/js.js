/**
 * file: js.js
 * purpose: interactivity
 **/
console.log('JavaScript from js/js.js is up and running.');

// paste your javascript here
// the image names should be real image names
var myGallery = [
  "greenman.jpg",
  "helloween.jpg",
  "marselis.jpg"
];

// create the html
for (i = 0; i < myGallery.length; i++) {
	// note the shorthand code below
  exhibition.innerHTML += '<img src="images/' 
  + myGallery[i] 
  + '" alt="from my galleries">';
}
