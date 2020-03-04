/**
 * file: js.js
 * purpose: objects in practise
 * with inspiration from: https://www.w3schools.com/js/js_this.asp
 **/

// Create an object:
let person = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName; // this
	}
};

let myObject = {
	taste: "Hot",
	size: "Small",
	hot: false,
	name: "Andy Warhol",
	thing: "Campbells Tomato Soup",
	image: "greenman.jpg",
	nameAndImage: function () {
		return this.size + " xxx " + this.image; // this
	},
	showImage: function () {
		return '<img src="../images/' +
			this.image +
			'" alt="the alt text">';
	}
}

// Display data from the object:
let aa = document.getElementById("demo");

aa.innerHTML += person.fullName();
aa.innerHTML += '<br>' + myObject.nameAndImage();
aa.innerHTML += myObject.showImage();



/* Alternative: call */

/*
The Call Method:
let person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"
*/

/* ---------- INSTANCE ---------- */

/*

function Course(name, gradingareas, finalgrade) {
    this.name = name;
    this.gradingareas = gradingareas;
    this.finalgrade = finalgrade;
}

var course1 = new Course("CS1500", "Js", 85);
var course2 = new Course("CS1600", "Whot", 99);
console.log(course2.name); // CS1600

*/
