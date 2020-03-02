JavaScript Boilerplates
=======================

An obejct is a model of something in the world or mind. In functions we often use the keyword this, Here's a how to combine these concepts.

~~~~
let person = {
  firstName: "John",
  lastName : "Doe",
  id     : 5566,
  fullName : function() {
    return this.firstName += " " + this.lastName;
  }
};
~~~~