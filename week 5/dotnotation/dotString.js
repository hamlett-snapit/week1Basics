var name = "Tazmanian";
var roads = " dirt roads";
var food = " Street Food";
var result; 

result = name.length;
console.log(result);

result = name.charAt(3);
console.log(result);

result = name.concat(food);
console.log(result);

result = name.endsWith("n");
console.log(result);

result = name.includes("man");
console.log(result);

result = name.indexOf("n");
console.log(result);

result = name.lastIndexOf("n");
console.log(result);

result = name.toLowerCase(); // expected all lowercase letters 
console.log(result);

result = name.toUpperCase();
console.log(result);

result = name.repeat(5);
console.log(result);

result = name.split("");
console.log(result);

result = name.startsWith("n");
console.log(result);

result = name.substr(0,4);
console.log(result);

result = name.substring(0,4);
console.log(result);

result = name.trim();
console.log(result);

result = name.replace("man","(|{-_-}|)");
console.log(result);

result = name.substr(0,4)
        .toUpperCase()
        .repeat(2)
        .replace("ZMTAZ","recycle")
        .toLowerCase();
console.log(result);

result = name.search("man");
console.log(result);