/* //array
const mobile = [
  "realme",
  "9 pro plus",
  "16px",
  "50px",
  "8gb",
  25000,
  ["Green", "blue", "black"],
];

console.log(mobile[5]); */
/* company --> realme
modelname --> 9 pro plus 
frontcamera --> 16px
backcamera --> 50px
cost --> 25000,
ram --> 8 gb,
color varianants --> ['','','']
*/

// big difference between objects and arrays , in objects order doesn't but it does matter in array
//unstructed data - objects
//structed data - array
/* console.log(mobile); */

//object
//key:value
const mobileObj = {
  company: "realme",
  modelname: "9 pro plus",
  frontCamera: "16px",
  backCamera: "50px",
  ram: "8gm",
  cost: 25000,
  colorVariants: ["Green", "Blue", "Black"],
};
console.log(mobileObj);

//dot notation

console.log(mobileObj.frontCamera);
console.log(mobileObj.colorVariants);
console.log(mobileObj.company);

//bracket notation

console.log(mobileObj["colorVariants"]);

const val = "front";
console.log(mobileObj[val + "Camera"]); // I can put expressions inside brackets
/* console.log(mobileObj.val + "Camera"); // incorrect */

//const specs = prompt("What specifications do u wanna know ?");
const specs = "cost";

if (mobileObj[specs]) {
  console.log(mobileObj[specs]);
} else {
  console.log("enter correct spec name");
}

mobileObj.displaySize = "6 inch"; // dot notation
mobileObj["memory"] = "128GB"; // bracket notation

console.log(mobileObj);

const suraj = {
  fname: "Suraj",
  lname: "Khadse",
  State: "Maharashtra",
  byear: 1999,
  wearGlass: true,
  friends: ["x", "y", "z"],
  calculateAge: function (byear) {
    //method
    return 2022 - byear;
  },
};

//function expression
/* const calculateAge = function (byear){
    return 2022 - byear;
}
 */

console.log(suraj.calculateAge(1999));
console.log(suraj["calculateAge"](1999));

//leap year program
function leap(y) {
  if ((y % 4 == 0 && y % 100 != 0) || y % 400 == 0) {
    console.log(` ${y} is a leap year`);
  } else {
    console.log(` ${y} is not a leap year`);
  }
}
console.log(leap(2000));
console.log(leap(2004));
console.log(leap(2007));
console.log(leap(2024));
leap(3032);
leap(1997);
leap(1972);
