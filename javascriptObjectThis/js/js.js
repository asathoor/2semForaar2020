/**
 * file: js.js
 * purpose: objects in practise
 * with inspiration from: https://www.w3schools.com/js/js_this.asp
 **/

// Create an object:
var person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

/*
Note: the object is person. The object has properties, such e.g. firstName. The object also has a method, in this case fullName. The keyword "this" refers "to the owner object" (quote from W3 schools).
*/

// Display data from the object:
document.getElementById("demo").innerHTML = person.fullName();
