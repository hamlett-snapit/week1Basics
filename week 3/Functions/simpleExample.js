// Global Variable 
var x = 5;
var myName = "Ramone";
var t = "hello";

function addGlobalToLocal(global){
    // Local Variable
    var y = 9;
    var myName = 78;
    return y + global + myName;
}
console.log(addGlobalToLocal(myName));
console.log(addGlobalToLocal(x));
console.log(addGlobalToLocal(x));
console.log(addGlobalToLocal(t));
console.log(addGlobalToLocal(""));

// created function named bark
// function has two parameters : name & weight
// must call the function to use it :" bark(name, weight)"
// name & weight can be anything
function bark(name,weight){
    // If the weight is greater than 20 its a big dog
    if ( weight > 20 ){
        console.log(name + " says WOOF WOOF");
    }else{
        // If the weight is under 20 its a small dog.
        console.log(name + " says woof woof");
    }
}
var name;
var weight;
bark("rover",23);
name = "rover";
weight = 23; 