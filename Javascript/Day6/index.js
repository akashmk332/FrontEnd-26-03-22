11;
11 + 989765; //expression

const myName = "Gargi";
console.log(`my name is ${myName}`); // here inside template literals we can only use expressions

true && false;

//expressions - produces values
//statements - can't produce any value

if (11 > 10) {
  const text = "11is larger than 10";
} // statement

//--------------------------------

const friendOne = "Somnath";
const friendTwo = "nilesh";
const friendThree = "Shubham";
const friendFour = "Avi";
const friendFive = "Surya";
const friendSix = "Deepak";
const friendSeven = "Khushi";
const friendEight = "Logu";
const friendNine = "Saurabh";
const frinedTen = "Mukul";

const myFriends = [
  "Som",
  "nil",
  "Shubh",
  "Avi",
  "Sur",
  "Deep",
  "Khushi",
  "Logu",
  "rabh",
  "Mak",
]; // data structure array

const myMarks = new Array(90, 89, 78, 90);
console.log(myMarks);

console.log(myFriends);
console.log(myFriends[0]);

console.log(myFriends.length);
console.log(myFriends[myFriends.length - 1]); // last element of m array

//myFriends[6] = "Pramod";
//myFriends[9] = "Bibhas";
myFriends[5] = "Kabba";
console.log(myFriends);

myarr = ["Gargi", 11, myFriends]; // str number array
console.log(myarr);
//built-in methods
const cars = ["Ford", "Kia", "Toyota"];
//add element to the end of my array
cars.push("Hummer"); // returns the new length of the array
/* const newCar = cars.push("Hummer"); // returns the length of the array */
/* console.log(newCar); */
console.log(cars);

cars.unshift("Tesla"); // to add an element to the beginning of my array
console.log(cars);

cars.pop(); //delete element from the end of my array
console.log(cars);

cars.shift(); // delete element from the beginning of the array
console.log(cars);
cars.push("Hummer");
cars.push("Humme");
cars.push("Humm");

console.log(cars);
cars.splice(4, 1); // index from where u wanna delete , how many elements u wanna delete
console.log(cars);
cars.splice(3, 2);
console.log(cars);
cars.shift(); // delete element from the beginning of the array
console.log(cars);

const details = cars.includes("Hummer");
console.log(details);

const poppedElement = cars.pop(); //delete element from the end of my array
console.log(poppedElement);
