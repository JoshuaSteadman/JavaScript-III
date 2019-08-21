/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1.Window Binding: if there are no references currently 'this' keyword defaults to the window object unless you  are in the strict mode in which case it defaults to 'undefined'
* 2.Implicit Binding: When a function is invoked the object left of the dot is what the 'this' keyword references.
* 3.New Binding: using the 'new' keyword constructs a new object, and 'this' points to our new object
* 4.Explicit Binding: '.call', '.apply' and '.bind' can be used to invoke a function with a specific value for 'this'
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);
// Principle 2
//
// code example for Implicit Binding
let principleTwo = {
    name: 'Implicit Binding',
    method: function(){
      console.log(this.name);
    }
  }
  
  principleTwo.method();
// Principle 3

// code example for New Binding
function PrincipleThree(attr){
    this.newName = attr.name,
    this.newMethod = attr.newMethod = function(){
        console.log(this.newName);
    }
}
const newObj = new PrincipleThree({
    name: 'New Binding',
    test: 'test'
});
console.log(newObj.newMethod());
// Principle 4

// code example for Explicit Binding
function irrelevant(){
    console.log(`${this.name}'s favorite color is ${this.favorite_color} currently has a struggle rating of ${this.struggle_level}! Rut Roh!`);
}
const web23 = {
    name: 'Joshua Steadman',
    favorite_color: 'blue',
    struggle_level: 9
}
irrelevant.call(web23);

