// Create 10 variables. All have to have different values. 
// Once you have created the variables, create one last 
// variable with all the variables added together.
// HINT: use the + sign to add variables together. 

// DO NOT DO THIS ??
// var a = 1
// var b = 1
// var c = 1

// Global Variable - variables all by themselves
// Not inside a scope or block : { <-- scope/block --> }
var someGuy = " John ";

var dayOfParty = 23 ; 

var lastGlobal = " Just Relax ";

// Local Variables - variables belong to something
// inside a scope or block : { var a = 1; }
function simple(){
    var a = 1; // Local Variable
}
for(var i = 0;i < 10; i++){
    console.log(i);
}