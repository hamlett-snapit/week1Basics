/** 
 * Created a function to add two numbers
 */
function addNumbs(a,b){
    return a + b ;
}
console.log(addNumbs(3,7));
console.log(addNumbs(7,7));
console.log(addNumbs(9,7));
console.log(addNumbs(3,6));

/**
 * Create an array with n number of spaces 
 */

function tsArr(n){
    var myAr = new Array(n);
    console.log(myAr);
}

tsArr(6);
tsArr(97);
tsArr(2);
tsArr(7);

/**
 * Create 3 Objects , 2 are children of one 
 */

var dad = {
    father : true,
    son: new son(),
    dau : new dau()
}

var son = {
    age : 12,
    favSport : "Football"
}

var dau = {
    age : 6,
    favSport : "dance"
}

console.log(dad.son.favSport);
