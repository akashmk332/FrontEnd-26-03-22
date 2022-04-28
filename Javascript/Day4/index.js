//var myName = "gargi";

//let and const (Keywords) were introduced in ES6
//modern JS

//let can change during the execution

//reassigning a value to a variable, we are mutating the variable

/* let marks = 80;
marks = 90;
console.log(marks);
 */
//const keyword
//we can't reassign values to a variable

/* const totalMarks = 100; */
//totalMarks = 110;

//it's immutable variable

/* var myName = "G"; */
//var is functioned scope
//let has a block scope

// minimum variable mutation

/* myDate = 11;
console.log(myDate);
 */

//--------------------------------------------

const myName = "Gargi";

const YOB = 1500;
const cYear = 1570;

const text =
  "I'm " + myName + " a developer who's " + (cYear - YOB) + " years old";
const someText = "I'm";
const text1 = `I'm ${myName} a developer who's ${cYear - YOB} year old`;
const text3 = `simple string`;

console.log(text);
console.log(text1);

/* console.log("I want \n\
 to console \n mutiple lines "); */

console.log(`I want
to write
some content
here`);

let text5 = "raining";
let a = 6;
if (1) {
  console.log("I will not go to school");
} else {
  console.log("I will go to school");
}
var text6 = "raining";

/* if(condition){
    if true content inside if gets executed
}else{
    if not true content inside else gets excuted
} */

//switch
const day = "monday";

switch (day) {
  case "monday":
    console.log("Basic JavaScript");
    break;
  case "tuesday":
    console.log("Operators");
    break;
  case "wednesday":
    console.log("String Methods");
    break;
  case "Thursday":
    console.log("Switch Case");
    break;
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("Holiday :)");
    break;
  default:
    console.log("Some default value");
}

if (day === "monday") {
  console.log("Basic JavaScript");
} else if (day === "tuesday") {
  console.log("Operators");
} else if (day === "wednesday") {
  console.log("coercion");
} else if (day === "thursday") {
  console.log("const");
} else if (day === "friday") {
} else if (day === "Saturday" || day === "sunday") {
  console.log("Holiday");
} else {
  console.log("default");
}

//ternary operator
//--------------------------------

const myMarks = 100;

/* binary operators, + - ,a+b
 unary oprator +x

()? ():() */

const selfEvaluation =
  myMarks >= 90 ? "Excellent" : "I need to some Smart Work"; // myMarks(100)>90 //condtion satisfies

console.log(selfEvaluation);

//condition ? this (if true) : this (not true)
//condtion ? ---- : ----

//---------------------------

const textOne = "I love playing Guitar";
const texttwo = "I love playing Guitar";

console.log(textOne.charAt(4)); // character at the fourth position
console.log(textOne.concat(texttwo));
console.log(textOne.endsWith("r"));
