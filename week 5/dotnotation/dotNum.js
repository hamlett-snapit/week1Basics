var myNumber = 456.66; 



function filterInt(value) {
    if (/^[-+]?(\d+|Infinity)$/.test(value)) {
      return Number(value)
    } else {
      return NaN
    }
  }
  
  console.log(filterInt('421')) 

var result; 

result = myNumber.toString();

console.log(result);

result = myNumber.toExponential();

console.log(result);

result = myNumber.toPrecision();

console.log(result);

result = myNumber.toFixed();

console.log(result);

result = myNumber.toLocaleString();

console.log(result);

result = myNumber.valueOf();

console.log(result);

var mySecNum = '5e9';

result = filterInt('Infinity');

console.log(result);