var word = "bottles";
var count = 99;
while( count > 0 ){
    console.log(count + " " + word +"of beer on th wall ");
    console.log(count + " " + word +"of beer");
    console.log("take one down , pass it around");
    count = count - 1; 
    if( count > 0 ){
        console.log(count + " " + word + " beer on th wall ");
    } else {
        console.log(" No more " + word + " beer on th wall ");
    }
}