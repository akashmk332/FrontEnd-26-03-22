//WAP to swap two variables
var x = 9;
var y = 6;

//x=6, y=9

//intoduced one 3rd variable
//var z = y; // z=6 // whatever value is there inside y , assign that value to z , = is a assignment operator
//y = x; //y=9
//x = z; // x=6

x = x + y; //x=15
y = x - y; //15-6 = 9  y=9
x = x - y; //15-9 = 6

console.log(x);
console.log(y);

//type conversion
// explicit type conversion

var myName = Number("11");
console.log(myName, typeof myName);

/* number --> string
string --> number */

/* var myMarks = 90;
var phoneNo = String(9875677); //explicit conversion type conversion
console.log(phoneNo, typeof phoneNo);

var myDetails;
console.log(myDetails, typeof myDetails); */

/* var a = 9999999.99;
console.log(Boolean(a)); //true / false */

// truthy or falsy
/*
 0
""
undefined
NaN
null 
*/

//coercion

/* var x; //undefined
x = 11; //number
console.log(x, typeof x);
x = x + "gargi"; // string --> coercion
console.log(x, typeof x);
x = x - 5; //x--> string y --> number // x=11 y=5
console.log(x, typeof x); */

/* var myName = parseInt("11gargi");
console.log(myName, typeof myName); */

//-------------------------------------------------
//1
var text = "        ";
//length property returns the length of the string
console.log(text.length);

//2
var text1 = "Gargi";
console.log(text1.toLowerCase());
console.log(text1.toUpperCase());

//extract a part of the string

var text2 = "I love playing Guitar.";
/* console.log(text2.length); */
//slice extracts a section of the string and the extracted part in put a new variable
//slice(starting position, ending position) // ending position is not taken
var slicedtext = text2.slice(15, 21); // 15 - 20
//console.log(slicedtext);

var text2 = "I love playing Guitar.";
//counting happens from the end
/* console.log(text2.length); */
//slice extracts a section of the string and the extracted part in put a new variable
//slice(starting position, ending position) // ending position is not taken
var slicedtext = text2.slice(-10, -3); // 15 - 20
console.log(slicedtext);

//substring()
//cant take negative values
var text2 = "I love playing Guitar.";
//counting happens from the end
/* console.log(text2.length); */
//slice extracts a section of the string and the extracted part in put a new variable
//slice(starting position, ending position) // ending position is not taken
var slicedtext = text2.substring(15, 21); // 15 - 20
console.log(slicedtext);

var text5 = "raining";
if (text5.includes("rain")) {
  console.log("I will not go to school");
} else {
  console.log("I will go to school");
}
var text5 = "raining";

var a = 5;
/* if(condition){
    //
}else{

} */
//put any falsy value and else part will be executed
if (a > 3) {
  console.log("I will not go to school");
} else {
  console.log("I will go to school");
}
