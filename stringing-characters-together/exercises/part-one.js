let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num));
console.log(typeof (String(num)));

console.log(num.toString().length)
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 3.14
console.log(String(num2));
console.log(typeof (String(num2)));
console.log(num.toString().length);
//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
if (String(num2).includes(".")){
    console.log(String(num2).length-1);
} else {
    console.log(String(num2).length); 
}