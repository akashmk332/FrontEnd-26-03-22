/* const myName = "Gargi";
console.log(`My Name is ${myName}`);
console.log(`My Name is ${myName}`);
console.log(`My Name is ${myName}`);
console.log(`My Name is ${myName}`);
console.log(`My Name is ${myName}`);
console.log(`My Name is ${myName}`);
console.log(`My Name is ${myName}`); */

//DRY - Do not repeat Yourself

//functions - a piece of code that we can reuse

function myFriend() {
  console.log(`I am good at drawing`);
}

/* function funcName(){
    // lines of code
} */

//calling / invoking the function
/* myFriend();
myFriend();
myFriend();
myFriend();
myFriend(); */

function myStudents(girls, boys) {
  // line of codes
  const students = ` I have ${girls} female students and ${boys} male students in my session`;

  // return me the text //I have 50 female students and 60 male students in my session`;
  return students;
}
//called this function 3 times
const may5 = myStudents(50, 60);
console.log(may5);

const may4 = myStudents(55, 55);
console.log(may4);

console.log(myStudents(70, 30));

const may3 = myStudents(40, 70); //
console.log(may3);

//------------
//function declaration
// writing a function that returns the age of a person
//in case of function declaration we can call the function before the declaration
const age = calculateAge(1987, "Ram"); // calling
console.log(age);
const agetwo = calculateAge(1995, "Yadu");
console.log(agetwo);

function calculateAge(birthYear, name) {
  console.log(`${name} was born in ${birthYear}`);
  return 2022 - birthYear;
}

// function expression
// can't call the function before declaration

/* const agethree = calculateAgeExp(1991, "Shyam");//Cannot access 'calculateAgeExp' before initialization
console.log(agethree); */

const calculateAgeExp = function (birthYear, name) {
  console.log(`${name} was born in ${birthYear}`);
  return 2022 - birthYear;
};

const agethree = calculateAgeExp(1991, "Shyam");
console.log(agethree);

//-------------------------
//Arrow function
//=>//fat arrow
//() => {};

const calculateAgeArrow = (birthYear) => 2022 - birthYear;
console.log(calculateAgeArrow(1995));

console.log("-------------------");

const beforeIRetire = (birthYear) => {
  const myAge = 2022 - birthYear;
  const retire = 60 - myAge;
  return retire;
};

console.log(beforeIRetire(1993));

/*  */
