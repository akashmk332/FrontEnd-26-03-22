/* var valA = "true";
var valB = "false";

var valC = true;
var valD = false;

console.log(!!valA == !!valB);
console.log(!!valC == !!valD);

console.log(!valA);
console.log(!!valA);
console.log(!valB);
console.log(!!valB);

console.log(typeof valA);
console.log(typeof valB);
console.log(typeof valC);
console.log(typeof valD);

console.log(valC); //true
console.log(!valC); //false
console.log(!!valC); */

// Question 5:
// Write a JavaScript program to input electricity unit charge and calculate the total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// For unit above 250 Rs. 1.50/unit. An additional surcharge of 20% is added to the bill.
// For example, input: 20 units then bill is Rs10
// Total Units: 300
// 50 * 0.5 = 25
// 100 * 0.75 = 75
// 100 * 1.2 = 120
// 50 * 1.5 = 75
// Total = 295 + 20% surcharge on 295
// Result = INR 354

//console.log("Q5 END =====================");

const unit = prompt("Enter Electricity unit");

let totalUnit;

if (unit <= 50) {
  totalUnit = unit * 0.5;
} else if (unit <= 150) {
  totalUnit = 50 * 0.5 + (unit - 50) * 0.75; // 50 --> 0.75
} else if (unit <= 250) {
  totalUnit = 50 * 0.5 + 100 * 0.75 + (unit - 150) * 1.2;
} else if (unit > 250) {
  totalUnit = 50 * 0.5 + 100 * 0.75 + 100 * 1.2 + (unit - 250) * 1.5;
  totalUnit = totalUnit + totalUnit * 0.2;
}

console.log(totalUnit);

// check if a string contains a substring

// I love to play Guitar(text)

//play // sunstring
//sing

const text = prompt("Enter your text");
const subStr = prompt("Enter the substring that u wanna take");

if (text.includes(subStr)) {
  console.log(`Yess!  ${subStr} is present inside ${text}`);
} else {
  console.log("its not there!");
}

//234 764 984

const n1 = prompt("Enter the first no.");
const n2 = prompt("Enter the sec no.");
const n3 = prompt("Enter the third no.");

const last1 = n1 % 10;
const last2 = n2 % 10;
const last3 = n3 % 10;

if (last1 == last2 && last1 == last3) {
  console.log("same!");
} else {
  console.log("not same!");
}
