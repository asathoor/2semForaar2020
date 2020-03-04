/**
 * file: js.js
 * purpose: detect keystroke

	In this example, we use a cross-browser solution, because the keyCode property does not work on the onkeypress event in Firefox. However, the which property does.

	Explanation of the first line in the function below: if the browser supports event.which, then use event.which, otherwise use event.keyCode 
	**/

function detectKey(event) {
  var x = event.which || event.keyCode;
  document.getElementById("demo").innerHTML = "The Unicode value is: " + x;
}

