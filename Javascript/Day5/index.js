//prompt() this is a method of the global window object
//It's not part of the JavaScript language. so run your code in a browser or an environment that supports the Browser Object Model

const myName = window.prompt("Hi user pls enter your name");
console.log(`welcome ${myName}`);

//WAP to check if a no is positive negative or zero

const n = parseInt(prompt("Enter the number"));
if (n > 0) {
  console.log("Positive");
} else if (n < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

//wap to check if a no is even or odd

const num = parseInt(prompt("Enter the number"));
if (num % 2 === 0) {
  console.log("THis is Even");
} else {
  console.log("THis is Odd");
}

// 8 5 11

//WAP to find the largest number among three nos.

const number1 = parseInt(prompt("Enter first no."));
const n2 = parseInt(prompt("Enter first no."));
const n3 = parseInt(prompt("Enter first no."));
let largest;
//here we are comaring n1 with n2 and n3
if (n1 >= n2 && n1 >= n3) {
  largest = n1;
} else if (n2 >= n1 && n2 >= n3) {
  largest = n2;
} else {
  largest = n3;
}
console.log(l);

/* Math.max(n1,n2,n3) */

//WAP to print the area of traingle

const base = parseInt(prompt("Enter the base."));
const height = parseInt(prompt("Enter the height"));

const area = (base * height) / 2;
console.log(area);

const s1 = parseInt(prompt("Enter 1st side"));
const s2 = parseInt(prompt("Enter 2nd side"));
const s3 = parseInt(prompt("Enter 3rd side"));

const s = (s1 + s2 + s3) / 2;

const area1 = Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
console.log(`area is ${area1}`);

// WAP to convert C to F or F to C
// C/5=(F-32)/9

/* const C = prompt("Enter a Censius temperature.");
const F = (C * 1.8 )+ 32;
console.log(F) */

const F = prompt("Enter a Censius temperature.");
const C = (F - 32) / 1.8;
console.log(C);
