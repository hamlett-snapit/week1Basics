// When finish with any JS file, open terminal and run "node filename.js" 
// Create a function that prints your name.
// Refer to last weeks folder for help.
// page : 83 -> Function & print statement

function printName(){ // function keyword is used to create a function.
    console.log("name");// console.log built in function prints to console.
}
printName(); // Starts the function and prints the results.

function printName1(first,last){
    console.log(first + " " + last);
}
// this function does not have a call , so it will not run 

function printName2(name){
    console.log(name);
}

function printName3(n){
    console.log(n);
}


// Create a variable for at least four of the data types
// page : 11
var aWord = "Hello"; // created a variable with the data type String.
var twoNumbers = 47; // created a variable with the data type Number.
var isHungry =  true; // created a variable with the data type Boolean.
var nothingElse; // created a variable with the data type Undefined.



// Create an array with 3 items.
// page : 128
var fruitTrees = ["R.H", 28 , false]; // Arrays can hold any data type. They also can be any size but be careful you dont want an array with 1000000 places/items.

var froggz = ["mikey", "stew", "ralph", "carol baskin"]; // arrays can be all of one type.

// To access the values in the array you can use a specific index or print the entire array
fruitTrees[1]; // We are looking at the index location 1 , which has the value 28
fruitTrees[3]; // Results in "undefined"

// To print array values we use the console.log() built in function.
console.log(fruitTrees[1]);
console.log(fruitTrees[3]);

// assign an array value to a variable
var numbKits = fruitTrees[1];
var levelWon = fruitTrees[2];

// Looping array: print all values of array
// use whatever loop you like , for loop is most common used
for (var i = 0; i < froggz.length; i++){
    console.log(froggz[i]);
}

for (var j = 0; j < fruitTrees.length; j++){
    console.log(fruitTrees[j]);
}





