let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];

// let check = protoArray1.includes(",");
// console.log(check);


//2) 
function reverseCommas() {
	//TODO: 1. create and instantiate your variables.
	let check = protoArray1.includes(",");
	console.log(check);

	//TODO: 2. write the code required for this step
	let output2 = protoArray1.split(",");
	output2.reverse();
	let output = output2.join(',');

	
	//NOTE: For the code to run properly, you must return your output.  this needs to be the final line of code within the function's { }.
	return output;
}

//3)
function semiDash() {
	let check = protoArray2.includes(";");
	console.log(check);
	
//TODO: write the code required for this step
	let newArray = protoArray2.split(";");
	newArray.sort();
	let output = newArray.join('-');
  
	return output;
}

//4)
function reverseSpaces() {
	let check = protoArray3.includes(" ");
	console.log(check);
	
  //TODO: write the code required for this step
	let newArray = protoArray3.split(" ");
	newArray.sort();
	newArray.reverse();
	let output = newArray.join(" ");

	return output;
}

//5)
function commaSpace() {
	let check = protoArray4.includes(", ");
	console.log(check);
	
	//TODO: write the code required for this step
	let newArray = protoArray4.split(" ");
	let output = newArray.join("");

	return output;
}

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
