/*
"use strict";


function decipherThis(str) {
  const map = str.split(" ").map((word) => {
    const firstLetter = String.fromCharCode(Number.parseInt(word));
    //if only digits
    if (word.match(/^\d\d$/g)) {
      return firstLetter;
    }

    let localWord = [...word];
    const lastLetter = localWord.splice(-1, 1);
    const middlePart = localWord.join("").match(/[^\d]/g);

    if (middlePart) {
      middlePart.push(middlePart.shift());
      return firstLetter + lastLetter.join("") + middlePart.join("");
    } else {
      return firstLetter + lastLetter.join("");
    }
  });
  return map.join(" ");
}
const str1 = "72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o";
const str3 = "110croo 111gel 115i 109ia 102isa";
// console.log(decipherThis(str1));
// console.log(decipherThis(str3));
/* 




*/
// function encryptThis(str) {
//   const map = str.split(" ").map((word) => {
//     if (word.length === 1) {
//       return word.charCodeAt([0]);
//     }
//     let localWord = word;

//     const firstLetter = localWord.charCodeAt([0]);
//     let middleLetters = localWord.slice(1).split("");
//     const lastLetter = middleLetters.pop() ?? "";
//     const secondLetter = middleLetters.shift() ?? "";

//     return firstLetter + lastLetter + middleLetters.join("") + secondLetter;
//   });
//   return map.join(" ");
// }

// const encr1 = "A wise old owl lived in an oak";
// // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"

// console.log(encryptThis(encr1));



// //AJAX call country 1
// const getCountryAndNeighbour = function (country) {
//   const request = new XMLHttpRequest();
//   request.open("GET", `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener("load", function () {
//     if (/404|NOT FOUND/g.test(this.responseText)) return;
//     const [data] = JSON.parse(this.responseText);

//     renderCountry(data);

//     //get neighbour country (2)
//     const [neighbour] = data.borders;
//     if (!neighbour) return;

//     //AJAX call country (2)
//     const request2 = new XMLHttpRequest();
//     request2.open("GET", `https://restcountries.com/v3.1/alpha/${neighbour}`);
//     request2.send();
//     request2.addEventListener("load", function () {
//       const [data2] = JSON.parse(this.responseText);
//       renderCountry(data2, "neighbour");
//     });
//   });
// };

// getCountryAndNeighbour("moldova");

// //building a promise with fetch and consume with then
// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(function (
//     response
//   ) {
//     console.log(response);
//   });
// };

// getCountryData("romania");

// const getNeighborProm = function (prevCountry) {
//   const neighbor = prevCountry[0].borders[0];
//   if (!neighbor) return;
//   const response = fetch(
//     `https://restcountries.com/v3.1/alpha/${neighbor}`
//   ).then((response) => response.json());
//   response.then((data) => renderCountry(data[0], "neighbour"));
//   return response;
// };

// const getCountryData = function (country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then((response) => response.json())
//     .then((origCountry) => {
//       renderCountry(origCountry[0]);
//       return getNeighborProm(origCountry);
//     });
//   // .then((data) => getNeighborProm(data));
// };
// btn.addEventListener("click", function () {
//   getCountryData("roumania");
// });



// var fireAndFury = function (tweet) {
//   const obj = {
//     FIRE1: "You are fired! ",
//     FURY1: "I am furious. ",
//     FIRE2: "You ",
//     FURY2: "I am ",
//     FIRE3: "and you ",
//     FURY3: "really ",
//     FIRE4: "and you are fired! ",
//     FURY4: "really furious. ",
//   };
//   let finString = "";
//   let first = true;
//   const regex = tweet.match(/FURY|FIRE/g);
//   const otherLetter = /[^FURYIE]/g.test(tweet);
//   if (!regex || otherLetter) return "Fake tweet.";

//   for (let i = 0; i < regex.length; i++) {
//     const el = regex[i];
//     //if first and next element is not the same
//     if (first && el !== regex[i + 1]) {
//       finString += obj[`${el}1`];
//       first = true;
//       continue;
//     }
//     //if first and next element is the same
//     if (first && el === regex[i + 1]) {
//       finString += obj[`${el}2`];
//       first = false;
//       continue;
//     }
//     //if second and next the same
//     if (!first && el === regex[i + 1]) {
//       finString += obj[`${el}3`];
//       first = false;
//       continue;
//     }
//     //if second and next not the same
//     if (!first && el !== regex[i + 1]) {
//       finString += obj[`${el}4`];
//       first = true;
//       continue;
//     }
//   }
//   return finString.trim();
// };



// const Person = function (name, age) {
//   this.name = name;
//   this.age = age;
// };

// const obj1 = new Person("Jonas", "1992");
// const obj2 = new Person("Mark", "1993");

// console.log(obj1);
// console.log(obj2);

// Person.prototype.calcAge = function () {
//   return 2037 - this.age;
// };

// console.log(obj1.calcAge());

// console.log(Person.prototype.isPrototypeOf(obj1));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.location = "Bucharest";
// console.dir(Person);

// console.log(Person.hasOwnProperty("calcAge"));

// console.log(obj1.__proto__);

// console.log(Person.prototype.constructor);

// console.log(Person.prototype); //prototype for instances
// console.log(obj1.__proto__); //__proto__ property of instances

// console.dir([].__proto__.__proto__);

// console.log([1, 2, 3].toString());

// console.log([].__proto__);

// const obj3 = { 1: "a" };
// console.log(Object.isPrototypeOf({}));
// console.log(obj3.__proto__);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = +speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
// };

// Car.prototype.brake = function () {
//   this.speed += 5;
// };

// const car1 = new Car("BMW", "120");
// const car2 = new Car("Mercedes", "120");

// car1.accelerate();
// car2.accelerate();
// car1.brake();
// car2.brake();
// car2.brake();

// const Player = function (name, role, strength, age) {
//   this.name = name;
//   this.role = role;
//   this.strength = strength;
//   this.age = age;
// };

// Player.prototype.playing = function () {
//   this.newStrength = this.strength - 30;
//   console.log(
//     `This ${this.role} is going further but had a hit and now its having ${this.newStrength} strength and ${this.hit}`
//   );
// };

// Player.prototype.hit = 30;

// const player1 = new Player("Bot1", "gunner", 80, 40);
// const player2 = new Player("Bot2", "defense", 100, 30);

// class PersonCl {
//   constructor(name, role, strength, age) {
//     this.name = name;
//     this.role = role;
//     this.strength = strength;
//     this.age = age;
//   }

//   // instance method are added to prototype property and are available to instances
//   playing() {
//     console.log(`This ${this.name} is a ${this.role} and has ${this.strength}`);
//   }

//   //static method not available for instances
//   static hey() {
//     console.log("hey");
//   }
// }

// // PersonCl.hey();

// const player3 = new PersonCl("Boris", "speeder", 120, 30);
// const player4 = new PersonCl("john", "eater", 150, 35);

// const objGetSet = {
//   name: "John",
//   movemens: [10, 20, 30, 40],

//   get lastMov() {
//     return this.movemens.slice(-1).pop();
//   },

//   set lastMov(mov) {
//     this.movemens.push(mov);
//   },
// };

// // console.log(objGetSet.lastMov); //40
// // objGetSet.lastMov = 50;
// // console.log(objGetSet.lastMov); //50

// // console.dir(Number.parseFloat);
// //
// //
// //
// //

// function makeString(s) {
//   // const regex = /^[a-z]|\s[a-z]/gi;
//   const regex = /\b\w/gi;
//   // return s.match(regex).join("").replace(/\s/g, "");
//   return s.match(regex).join("");
// }

// const s1 = "brown eyes are nice";

// // console.log(makeString(s1));

// //Object.create() *linking person6 to the PersonProto prototype
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const person6 = Object.create(PersonProto);

// // person6.init("John", 1991);
// // person6.calcAge();
// //
// //
// //

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//   }
//   brake() {
//     this.speed -= 5;
//   }
//   get speedUs() {
//     return (this.speed /= 1.6);
//   }
//   set speedUs(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// const car3 = new CarCl("audi", 120);
// car3.speedUs = 140;
// // console.log(car3); //speed:224
// // console.log(car3.speedUs); //140

// //
// //
// //
// //
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };
// Person.prototype.introducePerson = function () {
//   console.log(`${this.firstName} was born in ${this.birthYear}`);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };
// //linking Student prototype to the Person prototype
// Student.prototype = Object.create(Person.prototype);
// Student.prototype.constructor = Student;
// Student.prototype.introduceStudent = function () {
//   console.log(`${this.firstName} is taking a course of ${this.course}`);
// };
// const mike = new Student("jimmy", 1992, "Algebra");
// // mike.introduceStudent();
// // mike.introducePerson();

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = +speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log("speed", this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log("speed", this.speed);
// };

// const car1 = new Car("BMW", "120");
// const car2 = new Car("Mercedes", "120");

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);
// EV.prototype.constructor = EV;

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} with charge at ${this.charge}`
//   );
// };

// const elcar1 = new EV("tesla", 120, 70);

// elcar1.accelerate();
// elcar1.accelerate();
// elcar1.brake();

// console.log(elcar1);

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }
//   get age() {
//     return 2037 - this.birthYear;
//   }

//   set fullName(name) {
//     if (name.includes(" ")) this._fullname = name;
//     else alert(`${name} is not a full name`);
//   }
//   get fullName() {
//     return this._fullname;
//   }

//   static hey() {
//     console.log(`hey there `);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     //always needs to to happen first
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`${this._fullname} take a course of ${this.course}`);
//   }
// }

// class Student2 extends PersonCl {
//   //if there are no new properties you dont need to create a constructor and to call super
//   introduce2() {
//     console.log(`${this.fullName} is from ${this.birthYear}`);
//   }
// }

// const studentNou = new StudentCl("Vasile Borisovici", 1991, "doctor");
// const studentBotanica = new StudentCl("Grisa tudorovici", 1994, "masterat");
// studentBotanica.introduce();

// const PersonProto = {
//   calcAge() {
//     console.log(`${this.firstName} is born in ${this.birthYear}`);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };
// //link studentProto prototype to PersonProto prototype
// const StudentProto = Object.create(PersonProto);
// //add method to studentProto
// StudentProto.showStudentName = function () {
//   console.log(`This student name is ${this.firstName}`);
// };

// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(
//     `My name is ${this.firstName} from ${this.birthYear} study ${this.course}`
//   );
// };

// //link jay prototype to studentProto prototype
// const jay = Object.create(StudentProto);
// jay.init("bob", 1991, "computer science");
// jay.introduce();


// function longestConsec(arr, n) {
//   if (arr.length === 0 || n > arr.length || n <= 0) return "";

//   const localArr = [...arr];
//   const obj = {};
//   let finalStr = "";

//   localArr.sort((a, b) => {
//     return b.length - a.length;
//   });

//   localArr.forEach((word, i) => {
//     if (i < n) {
//       obj[arr.indexOf(word)] = word;
//     }
//   });
//   console.log("locR", localArr);

//   for (const entry in obj) {
//     finalStr += obj[entry];
//   }
//   console.log("obj", obj);

//   return finalStr;
// }

// const list1 = ["zone", "abigail", "thetaaa", "form", "libe", "zas"]; // "abigailthetaaa"
// const n1 = 2;
// const list2 = ["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"]; // "ixoyx3452zzzzzzzzzzzz"
// const n2 = 3;
// const list3 = ["wlwsasphmxx", "owiaxujylentrklctozmymu", "wpgozvxxiu"]; //"wlwsasphmxxowiaxujylentrklctozmymu")
// const n3 = 2;

// // console.log(longestConsec(list1, n1));
// console.log(longestConsec(list2, n2));
// // console.log(longestConsec(list3, n3));

// //1 create while whith till array length is not egual with k
// //2 call reduce sort and find biggest string






// function encrypt(text, n) {
//   if (text === null || n <= 0) {
//     return text;
//   }
//   let leftHalf = "";
//   let rightHalf = "";
//   let fullText = text;

//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < fullText.length; j++) {
//       const element = fullText[j];
//       if (j % 2 !== 0) {
//         leftHalf += element;
//       } else {
//         rightHalf += element;
//       }
//     }

//     fullText = leftHalf + rightHalf;
//     leftHalf = "";
//     rightHalf = "";
//   }

//   return fullText;
// }

// function decrypt(encryptedText, n) {
//   if (encryptedText === null || n <= 0) {
//     return encryptedText;
//   }

//   let leftHalf, rightHalf;
//   let fullText = encryptedText;
//   let halfIndex = Math.floor(encryptedText.length / 2);

//   for (let j = 0; j < n; j++) {
//     leftHalf = fullText.slice(0, halfIndex);
//     rightHalf = fullText.slice(halfIndex);
//     fullText = "";

//     for (let i = 0; i < Math.ceil(encryptedText.length / 2); i++) {
//       fullText += rightHalf[i];

//       if (typeof leftHalf[i] !== "undefined") {
//         fullText += leftHalf[i];
//       }
//     }
//   }

//   return fullText;
// }

// const text1 = "1234567890";
// const lvls = 1;

// const paswword1 = encrypt(text1, lvls);
// const paswword1Decrypted = decrypt(paswword1, lvls);

// console.log("encrypted--", paswword1);
// console.log("decrypted--", paswword1Decrypted);


// function Xbonacci(signature, n) {
//   let newArr = [...signature];

//   if (n < signature.length) {
//     for (let i = 0; i < signature.length - n; i++) {
//       newArr.pop();
//     }
//   }

//   for (let j = 0; j < n - signature.length; j++) {
//     const sum = newArr.reduce((prev, cur, locI) => {
//       if (locI >= j) {
//         return prev + cur;
//       } else {
//         return 0;
//       }
//     }, 0);
//     newArr.push(sum);
//   }
//   return newArr;
// }

// //personal time 1h10m
// function findEvenIndex(arr) {
//   let leftSum = 0;
//   let rightSum = arr.reduce((prev, cur) => prev + cur, 0);

//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     rightSum = rightSum - element;

//     if (rightSum === leftSum) {
//       return i;
//     }
//     leftSum += element;
//   }

//   return -1;
// }


// //personal time 1h10m
// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];

//     let rightSum = 0;
//     let leftSum = 0;
//     rightSum = arr.reduce((prev, cur, locI) => {
//       if (locI > i) {
//         return prev + cur;
//       } else {
//         leftSum += prev + cur;
//         return 0;
//       }
//     }, -element);

//     if (rightSum === leftSum) {
//       return i;
//     }
//   }

//   return -1;
// }

// const arr1 = [1, 2, 3, 4, 3, 2, 1]; // index 3
// const arr2 = [1, 2, 3, 4, 5, 6]; //-1
// const arr3 = [20, 10, -80, 10, 10, 15, 35]; //0  because  20 at index 0 == right side of 20
// const arr4 = [1, 100, 50, -51, 1, 1];
// console.log(findEvenIndex(arr1));
// console.log(findEvenIndex(arr2));
// console.log(findEvenIndex(arr3));
// console.log(findEvenIndex(arr4));

// function findEvenIndex(arr) {
//   let itemSumLeft = 0;
//   let itemSumRight = 0;

//   for (const item of arr) {
//     itemSumRight += item;
//   }

//   let itemIndex = 0;

//   for (const item of arr) {
//     itemSumRight -= item;

//     if (itemSumLeft === itemSumRight) {
//       return itemIndex;
//     }
//     itemSumLeft += item;
//     itemIndex++;
//   }

//   return -1;
// }

// function findEvenIndex(arr) {
//   for (let index = 0; index < arr.length; ++index) {
//     const sumLeft = calculateSum(arr, 0, index - 1);
//     const sumRight = calculateSum(arr, index + 1, arr.length - 1);

//     if (sumLeft === sumRight) {
//       return index;
//     }
//   }

//   return -1;
// }

// function calculateSum(arr, indexFrom, indexTo) {
//   let sum = 0;

//   for (let index = indexFrom; index <= indexTo; ++index) {
//     sum += arr[index];
//   }

//   return sum;
// }

// function stockList(listOfArt, listOfCat) {
//   const map = new Map();
//   let finishedArr = "";

//   for (let i = 0; i < listOfCat.length; i++) {
//     const arrLetter = listOfCat[i];
//     for (let j = 0; j < listOfArt.length; j++) {
//       const code = listOfArt[j];

//       if (arrLetter === code[0]) {
//         const outerNumber = +code.slice(code.indexOf(" "));
//         if (map.has(arrLetter)) {
//           const mapNumber = map.get(arrLetter);
//           map.set(arrLetter, mapNumber + outerNumber);
//         } else {
//           map.set(arrLetter, outerNumber);
//         }
//       }

//       if (j === listOfArt.length - 2 && !map.has(arrLetter)) {
//         map.set(arrLetter, 0);
//       }
//     }
//   }

//   map.forEach((el, key) => {
//     if (key === listOfCat[listOfCat.length - 1]) {
//       finishedArr += `(${key} : ${el})`;
//     } else {
//       finishedArr += `(${key} : ${el}) - `;
//     }
//   });
//   return finishedArr;
// }

// function order(words) {
//   if (words === "") {
//     return "";
//   }
//   const localWordsArr = words.split(" ");
//   const obj = {};
//   const finishedArr = [];

//   for (const word of localWordsArr) {
//     for (const char of word) {
//       if (!isNaN(char)) {
//         obj[char] = word;
//       }
//     }
//   }

//   for (const key in obj) {
//     finishedArr.push(obj[key]);
//   }
//   return finishedArr.join(" ");
// }

// function solution(str, ending) {
//   const localStr = str.slice(-ending.length);
//   console.log(localStr);
//   if (localStr.includes(ending)) {
//     return true;
//   }
//   return false;
// }

// function solution(str, ending) {
//   const diference = str.length - ending.length;

//   for (let i = str.length - 1; i >= diference; i--) {
//     const elementI = str[i];
//     const elementJ = ending[i - diference];
//     if (elementI !== elementJ) {
//       return false;
//     }
//   }
//   return true;
// }

// //bigest safe js number to be stored corectly without bigInt
// const bigestSafe = Math.pow(2, 53) - 1; //9007199254740991 16length
// //with bigInt there are no limits
// const bigIntNumber = 123456789123456789n;
// //from primitive to BigInt()
// const number = 123456;
// const toBigInt = BigInt(number); //123456n

//checking if a value is a number
// console.log(Number.isFinite(20)); //true
// console.log(Number.isFinite("20")); //false
// console.log(Number.isFinite(23 / 0)); //false

// const calculateBetween = (min, max) => {
//   const calc = Math.round(Math.random() * (max - min) + min);
//   if (calc < 10 || calc > 20) {
//     console.log(`error`, calc);
//   } else {
//     console.log(`good`, calc);
//   }
// };

// for (let i = 0; i < 100; i++) {
//   calculateBetween(10, 20);
// }

//Math is doing type coercion
// Math.round("25.7"); //26
// Math.floor(-23.3); //-24
// Math.trunc(-23.3); //-23
// //to fixed is taking only number and converting with round to strings
// (2.7).toFixed(); // 3 *string
// (-2.7).toFixed(); // -3 *string
 
// let str = "One bot of another";

// const oneWord = function (str) {
//   return str.replaceAll(" ", "").toLowerCase();
// };

// console.log(oneWord(str));

// const upperFirstWord = function (str) {
//   const [first, ...other] = str.split(" ");
//   return [first.toUpperCase(), ...other].join(" ");
// };

// const mainFunction = function (str, fn) {
//   return fn(str);
// };

// console.log(mainFunction(str, upperFirstWord));

// const greet = (greeting) => {
//   return (name) => {
//     console.log(`${greeting} ${name}`);
//   };
// };

// greet("hey")("jonas");

// function deleteNth(arr, n) {}

// let arr1 = [1, 1, 1, 1]; //[1,1,1]
// let repeat1 = 3;

// let arr2 = [3, 3, 3, 4, 4, 5, 5, 5]; //[3,3,4,4,5,5]
// let repeat = 2;

// console.log(deleteNth(arr1, repeat1));

// const lufthansa = {
//   airline: "Lufthansa",
//   iataCode: "LH",
//   bookings: [],
//   book(flightNum, name) {
//     // console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${this.flightNum}`, name });
//   },
// };

// lufthansa.book(635, "Jonas Schmedtmann");

// const eurowings = {
//   name: "Eurowings",
//   iataCode: "EW",
//   bookings: [],
// };

// const book = lufthansa.book;
// book.call(eurowings, 23, "Sarah");
// // console.log(eurowings)

// const person = {
//   name: "Boris",
//   age: 30,
//   houses: 0,
//   people: [],
//   createOutput(name, age, houses) {

//       `${this.name} is ${this.age} years old and have ${this.houses} houses`

//     person.people.push({ name: this.name, age: this.age, houses: this.houses });
//   },
// };

// person.createOutput();

// const futurePerson1 = {
//   name: "Boris",
//   age: 33,
//   houses: 1,
// };
// const futurePerson2 = {
//   name: "Boris",
//   age: 35,
//   houses: 2,
// };
// const futurePerson3 = {
//   name: "Boris",
//   age: 37,
//   houses: 3,
// };

// const array = [];

// person.createOutput.call(futurePerson1, 1, "abc");
// person.createOutput.apply(futurePerson2, array);
// const storedFunction = person.createOutput.bind(futurePerson3);
// storedFunction();

// // console.log(person.people);

// // document
// //   .querySelector(".buy")
// //   .addEventListener("click", lufthansa.buyPlane.bind(lufthansa));

// const addTax = (rate, value) => value + value * rate;

// addTax(0.1, 200); //220
// const addVat = addTax.bind(null, 0.2); //setting this to null and first arg to 0.2 addVat is now same function as addTax just with preseted rate of 0.2
// // console.log(addVat(200)); //240

// const poll = {
//   question: "What is your favourite programming language?",
//   options: [`0: Javascript`, "1: Pyton", "2: Rust", "3: C++"],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     const answer = prompt(
//       `${this.question}\n ${this.options.join("\n")} Write option number`,
//       0
//     );
//     if (answer >= 0 && answer < this.answers.length) {
//       this.answers[answer]++;
//     }
//     this.displayResults(this.answers);
//   },
//   displayResults(type) {
//     if (typeof type === "object") {
//       console.log(type);
//     } else if (typeof type === "string") {
//       console.log(`Poll results are ${this.answers.join("")}`);
//     }
//   },
// };

// document
//   .querySelector(".add-items-button")
//   .addEventListener("click", poll.registerNewAnswer.bind(poll));

// // const array = [1, 2, 3, 4];

// // document
// //   .querySelector(".add-items-button")
// //   .addEventListener("click", poll.displayResults.bind(this, array));

// //imediately invoked function expressions IIFE

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(passengerCount);
//   };
// };

// const savedFunction = secureBooking();

// (function () {
//   const header = document.querySelector("h1");
//   header.style.color = "red";

//   document.querySelector("body").addEventListener("click", () => {
//     header.style.color = "blue";
//   });
// })();

// // //TEST DATA
// //ok amount === range 10% above and 10% below recomend portion

// const dogs = [
//   {
//     weight: 22,
//     curFood: 250,
//     owners: ["Alice", "Bob"],
//   },
//   {
//     weight: 8,
//     curFood: 200,
//     owners: ["Matilda"],
//   },
//   {
//     weight: 13,
//     curFood: 275,
//     owners: ["Sarah", "John"],
//   },
//   {
//     weight: 32,
//     curFood: 340,
//     owners: ["Michael"],
//   },
// ];

// const ownersEatTooMuch = [];
// const ownersEatTooLittle = [];
// const ownersEatOk = [];

// const calcCurentEatingStatus = function (obj) {
//   const curStatus =
//     obj.curFood > obj.recommendedFood + obj.recommendedFood / 10
//       ? "too much"
//       : obj.curFood < obj.recommendedFood - obj.recommendedFood / 10
//       ? "too little"
//       : "ok";
//   return curStatus;
// };

// dogs.forEach((obj) => {
//   obj.recommendedFood = Math.round(obj.weight ** 0.75 * 28);

//   if (obj.owners.includes("Sarah")) {
//     calcCurentEatingStatus(obj);
//   }

//   if (calcCurentEatingStatus(obj) === "too much") {
//     ownersEatTooMuch.push(...obj.owners);
//   } else if (calcCurentEatingStatus(obj) === "too little") {
//     ownersEatTooLittle.push(...obj.owners);
//   }

//   if (calcCurentEatingStatus(obj) === "ok") {
//     console.log(`true, ${obj.owners} its feeding ok his dog`);
//     ownersEatOk.push(...obj.owners);
//   }
// });

// const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));

// const tooMuchString =
//   ownersEatTooMuch.join(" and ") + "'s " + "dogs eat too much";
// const tooLittleString =
//   ownersEatTooLittle.join(" and ") + "'s " + "dogs eat too little";

// // console.log(tooMuchString);
// // console.log(tooLittleString);
// // console.log(ownersEatOk);

// const shalowCopyDogs = dogs
//   .slice()
//   .sort((obj1, obj2) => obj1.recommendedFood - obj2.recommendedFood);

// //
// //
// //
// //
// //!exercise recreate examples below using only reduce
// //1
// const bankDepositSum = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((number) => number > 0)
//   .reduce((prev, cur) => prev + cur, 0);

// // console.log(bankDepositSum);

// //2
// const atLeastOneThousand1 = accounts
//   .flatMap((acc) => acc.movements)
//   .filter((number) => number >= 1000).length;
// // console.log(atLeastOneThousand1);

// //2.1
// const atLeastOneThousand2 = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count), 0);
// // console.log(atLeastOneThousand2);

// //3
// const sums = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// // console.log(sums);

// //3.1
// const { deposits, withdrawals } = accounts
//   .flatMap((acc) => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       sums[cur > 0 ? "deposits" : "withdrawals"] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// // console.log(deposits, withdrawals);

// //4
// //this i a nice title case -> This Is a Nice Title Case
// const convertTitleCase = function (title) {
//   const capitalize = (str) => str[0].toUpperCase() + str.slice(1);
//   const exceptions = ["a", "an", "the", "but", "or", "on", "in", "with"];

//   const titleCase = title
//     .toLowerCase()
//     .split(" ")
//     .map((word) => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(" ");
//   return capitalize(titleCase);
// };

// const word1 = "this i a nice title case";
// const word2 = "and this i a nice title case";
// console.log(convertTitleCase(word1)); //This I a Nice Title Case
// console.log(convertTitleCase(word2)); // "And This I a Nice Title Case"

// labelBalance.addEventListener("click", function (e) {
//   const allValues = Array.from(
//     document.querySelectorAll(".movements__value"),
//     (el) => Number(el.textContent.replace("€", ""))
//   );
// });

// //[1,2,3,4,5,6,7,8,9,10]
// const programArray1 = Array.from({ length: 10 }, (_, i) => i + 1);

// //create a nonFixed length array with 100 random dice roll from 1 to 6
// const programArray2 = Array.from({ length: 100 }, (_, i) =>
//   Math.round(Math.random() * 5 + 1)
// );

// const arr = [1, 2, 3, 4, 5];
// arr.fill("a", 2, 4); //arr ===[1, 2, 'a', 'a', 5]

//any number in the array that is bigger than 0
// const anyDeposits = movements.some((mov) => mov > 0); //true

// //for every amount in the array return true only if all are bigger than 0
// const allDeposits = movements.every((mov) => mov > 0); //false

// //flat nested array with specific level deep default = flat() ===flat(1)
// const arrDeep = [[1, 2, [3, 4]], 5];
// const returnedArr = arrDeep.flat(2); //[1,2,3,4,5]

// //flatMap is map with flat(1) combined
// const arrays = [{ arr: [1, 2, 3] }, { arr: [4, 5, 6] }, { arr: [7, 8, 9] }];
// const returnedArr2 = arrays.flatMap((arr) => arr.arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const account = accounts.find((acc) => acc.userName === "js");

// const eurToUsd = 1.1;

// const totalDepositsUsd = movements
//   .filter((mov) => mov > 0)
//   .map((mov) => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUsd);

// //1MAP
// function deleteNth(arr, n) {
//   const newArr = [];
//   const stat = {};
//   for (const element of arr) {
//     if (stat.hasOwnProperty(element)) {
//       stat[element]++;
//     } else {
//       stat[element] = 1;
//     }

//     if (stat[element] <= n) {
//       newArr.push(element);
//     }
//   }
//   return newArr;
// }

// const array4 = [15, 15, 15, 20, 20, 20, 30, 30];
// const repeat4 = 2;

// console.log(deleteNth(array4, repeat4));

// function deleteNth(arr, n) {
//   const map = new Map();
//   const newArr = [];

//   for (el of arr) {
//     if (!map.has(el))
//       // Add to the map
//       map.set(el, 1);
//     else if (map.get(el) === n)
//       // Skip this element
//       continue;
//     // Increment this element
//     else map.set(el, map.get(el) + 1);

//     newArr.push(el);
//   }

//   return newArr;
// }

// const max = movements.reduce((prev, cur) => {
//   if (prev > cur) {
//     return prev;
//   } else {
//     return cur;
//   }
// }, movements[0]);
// console.log(max);
// //1 if age<=2{
// // humanAge*2
// // }else{
// // humanAge*4
// }

// const calcAverageHumanAge = function (arrDogAges) {
//   let humanAge = arrDogAges.map((dog) => {
//     return dog <= 2 ? dog * 2 : 16 + dog * 4;
//   });
//   humanAge = humanAge.filter((age) => age >= 18);
//   return humanAge.reduce((prev, curent) => prev + curent) / humanAge.length;
// };

// const calcAverageHumanAge2 = function (arrDogAges) {
//   return arrDogAges
//     .map((dog) => {
//       return dog <= 2 ? dog * 2 : 16 + dog * 4;
//     })
//     .filter((age) => age >= 18)
//     .reduce((prev, curent, i, arr) => {
//       console.log(arr.length);
//       return prev + curent / arr.length;
//     }, 0);
// };

// const data1 = [5, 2, 4, 1, 15, 8, 3];
// console.log(calcAverageHumanAge2(data1));

//
//
//

// const balance = movements.reduce((prev, cur, i, arr) => {
//   debugger;
//   return prev + cur;
// }, 0);

// console.log(balance);

// const deposits = movements.filter((mov) => {
//   return mov > 0;
// });

// const withdrawals = movements.filter((mov) => mov < 0);

// console.log(deposits);
// console.log(withdrawals);

// const convertingMovements = movements.map((mov) => mov * 1.1);

//
//
// const juliaArr = [3, 5, 2, 12, 7];
// const kateArr = [9, 16, 6, 8, 3];

// const checkDogs = function (juliaArr, kateArr) {
//   const juliaLocalArr = juliaArr.slice(1, -2);
//   const combinedData = [...juliaLocalArr, ...kateArr];
//   combinedData.forEach((dog, index) => {
//     console.log(
//       `Dog number ${index} is ${
//         dog >= 3 ? "an adult" : "a puppy"
//       } and is ${dog} years old`
//     );
//   });
// };

// checkDogs(juliaArr, kateArr);

// const dreamsBtn = document.querySelector(".add-items-button");

// const jonas = {
//   year: 1991,
//   firstName: "Jonas",
//   calcAge: function () {
//     console.log(this);

//     const isMillenial = () => {
//       //arrow function as method but not nested directly "this of is millenial is actualy this of calc age"
//       console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },
//   greet: () => {
//     //be carefoul of using arrow functions with "this" as direct methods because they ommit "this"
//     console.log(`hey ${this.firstName}`);
//   },
// };

// jonas.calcAge();

// const addNumbers = function (a, b) {
//   console.log(arguments);
// };

// const addNumbersArrow = (a, b) => {
//   console.log(arguments);
// };

// addNumbers(2, 5, 7);
// addNumbersArrow(2, 5, 7);

// let age = 30;
// let oldAge = age;
// age = 31;

// const me = {
//   name: "jonas",
//   age: 30,
// };

// const friend = me;

// friend.age = 27;

// console.log(me);

// let lastName = "Wiliams";
// let oldLastName = lastName;
// lastName = "Davis";

// const jessica = {
//   firstName: "jessica",
//   lastName: "Williams",
//   age: 27,
// };
// //merging two objects or create a deep clone new object
// const oldJessica = Object.assign({}, jessica);
// jessica.age = 30;

//

//

// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle);

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   returnArray: function (firstIndex, secondIndex) {
//     return [this.categories[firstIndex], this.categories[secondIndex]];
//   },
// };

// let [another, , third] = restaurant.categories;
// [another, third] = [third, another]; //another = third third= another

// const [one, two] = restaurant.returnArray(0, 3); //one = Italian two = Vegetarian
// const four = restaurant.returnArray(0, 3); //four = [Italian, Vegetarian]

// const nested = [2, 4, [5, 6]];

// const [first, , [five, six]] = nested;
// console.log(first, five, six);

// const [p = 1, q = 1, r = 1] = [8, 9]; // asign default values for variable destructuring
// console.log(p, q, r);

// const openingHours = {
//   thu: {
//     open: 12,
//     close: 22,
//   },
//   fri: {
//     open: 11,
//     close: 23,
//   },
//   sat: {
//     open: 0,
//     close: 24,
//   },
//   sun: {
//     open: [24],
//   },
// };

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via angelo Tavanti 23, Firenze,Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours,

//   order: function (firstIndex, secondIndex) {
//     return [this.categories[firstIndex], this.categories[secondIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     return `Order recived ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`;
//   },
//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(`This is your pasta with ${ing1},${ing2} and ${ing3}`);
//   },
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct"],
//   [false, "Try again"],
// ]);

// const gameEvents = new Map([
//   [12, "Goal"],
//   [36, "Substitution"],
//   [47, "Goal"],
//   [61, "Yellow Card"],
//   [64, "Red Card"],
//   [70, "Substitution"],
//   [72, "Substitution"],
//   [76, "Goal"],
//   [80, "Goal"],
//   [92, "Yellow Card"],
// ]);

//1
// const events = new Set();
// for (const [key, value] of gameEvents) {
//   events.add(gameEvents.get(key));
// }

// const events = [...new Set(gameEvents.values())];
// console.log(events);
// //2
// gameEvents.delete(64);

// //3
// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[First Half] ${key}:${value}`);
//   } else {
//     console.log(`[Second Half] ${key}:${value}`);
//   }
//   // console.log(
//   //   key < 45 ? `[First Half] ${key}:${value}` : `[Second Half] ${key}:${value}`
//   // );
// }

// //4

// const average = (92 / gameEvents.size).toFixed();
// console.log(`Event happened at every ${average} minutes`);

// const set = new Set(["a", 2, "b", 3, "c", 4]);

// console.log(set);
// for (const [key, value] of question) {
//   key;
//   value;
// }

// const answer = Number(prompt("What is your answer? *type 1/2/3", 1));
// // console.log(`You selected ${question.get(answer)}`);

// if (answer === 3) {
//   console.log(question.get(true));
// } else {
//   console.log(question.get(false));
// }

//building array from map
// console.log([...question]);

// console.log(answer === 3 ? question.get(true) : question.get(false));

// const mapTest = new Map();
// // mapTest.set(document.querySelector(".add-items-button"), "h1");
// mapTest.set([1, 2, 3], "array");
// mapTest.set("array", [1, 2, 3]);
// // console.log(mapTest);

// const anotherMap = new Map([
//   [1, 2],
//   [["abc"], 2],
//   [2, "abc"],
// ]);
// console.log(anotherMap);

// console.log(Object.entries(openingHours));

// const mapFromObj = new Map(Object.entries(openingHours));
// console.log(mapFromObj);

// const rest = new Map();
// rest.set("name", "Clasico Italiano");
// rest.set(1, "Firenze", "Italy");
// rest.set(2, "Lisobon", "Portugal");

// rest
//   .set("categories", [
//     "Focaccia",
//     "Bruschetta",
//     "Garlic Bread",
//     "Caprese Salad",
//   ])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are close :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(true));

// console.log(rest);

// const arr1 = [2, 3];
// rest.set(arr1, "test");
// console.log(rest.get(arr1));

// rest.clear();
// console.log(rest);
// const arr = ["Pizza", 1, 1, "Pizza", "Garlic"];
// const set = new Set(arr);
// set;

// console.log(set.has("Pizza"));
// set.add("pizza");
// set.add("another Pizza");
// set;
// set.delete("pizza");

// for (const element of set) {
//   console.log(element);
// }

// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)]; //create array from set
// staffUnique

// const jonasName = "Jonasschemedtmann";
// const uniqueLetters = new Set(jonasName).size; // count unique values
// uniqueLetters;

// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }

// for (const day of Object.values(openingHours)) {
//   console.log(day);
// }

// const entries = Object.entries(openingHours);
// console.log("hey", entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`on ${day} we open at ${open} and close at ${close}`);
// }

// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   const open = openingHours?.[day]?.open;
//   console.log(`on ${day} restaurant open at ${open ?? "closed"}`);
// }

// //optional chaining
// //check monday if exist for not showing errors
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon);
// console.log(restaurant.openingHours?.fri);

// console.log(restaurant.order?.(2, 3) ?? "method does not exist");
// console.log(restaurant.orderCar?.(2, 3) ?? "method does not exist");

// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// //if numGuests is falsy values null undefinded or 0
// const guests1 = 0 || 10;
// const guests2 = undefined || 10;
// console.log(guests1);
// console.log(guests2);

// // if numGuests is only nullish values null/undefined but not zero or ""
// const guests3 = 0 ?? 10;
// const guests4 = undefined ?? 10;
// console.log(guests3);
// console.log(guests4);

// const or1 = 2 || "jonas"; //2
// const or2 = 0 || "jonas"; //"jonas"

// const and1 = 2 && "jonas"; //jonas
// const and2 = 0 && "jonas"; //0

// const serverObj = {
//   time: "22:30",
//   address: "Via del sole",
//   mainIndex: 2,
//   starterIndex: 2,
// };

// console.log(restaurant.orderDelivery(serverObj));

// const mainMenuCopy = [...restaurant.mainMenu, "+oneMore"];

// console.log(mainMenuCopy);
// console.log();

// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// const str = "Name";

// const arrayLetters = [...str];

// console.log(arrayLetters);

// // const ingredients = [
// //   prompt(`Give me first ingredient`),
// //   prompt(`second?`),
// //   prompt(`third?`),
// // ];

// // console.log(ingredients);

// // restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, foundedIn: 1998, founder: "Guiseppe" };
// newRestaurant.name = "hey";
// newRestaurant.starterMenu = ["plusOne", ...restaurant.starterMenu];
// console.log(newRestaurant.name);
// console.log(newRestaurant.starterMenu);

// console.log(restaurant.mainMenu === newRestaurant.mainMenu);
// console.log(restaurant.starterMenu === newRestaurant.starterMenu);

// const [pizza, , risotto, ...restFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(restFood);

// const { sat: saturday, sun, ...weekdays } = restaurant.openingHours;
// console.log(saturday);
// console.log(sun);
// console.log(weekdays);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// const game = {
//   team1: "Bauern Munich",
//   team2: "Borussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Daies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// for (const [number, player] of game.scored.entries()) {
//   console.log(`Goal ${number + 1} ${player}`);
// }

// //2
// let average = 0;
// const odds = Object.values(game.odds);
// for (const oddValue of Object.values(game.odds)) {
//   average += oddValue;
// }
// average /= odds.length;
// console.log(average);

// //3
// console.log(`Odd of draw ${game.team1}`);

// for (const [oddKey, oddValue] of Object.entries(game.odds)) {
//   console.log(
//     `Odd of ${game[oddKey] ? "victory" : ""} ${
//       game[oddKey] ?? "draw"
//     }:${oddValue}`
//   );
// }

// //4
// const scores = {};
// // let count = 0;

// for (const scoredPlayer of game.scored) {
//   if (scores[scoredPlayer] === 1) {
//     scores[scoredPlayer]++;
//   } else {
//     scores[scoredPlayer] ?? (scores[scoredPlayer] = 1);
//   }
// }

// console.log(scores);

// function duplicateCount(text) {
//   let localText = [...text.toLowerCase()];
//   let set = new Set();
//   for (let i = 0; i < localText.length; i++) {
//     const elementI = localText[i];
//     for (let j = i + 1; j < localText.length; j++) {
//       const elementJ = localText[j];
//       if (elementI === elementJ) {
//         set.add(elementI);
//       }
//     }
//   }
//   return set.size;
// }

// const word1 = "aabbcde";
// const word2 = "Indivisibility";
// const word3 = "";

// console.log(duplicateCount(word1));
// console.log(duplicateCount(word2));
// console.log(duplicateCount(word3));

// let inputs = [1, -2, -8, 4, 5];
// let n = inputs.length;
// let min = null;

// for (let i = 0; i < n; i++) {
//   const temp = parseInt(inputs[i]); //  temperature  -273 to 5526
//   if (min === null) { // (min?? min = temp)
//     min = temp;
//   }
//   if (temp > 0 && temp < min) {
//     min = temp;
//   } else if (temp < 0 && temp < -min) {
//     min = temp;
//   }
// }

// // Write an answer using console.log()
// // To debug: console.error('Debug messages...');

// console.log(+min);

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const [i, name] of menu.entries()) {
//   console.log(i, name);
// }

// const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;

// const allPlayers = [...players1, ...players2];

// const playersFinal = [...players1, "Thiago", "Coutinho", "Peristic"];

// const { team1, x: draw, team2 } = game.odds;

// function printGoals(...playersNames) {
//   for (const playerName of playersNames) {
//     let localCount = 0;
//     for (const scored of game.scored) {
//       if (playerName === scored) {
//         localCount++;
//       }
//     }
//     console.log(`${playerName} has ${localCount}`);
//   }
// }

// printGoals("Davies", "Muller", "Lewandowski", "Kimmich");

// team1 < team2 && console.log("team1");
// team1 > team2 && console.log("team2");

// function comp(array1, array2) {
//   if (array1.length === 0 || array2.length === 0) {
//     return false;
//   }
//   const sortedJ = array1.sort((x, y) => x - y);
//   const sortedK = array2.sort((x, y) => x - y);

//   for (let index = 0; index < sortedJ.length; index++) {
//     const element = sortedJ[index];
//     if (Math.pow(element, 2) !== sortedK[index]) {
//       return false;
//     }
//   }
//   return true;
// }

// const a = [121, 144, 19, 161, 19, 144, 19, 11];
// const b = [121, 14641, 20736, 361, 25921, 361, 20736, 361];

// const c = [121, 144, 19, 161, 19, 144, 19, 11];
// const d = [
//   11 * 11,
//   121 * 121,
//   144 * 144,
//   19 * 19,
//   161 * 161,
//   19 * 19,
//   144 * 144,
//   19 * 19,
// ];

// const e = [4, 5, 5, 5, 1, 9, 7, 10, 8, 5, 0, 3, 1, 8, 0, 8, 9, 0, 8];
// const f = [
//   81, 64, 9, 2, 100, 1, 16, 64, 25, 0, 25, 64, 81, 25, 49, 0, 25, 0, 64,
// ]; //FALSE

// let g = [4, 0, 9, 1, 0, 6, 7, 9, 7, 1, 5, 0, 10, 3, 3, 1, 0, 2, 6, 4];
// let h = [81, 36, 1, 100, 0, 49, 1, 4, 0, 0, 16, 16, 9, 49, 36, 1, 25, 9, 0, 81];

// let j = [7, 1, 4, 6, 10, 3, 5, 8, 0, 2, 0, 1, 8, 4, 8, 4, 9, 8, 7, 6];
// let k = [
//   36, 1, 16, 64, 25, 9, 16, 1, 16, 1, 0, 49, 100, 64, 49, 4, 81, 64, 36, 64,
// ];

// console.log(comp(a, b)); //true
// console.log(comp(c, d)); //true
// console.log(comp(e, f)); // false
// console.log(comp(g, h)); // true
// console.log(comp(j, k)); // false

// const checkMiddleSeat = function (model) {
//   // if (model.lastIndexOf("E") !== -1 || model.lastIndexOf("C") !== -1) {
//   //   return "middle";
//   // } else {
//   //   return "not middle";
//   // }
//   const s = model.slice(-1);
//   return s === "E" || s === "C" ? "middle" : "not middle";
// };

// console.log(checkMiddleSeat("11B"));
// checkMiddleSeat("11E");
// checkMiddleSeat("23C");

// let jonas = "JONaS";

// const priceGB = "288,97E";
// const priceUS = priceGB.replace("E", "$").replace(",", ".");

// let repeatedWords = " A dog jumps with another dog";
// repeatedWords = repeatedWords.replaceAll("dog", "monkey");
// repeatedWords;

// let tryingReg = " A dog jumps with another dog";
// tryingReg = tryingReg.replace(/dog/g, "monkey");
// repeatedWords;

// const string1 = "AirBus and";
// console.log(string1.startsWith("Air"));
// console.log(string1.startsWith("AirB"));
// console.log(string1.startsWith("Airb"));
// console.log(string1.endsWith("and"));

// const jonas1 = "Jonas Schmedtmann";

// const [firstName, secondName] = jonas1.split(" ");

// console.log(firstName);
// console.log(secondName);

// const passenger = "jessica ann davis ";
// let fixedPassenger = passenger.trim().toLowerCase().split(" ");
// let fixedArray = [];

// for (let iterator of fixedPassenger) {
//   fixedArray.push(iterator[0].toUpperCase() + iterator.slice(1));
// }

// fixedArray = fixedArray.join(" ");
// fixedArray;

// const creditCard = 2046504608904444;
// const convertToMasked = function (number) {
//   const lastFour = (number + "").slice(-8, -4);
//   return lastFour.padStart(12, "*").padEnd(16, "*");
// };

// console.log(convertToMasked(creditCard));

// const airplane = "Airplane ";
// const repeatedAirplane = airplane.repeat(5);
// repeatedAirplane;

// first_name
// second_name
// third_name
// fourth_name
// fifth_name
//first_name\nsecond_name\n

// const body = document.querySelector("body");
// const textarea = document.createElement("textarea");
// const button = document.createElement("button");
// textarea.rows = "10";
// textarea.cols = "30";
// body.append(textarea);
// body.append(button);

// const convertToCammelCase = function () {
//   const splittedArray = textarea.value.trim().toLowerCase().split("\n");
//   let resultArray = [];

//   for (let i = 0; i < splittedArray.length; i++) {
//     const element = splittedArray[i];

//     const [firstWord, secondWord] = element.split("_");

//     let wholeWord =
//       firstWord +
//       secondWord.replace(secondWord[0], secondWord[0].toUpperCase()) +
//       " ";
//     wholeWord = wholeWord.padEnd(wholeWord.length + i + 1, "*");
//     resultArray.push(wholeWord);
//   }
//   resultArray = resultArray.join("\n");
//   console.log(resultArray);
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(bills[i] + tips[i]);
// }

// function calcAverage(arr) {
//   let sum = 0;
//   for (const bill of arr) {
//     sum += bill;
//   }
//   return sum / arr.length;
// }

// console.log(calcAverage(bills));
// console.log(bills);
// console.log(tips);
// console.log(totals);

// const arr1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const arr2 = ["error", "error", "error"];
// const arr3 = [0, 0, 0];
// const arr4 = [10, 10, 10];

// function calcAmplitude(arr) {
//   let minNumber = null;
//   let maxNumber = null;
//   for (const iterator of arr) {
//     if (typeof iterator === "number") {
//       if (minNumber === null) {
//         minNumber = iterator;
//         maxNumber = iterator;
//       } else if (iterator < minNumber) {
//         minNumber = iterator;
//       } else if (iterator > maxNumber) {
//         maxNumber = iterator;
//       } else {
//         continue;
//       }
//     }
//   }
//   if (minNumber !== null) {
//     return `The amplitude is ${
//       maxNumber - minNumber
//     } with minimal temperature of ${minNumber}deg and maximal temperature of ${maxNumber}deg`;
//   } else {
//     return "No available temperatures";
//   }
// }

// console.log(calcAmplitude(arr1));
// console.log(calcAmplitude(arr2));
// console.log(calcAmplitude(arr3));
// console.log(calcAmplitude(arr4));

// //constructor function
// const Person = function (firstName, birthYear) {
//   //instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //never do this
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };
// //1.New {} is created
// //2. function is called, this = {}
// //3.{} linked to prototype
// //4.function automaticaly return {}

// const jonas = new Person("jonas", 1991);
// console.log(jonas);

// const admin = new Person("admin", 1991);
// console.log(admin);

// console.log(admin instanceof Person);

// //Prototypes

// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// jonas.calcAge();

// //checkin if Person prototype is prototype of jonas also
// console.log(Person.prototype.isPrototypeOf(jonas));

// console.log(jonas.__proto__ === Person.prototype);

// Person.prototype.species = "Homo Sapiens";

// console.log(jonas.hasOwnProperty("firstName"));
// //true because its direct property

// console.log(jonas.hasOwnProperty("species"));
// //false because its not direct property, it has access to the prototype method.

// //call on instance to see all prototype not direct methods
// console.log(jonas.__proto__);

// const arr = [2, 3, 4];
// console.log(arr.__proto__);

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.make, this.speed);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.make, this.speed);
// };

// const bmw = new Car("BMW", 280);
// const mercedes = new Car("Mercedes", 280);
// const audi = new Car("Audi", 300);

// bmw.accelerate();
// bmw.accelerate();
// mercedes.brake();
// mercedes.brake();
// audi.accelerate();

// const Player = function (kills, place) {
//   this.kills = kills;
//   this.place = place;
// };

// Player.prototype.calculatePoints = function () {
//   let pointsPerPlace = 0;
//   switch (this.place) {
//     case 1:
//       pointsPerPlace = 10;
//       break;
//     case 2:
//       pointsPerPlace = 8;
//       break;
//     case 3:
//       pointsPerPlace = 7;
//       break;
//     case 4:
//       pointsPerPlace = 6;
//       break;
//   }

//   pointsPerPlace = pointsPerPlace + this.kills * 2;
//   return pointsPerPlace;
// };

// Player.prototype.calculateMoney = function () {
//   return;
// };

// const imperialHal = new Player(10, 2);
// const abraiele = new Player(8, 1);
// const reps = new Player(7, 3);

// console.log(imperialHal.calculatePoints());
// console.log(abraiele.calculatePoints());
// console.log(reps.calculatePoints());

// const person = {
//   firstName: "Brad",
//   secondName: "Pit",
//   get fullName() {
//     return `${this.firstName} ${this.secondName}`; //read only
//   },
//   set fullName(val) {
//     //write only
//     const parts = val.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   },
// };

// console.log(person.fullName);
// person.fullName = "mosh djabi";
// console.log(person.fullName);

// var singleNumber = function (nums) {
//   let hash1 = new Map();
//   let hash2 = new Map();

//   for (const number of nums) {
//     if (hash1.has(number)) {
//       hash2.set(number);
//       hash1.delete(number);
//     } else {
//       hash1.set(number);
//     }
//   }

//   // hash2.forEach((value, key) => hash1.delete(key));

//   const iterator1 = hash2[Symbol.iterator]();
//   for (const number of iterator1) {
//     hash1.delete(number[0]);
//   }
//   return [...hash1][0][0];
// };

// var singleNumber0 = function (nums) {
//   for (let i = 0; i < nums.length; i++) {
//     const element = nums[i];
//     if (nums.indexOf(element) === nums.lastIndexOf(element)) {
//       return element;
//     }
//   }
// };

// var singleNumber1 = function (nums) {
//   while (nums.length > 1) {
//     outer: for (let i = 0; i < nums.length; i++) {
//       const element1 = nums[i];
//       for (let j = i + 1; j < nums.length; j++) {
//         const element2 = nums[j];
//         if (element1 === element2) {
//           nums.splice(j, 1);
//           nums.splice(i, 1);
//           continue outer;
//         }
//       }
//     }
//   }
//   return nums[0];
// };
// //
// //
// //
// //hash map
// var singleNumber2 = function (nums) {
//   debugger;
//   let hash = new Map();
//   let length = nums.length;

//   for (let i = 0; i < length; i++) {
//     if (hash.has(nums[i])) {
//       hash.delete(nums[i]);
//     } else {
//       hash.set(nums[i], 1);
//     }
//   }
//   console.log(hash);
//   return [...hash][0][0];
// };
// //xor
// var singleNumber3 = function (nums) {
//   let bitsum = 0;
//   for (let i = 0; i < nums.length; i++) {
//     bitsum = bitsum ^ nums[i];
//   }
//   return bitsum;
// };

// //set
// const singleNumber = (array) => {
//   let setSum = 0;
//   let arraySum = 0;
//   const set = new Set(array);
//   for (const number of set) {
//     setSum += number;
//   }
//   for (const number of array) {
//     arraySum += number;
//   }
//   return setSum * 2 - arraySum;
// };

// let nums1 = [2, 4, 6, 2, 5, 4, 6];
// let nums2 = [4, 1, 2, 1, 2];
// let nums3 = [1];
// let nums4 = [2, 2, 4, 4, 5, 5, 6, 6, 7];

// console.log(singleNumber(nums1));
// console.log(singleNumber(nums2));
// console.log(singleNumber(nums3));
// console.log(singleNumber(nums4));

// //hasm map strings
// const singleString1 = (array) => {
//   let hash = new Map();

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (hash.has(element)) {
//       hash.delete(element);
//     } else {
//       hash.set(element);
//     }
//   }
//   return [...hash][0][0];
// };

// let array1 = ["a", "a", "b", "b", "c", "d", "d"];

// console.log(singleString1(array1));

// //set
// const singleString = (array) => {
//   const set = new Set(array);
//   outer: for (let i = 0; i < array.length; i++) {
//     const element1 = array[i];
//     for (let j = i + 1; j < array.length; j++) {
//       const element2 = array[j];
//       if (element1 === element2) {
//         continue outer;
//       }
//     }
//     set;
//   }
// };

// let array2 = ["a", "a", "b", "b", "c", "d", "d"];

// console.log(singleString(array1));

// const brandNewSet = new Set([1, 2, 4]);
// brandNewSet.add(2); //not added because its alrready in the set
// brandNewSet.add("2"); //added because its a string
// brandNewSet.delete("2"); //deleted the string
// console.log(brandNewSet.has(2)); //true
// console.log(brandNewSet.has("2")); //false
// for (const entry of brandNewSet.values()) {
//   console.log(entry); //single values 2,2,4
// }
// brandNewSet.clear();
// brandNewSet;

// const firstPerson = { name: "Bob" };
// const secondPerson = { name: "John" };

// const personData = new Map([[firstPerson, [{ date: "yesterday", price: 10 }]]]); //first person in map can be  a variable
// personData.get(firstPerson); //[{ date: "yesterday", price: 10 }]
// personData.set(secondPerson, [{ date: "today ", age: 11 }]);

// for (const array of personData) {
//   console.log(array);
// }
// for (const [key, value] of personData) {
//   //array destructuring
//   console.log(key); //{name: 'Bob'},{name: 'John'}
//   console.log(value); // [{date..}],[{date..}]
// }
// for (const key of personData.keys()) {
//   console.log(key);
// }
// for (const value of personData.values()) {
//   console.log(value);
// }

// const array = [2, 4, 6, 8];

// const returnedFiltered = array.filter((x) => x > 5);
// returnedFiltered;

// const obj = [];

// array.map((number) => obj.push({ num: number }));
// obj;

// const mappedValues = array.map((number) => ({ num: number }));
// mappedValues;

// const addedNumbersOfArray = array.reduce((x, y) => x * y);

// const findMax = (array) => {
//   const max = Math.max(...array);
//   const min = Math.min(...array);
//   return [min, max];
// };
// const [min, max] = findMax(array);

// const noDuplicates = new Set();

// let person = { name: "Max" };
// const persons = new WeakSet();
// persons.add(person);
// person = null;
// //with WeakSet { name: "Max" } compare to Set() will be garbage collected if no other reference

// let person2 = { name: "Max" };
// let newPersons = new WeakMap();
// newPersons.set(person2, "extra info");
// person2 = null;   //the same as WeakSet if no reference for { name: "Max" } garbage collection will kick in

// let array = ["A big wall", " mouse", " big cat"];
// let joinedArrayWithoutComma = array.join("");
// let joinedArrayWithPlus = array.join(" + ");
// //joinedArrayWithoutComma = A big wall mouse big cat
// //joinedArrayWithPlus =A big wall +  mouse +  big cat

// const prices = [1, 2, 3, 4, 5];
// Math.min(prices); // does not work, work only with numbers
// Math.min(...prices);
// const copiedByReference = prices; //true
// const branNewArray = [...prices]; //works because its extracting all numbers
// branNewArray === prices; //false

// //array destructuring
// const array66 = ["max", "bob", "paul", 5, 6, 7, 8];
// const [firstplayer, secondplayer, thirdplayer, ...remainedNumbers] = array66; //remainedNumbers is a rest operator here, meaning is an array
// console.log(firstplayer); // max
// console.log(secondplayer); // bob
// console.log(thirdplayer); // payl
// console.log(remainedNumbers); // [5,6,7,8]

// const array = ["a", "b", "c"];
// let returnedArrayLength = array.unshift("e"); // add an element in the front of the array

// const array2 = ["a", "b", "c"];
// let savedSpliced = array2.splice(0, 1, "e", "f"); // delete one item at position 0 and replace with
// let deleteExcept = array2.splice(1);
// let deleteLastElement = array2.splice(-1, 1); //delete last element

// const firstArr = [0, 1, 2, 3];

// const copiedByReference = firstArr;
// firstArr.push(4);
// console.log(firstArr === copiedByReference); // true copiedByReference is the same object its copied the link

// const secondArr = firstArr.slice();
// console.log(firstArr == secondArr); //false slice is making another object and not copy the link to the old

// const arr3 = ["a", "b", "c", "d", "e"];
// let lastElements = arr3.slice(-3, -1); // lastElements =  ["d", "e"]
// let allExceptFirstTwo = arr3.slice(2); //allExceptFirstTwo = ["c", "d", "e"]

// let arr4 = ["a", "b", "c"];
// const arr5 = ["d", "e"];

// let arr6 = arr4.concat(arr5);
// arr4 = arr4.concat(arr5);
// console.log(arr4 === arr6); //false

// const personData = [{ name: "john" }, { name: "peter" }];
// // indexOf({ name: "peter" }) will not work because its creating a new object when its calling

// const peter = personData.find((person) => {
//   return person.name === "peter";
// });
// console.log(peter); //==={ name: "peter" }
// peter.name = "Bruce";
// console.log(peter); // ==={ name: "peter" }

// const peterIndex = personData.findIndex((person) => {
//   //returns index
//   return person.name === "peter";
// });

// console.log(peterIndex);

// const beasts = ["ant", "bison", "camel", "duck", "bison"];

// console.log(beasts.indexOf("bison")); // returns 1 or -1 if not find

// console.log(beasts.includes("bison")); //true

// const beasts2 = ["ant", "bison", "camel", "duck", "bison"];
// const beastsArray = [];

// beasts2.forEach((beast, index, array) => {
//   const beastObj = { index: index, beast: beast + index };
//   beastsArray.push(beastObj);
// });

// console.log(beastsArray);

// const returnedMapArray = beasts2.map((beast, index, array) => {
//   const beastObj = { index: index, beast: beast + index };
//   return beastObj;
// });

// console.log(returnedMapArray);

// console.log(beastsArray === returnedMapArray);

// const array1 = ["bob", "john", "emanuel", "paul"];
// const newArray1 = array1.map((element) => element + " hey");
// console.log(newArray1);

// const array3 = [2, 4, 6, 8];
// const newArray3 = array3.map((number) => number * number);
// console.log(newArray3);

// const array34 = [5, 7, 3, 10, 8];

// array34.sort((a, b) => {
//   if (a < b) {
//     return -1;
//   } else if (a === b) {
//     return 0;
//   } else {
//     return 1;
//   }
// });
// //array34 = [3,5,7,8,10]

// const array41 = [2, 4, 6, 8, 9, 10];
// let filteredArray = array41.filter((number) => number >= 8);
// console.log(filteredArray);

// const array42 = [2, 4, 6, 8, 9, 10];

// let sum = 0;
// for (const number of array42) {
//   sum += number;
// }

// sum;

// const array43 = [2, 4, 6, 8];
// //reduce take the second argument "0" as a prev, and for each value its reducing till last and return
// const sum43 = array43.reduce((prev, current, index, array) => {
//   return prev + current;
// }, 0);
// sum;

// debugger;
// let names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];
// let countedNames = names.reduce(function (allNames, name) {
//   if (name in allNames) {
//     allNames[name]++;
//   } else {
//     allNames[name] = 1;
//   }
//   return allNames;
// }, {});

// let addBinatyManual = (A, B) => {
//   let sum = "";
//   let carry = 0;
//   let i = A.length - 1;
//   let j = B.length - 1;
//   while (i >= 0 || j >= 0) {
//     let a = A[i] ? A[i] : "0";
//     let b = B[j] ? B[j] : "0";
//     sum = String(a ^ b ^ carry) + sum;
//     if (a === b && a !== String(carry)) {
//       carry = Number(!carry);
//     }
//     i--;
//     j--;
//   }

//   if (carry) {
//     sum = String(carry) + sum;
//   }
//   return sum;
// };

// console.log(addBinatyManual("111", "1"));

// const array = ["a", "b", "c"];
// let returnedArrayLength = array.unshift("e"); // add an element in the front of the array

// const array2 = ["a", "b", "c"];
// let savedSpliced = array2.splice(0, 1, "e", "f"); // delete one item at position 0 and replace with
// let deleteExcept = array2.splice(1);
// let deleteLastElement = array2.splice(-1, 1); //delete last element

// var plusOne = function (digits) {
//   let lastZeros = [];
//   let lastDigit = digits.length - 1;

//   while (digits[lastDigit] === 9 || digits.length != 0) {
//     if (digits[lastDigit] === 9) {
//       digits[lastDigit] = 0;
//       lastZeros.unshift(digits.pop());
//       lastDigit = digits.length - 1;
//       continue;
//     }
//     break;
//   }

//   if (digits[lastDigit] != 9) {
//     digits[lastDigit] += 1;
//   }
//   digits = digits.concat(lastZeros);

//   if (digits[0] == 0) {
//     digits.unshift(1);
//   }
//   return digits;
// };

// let input1 = [1, 2, 3]; //[1,2,4]
// let input2 = [1, 2, 9]; //[1,3,0]
// let input3 = [1, 9, 9]; //[2,0,0]
// let input4 = [9, 9, 9]; //[1,0,0,0]
// let input5 = [9, 9, 9]; //[1,0,0,0]
// let input6 = [2, 9, 9, 9]; //[3,0,0,0,0]
// let input7 = [0]; //[3,0,0,0,0]

// // console.log(plusOne(input1));
// // console.log(plusOne(input2));
// // console.log(plusOne(input3));
// // console.log(plusOne(input4));
// // console.log(plusOne(input5));
// console.log(plusOne(input6));
// // console.log(plusOne(input7));

// // var maxSubArray = function (nums) {
// //   debugger;
// //   for (let i = 1; i < nums.length; i++) {
// //     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
// //     console.log(nums[i]);
// //   }
// //   return Math.max(...nums);
// // };

// var lengthOfLastWord = function (s) {  //v1
//   s = s.trim();
//   let indexLastSpace = s.lastIndexOf(" ");
//   let lastWordSize = s.length - 1 - indexLastSpace;

//   return lastWordSize;
// };

// var lengthOfLastWord = function (s) { //v2
//   let count = 0;
//   s = s.trim();
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === " ") {
//       return count;
//     }
//     count++;
//   }
//   return s.length;
// };

// var lengthOfLastWord = function (s) { //v3
//   let count = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] !== " ") {
//       count++;
//     } else if (count !== 0) {
//       return count;
//     }
//   }
//   return count;
// };

// let string1 = "ab abcde better";
// let string2 = "    day";
// let string3 = "a";
// let string4 = "   fly me   to   the moon  ";

// console.log(lengthOfLastWord(string1));
// console.log(lengthOfLastWord(string2));
// console.log(lengthOfLastWord(string3));
// console.log(lengthOfLastWord(string4));

// //linked list
// //  function ListNode(val, next) {
// //  this.val = (val===undefined ? 0 : val)
// //  this.next = (next===undefined ? null : next)

// var mergeTwoLists = function (node1, node2) {
//   if (node1 == null) {
//     return node2;
//   }
//   if (node2 == null) {
//     return node1;
//   }

//   if (node1 == null && node2 == null) {
//     return null;
//   }
//   let list1Head = node1;
//   let list2Head = node2;
//   let mergedHead = null;
//   let mergedContinousTail = null;

//   while (list1Head && list2Head) {
//     let nextNode = null;
//     if (list1Head.val < list2Head.val) {
//       nextNode = list1Head;
//       list1Head = list1Head.next;
//     } else {
//       nextNode = list2Head;
//       list2Head = list2Head.next;
//     }

//     if (mergedHead === null) {
//       mergedHead = nextNode;
//       mergedContinousTail = nextNode;
//       continue;
//     }
//     mergedContinousTail.next = nextNode;
//     mergedContinousTail = nextNode;
//   }

//   if (list1Head != null) {
//     mergedContinousTail.next = list1Head;
//   }
//   if (list2Head != null) {
//     mergedContinousTail.next = list2Head;
//   }

//   return mergedHead;
// };

// var mergeTwoLists = function (head1, head2) {
//   const sentinel = {
//     val: -1,
//     next: null,
//   };

//   let tail = sentinel;
//   while (head1 && head2) {
//     if (head1.val > head2.val) {
//       tail.next = head2;
//       head2 = head2.next;
//     } else {
//       tail.next = head1;
//       head1 = head1.next;
//     }

//     tail = tail.next;
//   }

//   tail.next = head1 || head2;

//   return sentinel.next;
// };

// const longestCommonPrefix = (str) => {
//   if (str.length === 1) {
//     //if one word
//     return str[0];
//   }
//   for (const word of str) {
//     //if any empty word
//     if (word === "") {
//       return "";
//     }
//   }

//   let firstWord = str[0];
//   for (let i = 1; i < str.length; i++) {
//     debugger
//     while (str[i].indexOf(firstWord) != 0) {
//       firstWord = firstWord.substring(0, firstWord.length - 1);
//     }
//   }
//   return firstWord;
// };

// var romanToInt = function (s) {
//   let sum = 0;
//   const romanValues = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//   };
//   for (let i = 0; i < s.length; i++) {
//     if (s.length === 1){
//       debugger
//       return romanValues[s[i]]
//     }
//       if (romanValues[s[i]] < romanValues[s[i + 1]]) {
//         sum -= romanValues[s[i]];
//       } else {
//         sum += romanValues[s[i]];
//       }
//   }
//   return sum;
// };

// var getRomanValues = (char, previousChar) => {
//   if (
//     previousChar ||
//     previousChar !== "I" ||
//     previousChar !== "X" ||
//     previousChar !== "C"
//   ) {
//     if (previousChar === "I" && char === "V") {
//       char = "IV";
//     } else if (previousChar === "I" && char === "X") {
//       char = "IX";
//     } else if (previousChar === "X" && char === "L") {
//       char = "XL";
//     } else if (previousChar === "X" && char === "C") {
//       char = "XC";
//     } else if (previousChar === "C" && char === "D") {
//       char = "CD";
//     } else if (previousChar === "C" && char === "M") {
//       char = "CM";
//     }
//     previousChar = char;
//   }

//   switch (char) {
//     case "I":
//       return 1;
//     case "IV":
//       return 3;
//     case "V":
//       return 5;
//     case "IX":
//       return 8;
//     case "X":
//       return 10;
//     case "XL":
//       return 30;
//     case "L":
//       return 50;
//     case "XC":
//       return 80;
//     case "C":
//       return 100;
//     case "CD":
//       return 300;
//     case "D":
//       return 500;
//     case "CM":
//       return 800;
//     case "M":
//       return 1000;
//   }
// };

// const romanToInt = function (s) {
//   debugger;
//   let sum = 0;
//   let previousChar = "";
//   for (let i = 0; i < s.length; i++) {
//     previousChar = s[i - 1];
//     sum += getRomanValues(s[i], previousChar);
//   }
//   return sum;
// };

// //binary tree
// var search = function (nums, target) {
//   let start = 0;
//   let middle;
//   let end = nums.length;
//   let tof = false;
//   let position = -1;
//   let iterations = 0;

//   while (tof === false && start <= end) {
//     iterations++;
//     middle = Math.floor((start + end) / 2);
//     if (nums[middle] === target) {
//       tof = true;
//       position = middle;
//       console.log(iterations);
//       return position;
//     }
//     if (target < nums[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//   }
//   console.log(iterations);
//   return position;
// };

// //iterations count
// let nums = [];
// let maxIteration = 9999;
// for (let i = 0; i <= maxIteration; i++) {
//   nums.push(i);
// }
// let target = 6900;

// console.log(search(nums, target));

// var twoSum = function (nums, target) {
//   const values = new Map();

//   for (let i = 0; i < nums.length; i++) {
//     const targetSubtract = target - nums[i];
//     const matchingValue = values.get(targetSubtract);
//     if (matchingValue !== undefined) {
//       return [matchingValue, i];
//     }
//     values.set(nums[i], i);
//   }
// };

// console.log(twoSum([5, 5, 6, 3], 9));

// let twoSum = function (arrNums, target) {
//   let arrPositions = [];
//   for (let i = 0; i < arrNums.length; i++) {
//     // 3,2,4
//     for (let j = 0; j < arrNums.length; j++) {
//       //   2,4
//       if (j !== i) {
//         if (+arrNums[i] + +arrNums[j] === target) {
//           arrPositions.push(i, j);
//           return arrPositions;
//         }
//       }
//     }
//   }
// };
// function setValue(symbol) {
//   let value;
//   switch (symbol) {
//     case "I":
//       value = 1;
//       break;
//     case "V":
//       value = 5;
//       break;
//     case "X":
//       value = 10;
//       break;
//     case "L":
//       value = 50;
//       break;
//     case "C":
//       value = 100;
//       break;
//     case "D":
//       value = 500;
//       break;
//     case "M":
//       value = 1000;
//       break;
//   }
//   return value;
// }

// function arabic(str) {
//   let sum = 0;
//   let precedent = 0;
//   let current = 0;

//   for (const symbol of str) {
//     current = setValue(symbol);

//     if (current > precedent) {
//       sum = sum - 2 * precedent;
//     }
//     sum += current;
//     precedent = current;
//   }

//   return sum;
// }
// console.log(arabic("CCXLVI")); // CCXLVI 100/100/10/50/5/1 = 246
// console.log(arabic("CDLXXXIII")); //100/500/50/10/10/10/111  =483

// //not mine
// //
// //
// // function arabic(roman) {//CCXLVI 100/100/10/50/5/1 = 246
// //   // debugger
// //   if (roman == null) return -1;
// //   var totalValue = 0,
// //     value = 0, // Initialise!
// //     prev = 0;

// //   for (var i = 0; i < roman.length; i++) {
// //     var current = char_to_int(roman.charAt(i));//give position index and receive arabic value
// //     if (current > prev) { //1st if 100>0
// //       // Undo the addition that was done, turn it into subtraction

// //       totalValue = totalValue - 2 * value;
// //     }
// //     if (current !== prev) {
// //       // Different symbol?
// //       value = 0; // reset the sum for the new symbol
// //     }
// //     value += current; // keep adding same symbols
// //     totalValue += current;
// //     prev = current;
// //   }
// //   return totalValue;
// // }

// // function char_to_int(character) {
// //   switch (character) {
// //     case "I":
// //       return 1;
// //     case "V":
// //       return 5;
// //     case "X":
// //       return 10;
// //     case "L":
// //       return 50;
// //     case "C":
// //       return 100;
// //     case "D":
// //       return 500;
// //     case "M":
// //       return 1000;
// //     default:
// //       return -1;
// //   }
// // }

// // console.log(arabic("CXLVI")); // CCXLVI 100/100/10/50/5/1 = 146
// // console.log(arabic("CDLXXXIII")); //100/500/50/10/10/10/111  =483

// use strict";
// function varTypes() {
//   var bot1 = 2;
//   var bot2 = 3;
//   let message = "Hello";
//   let _message = "World";
//   let $message = "Great";
//   let strangeQuote = `Hello, ${_message}`;
//   alert(strangeQuote);
//   let strangeQuote2 = "Hello, " + message;
//   const MY_BIRTHDAY = "28.07.2021"; //“hard-coded” values.
//   const visitorAge = "100"; //changeable
//   let birthday = MY_BIRTHDAY;

//   alert(bot1 + bot2 + $message + strangeQuote2 + visitorAge + birthday);
// }

// //INCORECT
//  let 1a;
//  let my-bot;

// // cannot start with a digit
//  For example: let, class, return, and function are reserved.

// function promptExamples() {
//   const userAge = prompt("How old are you?", 20);
//   let resultAge = userAge;
//   alert("You have " + userAge + " years");
//   alert(`You have ${resultAge} years`);
// }

// function confirmExample() {
//   let bossQuestion = confirm("Are you the boss?");
//   alert(bossQuestion);
// }

// function typeConversion() {
//   const convertMe = true;
//   let convertType = String(convertMe);
//   let additionConvert = Number(false);
//   let additionConvert2 = +false;
//   alert(typeof convertType);
//   alert(typeof convertMe);
//   alert(typeof additionConvert);
//   alert(typeof additionConvert2);
// }

// function addition() {
//   //only addition converts in string
//   alert(2 + 2 + "apples"); // 4apples
//   alert("apples" + 2 + 2); // apples22
//   alert(2 - "2"); //0
//   alert("2" * 2); //4}
// }

// function addition2() {
//   const oranges = "2";
//   const bananas = "3";
//   const fruits = +bananas + +oranges;
//   return fruits;
// }
// // alert(addition2());

// function booleanConvert(test) {
//   const bot1 = test;
//   const bot2 = Boolean(bot1);
//   return bot2;
// }
//  alert(booleanConvert(" "));

// //operator precedence
// function countertest() {
//   const precedenceOp = (1 + 2) * 2;
//   let counter = 2;
//   let bot3 = counter++; //return 2 counter=counter + 1 or +1
//   let bot4 = ++counter; //return 3
//   counter--; //counter=counter - 1 or -1
//   //only to variable 5++ =error
//   alert(bot3, bot4);
// }

// function falseIsZero() {
//   let a = false;
//   let b = 2;
//   let c = a + b;
//   alert(c);

//   const d = 0;
//   const e = false;
//   const f = d === e; //false
//   // const f = d == e; //true
//   alert(f);

//   alert("13" > "2"); //false disctionary comparation
//   alert("13" > 2); //true numbers comparation

//   alert("z" > "a");
// }

//  let year = prompt("what year?");
// year = Boolean(year);
// if (year == true) {
//   alert("good");
// } else alert("bad");

// if ((0, null, "", undefined, NaN,false)) {
//   //code never execute
// }

// if ((1, true, " ", "2")) {
//   //code execute
// }
// ;

//  if (year < 2015) {
//   alert("Too early...");
// } else if (year > 2015) {
//   alert("Too late");
// } else alert("Exactly!");

//  const userAge = prompt("How old are you?", 15);
// if (userAge > 18) {
//   alert("Acces allowed");
// } else if (userAge < 18) {
//   alert("Acces Restricted");
// } else alert("Enter your age");

// const userAge2 = prompt("How old are you?", 15);
// if (userAge2 > 18) {
//   userAge2 = true;
// } else if (userAge2 < 18) {
//   userAge2 = false;
// } else alert("Enter your age");

// function testConditional() {
//   const userAge3 = prompt("How old are you?");
//   userAge4 = userAge3 > 18 ? "allowed" : "denied";
//   alert(userAge4);

//   const userAge3 = prompt("How old are you?");
//    userAge4 = userAge3 > 18;
//    alert(userAge4);
// }

// const userAge = prompt("How old are you?");

// const resultAge =
//   userAge < 10
//     ? "hi my child"
//     : userAge < 18
//     ? "hello"
//     : userAge < 120
//     ? "greetings"
//     : "what an unusual age!";

// alert(resultAge);

// const userAge = prompt("How old are you?");
// const result = (userAge > 18) ? "18+" : "18-";

// const userQuestion = prompt("What the oficial name of js?");

// if ((userQuestion == "ECMAScript"||userQuestion == "ecma")) {
//   alert("right");
// } else {
//   alert("nope, its ECMAScript");
// }

// const userNumber = prompt("Give me a number");
// const userNumber2 = "";
// if (userNumber > 0) {
//   alert("1");
// } else if (userNumber < 0) {
//   alert("-1");
// } else if (userNumber == 0) {
//   alert("0");
// } else {
//   alert("Its not a number");
// }

// const login = prompt("your login");

// const message =
//   login == "employee"
//     ? "hello"
//     : login == "director"
//     ? "greetings"
//     : login == ""
//     ? "no login"
//     : "input login";

// alert(message);

//  const name1 = "";
// const name2 = "Mary"; //first true value
// const name3 = "John"

// const extrasName = name1 || name2|| name3||"*default all false";
// const extrasName = name1 && name2 && name3; //ret false

// alert(extrasName);// =Mary

// function guessMyNumber(val) {
//   const number = prompt("give number");
//   const result = number == val;

//   result == false || alert("correct");
//   result == true|| alert("incorrect");

//    if (result == true) {
//     alert("corect");
//   } else {
//     alert("incorect");
//   }
// }

// guessMyNumber(11);

// const userLogin = prompt("what's your login ");
// const userPsw = prompt("whats your pasword");

// if (userLogin == "Admin") {
//   userPsw;
// } else if (!(userLogin == "Admin")) {
//   alert("I dont know you");
// } else alert("Canceled");

// if (userPsw == "TheMaster") {
//   alert("Welcome");
// } else if (userPsw == !"TheMaster") {
//   alert("wrong password");
// } else alert("canceled");

// let userLogin = prompt("Whats your login");

// if (userLogin == "Admin") {

//     let userPsw = prompt("Whats your pasword");
//     if (userPsw === "TheMaster") {
//         alert("Welcome Master");
//     } else if (userPsw === "" || userPsw === null) {
//         alert("Canceled");
//     } else {
//         alert("Wrong Pasword");
//     }
// } else if (userLogin === "" || userLogin === null) {
//     alert("Canceled");
// } else {
//     alert("I dont know you");
// }

// let userFirstName = null;
// let userLastName = undefined;
// let userNickName = "John";

// alert("Welcome " + (userFirstName ?? userLastName ?? userNickName)); // first definite

// let i = 3;

// while (i > 0) {
//     alert(i);
//     i--;
// }

//  let f = 3;
// while(f){
//     alert(f);
//     f--;
// }

// let f = 3;
// while(f) alert(f--);   //single statement no curly braces

// let f = 0;

// while (f > 3) { //false and not execute
//     alert(f)
//     f++;
// }

// let f = 0;
// do { //execute at least once
//     alert(f);
//     f++;
// } while (f < 3);

// for (f = 0; f < 3; f++){
//     alert(f);
// };

// alert(f);

// for (let i = 0; i < 3; i++) {
//     alert(i); // 0, 1, 2
//   }
//   alert(i);

//  let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert( 'Sum: ' + sum );

// let total = 0;

// while (true) {
//     let value = +prompt("Give me a number", "");
//     if (!value) break;

//     total += value;
// }

// alert("Total " + total);

// let total = 0;

// for (let i = 0; i < 10; i++) {

//     // if true, skip the remaining part of the body
//     if (i % 2 == 0) continue;

//     alert(i); // 1, then 3, 5, 7, 9
// }

// const giveNumber = prompt("give me a number");

//  if (giveNumber % 2 == 0) {
//     alert("its an even number")
// } else {
//     alert("its an odd number")
// };

// while(true){
//     const giveNumber = prompt("give me a number");
//     if(!(giveNumber)){
//         break
//     }
//     else if (giveNumber % 2 == 0) {
//         alert("its an even number")
//     } else {
//         alert("its an odd number")
//     };
// }

// wfpawlf

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 1) continue;

//     alert(i);
// }

// for (i = 10; i > 0; i--) {
//     if (i % 2 == 1) continue;
//     alert(i);

// }

// outer: for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         let input = prompt(`Value at coords (${i},${j})`, '');
//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)
//         // do something with the value...
//     }
// }
// alert('Done!');

// for (let i = 0; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }
// }

// let j = 0;

// while (j < 3) {
//     alert(`number ${j}`);
//     j++
// }

// while (true) {
//     const userNumber = prompt("Give a number greater than 100");
//     if (userNumber > 100) {
//         alert("good")
//         break
//     } else if (!userNumber) {
//         break
//     } else {
//         alert("give another")
//     };
// }

// let total = "";
// for (let n = 0; n < 100; n++) {
//   if (n % 2 == 1) {
//     continue;
//   }
//   total = total + n + ","
// }

// alert(total);

// let total = 0;

// for (let n = 0; n < 100; n++) {
//   if (n % 5 == 0) { //5 10 15 20 25 30...
//     total = total + n + ",";
//   }
// }

// for (let n = 0; n < 100; n++) {
//   if (n % 5 == 0) {
//     continue;
//   }
//   total = total + n + ",";
// }

// alert(total);

// outer: for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let input = prompt(`Value at coords (${i},${j})`, '');
//     if (!input) {
//       break outer;
//     }
//   }
// }

// let total = "";

// while (true) {
//   let c = prompt("Give me number 5", "");
//   if (c == 5 || !c) {
//     break;
//   } else {
//     total += c + ",";
//   }
// }

// alert("You gived me this numbers "+ total);

// let e = " even";
// let n = " not even";

// for (let c = 0; c < 4; c++) {
//   if (c % 2 != 0) {
//     alert(c + n);
//   } else {
//     alert(c + e)
//   }
// }

// let i = 0;

// while (i < 3) {
//   alert(`Number ${i}`);
//   i++;
// }

// let rn = "";

// while (true) {
//   let number = prompt("Give me a number greater than 100");
//   if (!number) break;
//   else if (number >= 100) {
//     alert(`Good you gived me ${number}`);
//     break;
//   } else if (number < 100)
//     continue;
//   else {
//     alert("This is not a number")
//   }
// }

// for (let a = 1; a < 10; a++) {
//   for (b = 1; b < 10; b++) {
//     if (a % b == 1) continue;
//     else {
//       console.log(a);
//     }
//   }
// }

// findPrimeNumbers(100);

// //primeste Numarulmaximal
// function findPrimeNumbers(maxNumber) {

//   //creaza loop pin la numarul maximal 2--100
//   for (let dividend = 2; dividend <= maxNumber; ++dividend) {

//     //numberIsPrime cheama functia 2 cu numarul testat
//     //si primeste valoarea care o da dupa testarea numarului
//     const numberIsPrime = isNumberPrime(dividend);

//     //daca numberIsPrime este true atunci console log numarul dat
//     if (numberIsPrime) {

//       console.log(dividend);
//     }
//   }
// }

// //functia isNumberPrime primeste numarul din prima loop
// function isNumberPrime(dividend) {

//   //loop verifica ca nr din a 2-a loop sa fie mai mic ca sa se imparte la el
//   for (let divisor = 2; divisor < dividend; ++divisor) {

//     // verifica daca se imparte egal atunci nu este prim =false
//     const reminder = dividend % divisor;

//     if (reminder === 0) {

//       return false;
//     }
//   }

//   //daca nu se imparte egal atunci = true
//   return true;
// }

// findPrimeNumbers(10);

// //trebuie de aflat numerele prime de la 0 la 10
// //un numar prim nu se imparte exact la alte numere  inafara de el sau 1
// //1-loop pentru toate numerele pina la nrMaxim
// // 2-loop pentru numerele de la 2 pina la -1nrMaxim

// for (let numberForTest = 2; numberForTest < 10; numberForTest++) {

//   let numberForTestIsPrime = true;
//   for (let dividedNumber = 2; dividedNumber < numberForTest; dividedNumber++) {
//     let m = (numberForTest % dividedNumber)
//     if (m == 0) {
//       numberForTestIsPrime = false;
//     }
//   }

//   if (numberForTestIsPrime) {
//     console.log(numberForTest);
//   }
// }
//     const receivedNumber = secondLoop(dividendNumber);

// function mainNumbers(maxNumber) {
//   for (let dividendNumber = 6; dividendNumber <= maxNumber; dividendNumber++) {
//     const receivedNumber = secondLoop(dividendNumber);
//     if (receivedNumber) {
//       console.log(dividendNumber)
//     }
//   }
// }

// function secondLoop(dividendNumber) {
//   for (let divisorNumber = 2; divisorNumber < dividendNumber; divisorNumber++) {
//     if (dividendNumber % divisorNumber === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// mainNumbers(100);
// for (let n = 2; n < 100; n++) {
//   let number = true;
//   for (m = 2; m < n; m++) {
//     if (n % m === 0) {
//       number = false;
//     }
//   }
//   if (number) {
//     console.log(n);
//   }
// }

// // loop care returneaza care numere se impart exact la 5

// // numerele pina la care vrem 100
// for (let n = 1; n < 1000; n++) {
//   if (n % 5 === 0) {
//     console.log(n)
//   }
// }

// // loop care calculeaza numerele pare pina la 100

//  for (let n = 2; n < 100; n++) {
//   let s = true;
//   for (let m = 2; m < n; m++) {
//     if (n % m === 0) {
//       s = false;
//       break;
//     }
//   }
//   if (s) {
//     console.log(n)
//   }
// }

// let n = 2;
// while (n < 100) {
//   let s = true;
//   let m = 2;
//   while (m < n) {
//     if (n % m === 0) {
//       s = false;
//     }
//     m++;
//   }
//   if (s) {
//     console.log(n)
//   }
//   n++;
// }

// let a = 8 / 2 - 2;

// switch (a + 1) {
//   case 1:
//     console.log("nr1");
//     break;
//   case 2:
//     console.log("nr2")
//     break;
//   case 3:
//     console.log("nr3")
//     break;
//   case 4:
//     console.log("nr4")
//     break;
//   default:
//     console.log("number its not between 1 and 4")

// }

// //switch value is checked strictly
// let arg = prompt("Give me a value")

// switch (arg) {
//   case 1:
//     console.log("nr1");
//     break;
//   case 2:
//     console.log("nr2");
//     break;
//   case 3:
//     console.log("nr3");
//     break;
//   default:
//     console.log("its a string ");

// }

// while (true) {
//   let browser = prompt("whats your browser");
//   if (browser === "Edge") {
//     alert("You've got the Edge!");
//   } else if (browser === "Chrome" || browser === "Firefox" || browser === "Safari" || browser === "Opera") {
//     alert("Okay we support these browsers too");
//   } else if (browser === null) {
//     break;
//   } else if (browser == 0) {
//     alert("input a name");
//   } else {
//     alert("We hope that this page looks ok")
//   }
// }

// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert(0);
//     break;
//   case 1:
//     alert(1);
//     break;
//   case 2:
//   case 3:
//     alert("2,3");
//     break;
// }

// let user = "bob";

// function changeUserName(){
//   user = "john"
//   alert("hello " + user)
// }

// alert(user);  //bob
// changeUserName();  // john changed by the function
// alert(user); //john

// let outerUser = "outer" //bad practice for global variables

// function changeUser() {
//   let outerUser = "inner"; //declared inside shadowed outer,
//   alert(outerUser)
// }

// alert(outerUser); // "outer"
// changeUser(); // "inner"
// alert(outerUser); // "outer"

// function paramArgum(from, text) {
//   from = "*" + from + "*"
//   alert(from + ":" + text)
// }

// let from = "Ann";

// paramArgum(from, "Hello"); //*Ann*:Hello changed localy only
// alert(from); //Ann
// paramArgum("1", "1");

// function receiveArg(from, text = "no text given ") {
//   alert(from + ":" + text)
// }

// receiveArg("Ann"); // Ann: no text given

// function defaultFunction(from, text = anotherFunction()) {
//   m = from + text
//   alert(m)
// }

// function anotherFunction() {
//   let sum = "bot " + 8 % 3;
//   return sum;
// }

// defaultFunction("hello "); //if no second argument then anotherFunction is called

// function defaulText(text) {
//   if (text === undefined) {
//     text = "empty message"
//   }
//   alert(text);
// }

// defaulText();

// function orDefaultText(text) {
//   text = text || "empty message";
//   alert(text);
// }

// orDefaultText();

// function nullishCoalescing(text) {
//   alert(text ? ? "empty message") // if text is undefined or null then show second
// }

// nullishCoalescing();

// function returnValue(a, b) {
//   return a + b;
// }

// let m = returnValue(2, 3);
// alert(m);

// function checkAge(age) {
//   if (age >= 18) {
//     return true;
//   } else {
//     return confirm('Do you have permission from your parents?');
//   }
// }

// let age = prompt('How old are you?', 18);

// if (checkAge(age)) {
//   alert('Access granted');
// } else {
//   alert('Access denied');
// }

// function checkAge(question) {
//   if (question >= 18) {
//     return true;
//   } else {
//     confirm("Do you have permision from the partents");
//   }
// }
// let question = prompt("How old are you", 17)

// if (checkAge(question)) {
//   alert("access alowed")
// } else {
//   alert("acces denied")
// }

// function doNothing() {
//   //nothing
//   return
// }
// doNothing(); // and empty return returns undefined

// return (
//   some + long +
//   expresions
// )
// function names
// getValues;
// showMessage;
// createSomething;
// chechSomething;
// calcSomething;

// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!checkPrimes(i)) {
//       continue;
//     } else {
//       console.log(i);
//     }
//   }
// }

// function checkPrimes(i) {
//   for (let f = 2; f < i; f++) {
//     if (i % f == 0) return false;
//   }
//   return true;
// }

// showPrimes(10);

// function showPrimes(n) {
//   for (let i = 2; i <= n; i++) {
//     if (checkPrimes(i)) {
//       console.log(i)
//     }
//   }
// }

// function checkPrimes(i) {
//   for (let f = 2; f < i; f++) {
//     if (i % f === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// showPrimes(100);

// function checkAge(age) {
//   return (age > 18) || confirm("Did your parents allow")
// }

// console.log(checkAge(18));

// function minNumbers(a, b) {
//   if (a < b) {
//     return a;
//   } else {
//     return b;
//   }
// }
// console.log(minNumbers(1, 3));

// function orMinNumbers(a, b) {
//   return a < b ? a : b;
// }

// console.log(orMinNumbers(1, 3));

// function power(param1, param2) {
//   let sum = param1 ** param2
//   return sum;
// }

// let x = prompt("Give me first number");
// let n = prompt("Give me second number");

// function checkNumbers(param1, param2) {
//   if (!param1 || !param2) {
//     alert("aborted");
//   } else if (param1 >= 1 && param2 >= 1) {
//     alert("Your number is " + power(param1, param2));
//   } else if (typeof x !== Number || typeof n !== Number) {
//     alert(`${x} or ${n} are not numbers`)
//   } else {
//     alert("give me numbers")
//   }
// }

// checkNumbers(x, n);

// let counter = 1;
// let a = counter++; // (*) changed ++counter to counter++

// alert(a); // 1

// let age = prompt("How old are you")

// let accesAlowed = (age > 18) ? "allowed" : "denied";

// alert(accesAlowed);

// let sayHi = function () {
//   alert("Hello")
// };
// let func = sayHi;

// sayHi();
// func();

// function askQuestion(a, b, c) {
//   if (confirm(a)) {
//     b()
//   } else {
//     c()
//   }

// }

// function ok() {
//   alert("Agree")
// }

// function cancel() {
//   alert("canceled")
// }

// askQuestion("agree", ok, cancel)

// function agree(a, b, c) {
//   if (confirm(a)) {
//     b()
//   } else {
//     c()
//   }
// }

// agree(
//   "do you agree",
//   function () {
//     alert("you agreed");
//   },
//   function () {
//     alert("you canceled");
//   }
// );

// function questions(a, b, c, d) {
//   alert("response with yes or no");
//   a = prompt(a)
//   if (a) {
//     b();
//   } else {
//     d()
//   }
// }

// function howMuch() {
//   prompt("Ho much do you like to work")
// }

// function work() {
//   alert("good")
// }

// function dance() {
//   alert("good")
// }

// function notLike() {
//   alert("you dont like to work")
// }

// questions("Do you like to work", howMuch, dance, notLike) // this are called callbacks

// //WRITING A FUNCTION THAT ASK FOR USER AGE

// function howOld(a, b, c, d, e) {
//   a = prompt(a)
//   if (a >= 18) {
//     b()
//   } else if (a > 1) {
//     c()
//   } else if (!a) {
//     d()
//   } else {
//     e();
//   }

// }

// howOld("how old are you", bigger, smaller, denied, function () {
//   alert("give me real numbers")
// })

// function bigger() {
//   alert("acces allowed")
// }

// function smaller() {
//   alert("acces denied")
// }

// function denied() {
//   alert("aborted")
// }

// alert(temporar(2, 3)); //a function expresion cant be called before
// let temporar = function (a, b) {
//   return a + b;
// };

// alert(global(2, 3)) // a function declaration can be called before

// function global(a, b) {
//   return a + b;
// }

// let foo = 2;
// let bot = foo;
// foo = "bar";

// alert(foo);
// alert(bot);

// let age = prompt("What is your age?", 18);
// let welcome = 2;

// if (age < 18) {

//   welcome = function () {
//     alert("Hello!");
//   };

// } else {

//   welcome = function () {
//     alert("Greetings!");
//   };

// }

// welcome(); // ok now

// let age = prompt("whats your age")

// let welcome = (age > 18) ? alert("hello") : alert("bye-bye");

// let age = prompt("whats your age")

// let welcome = (age > 18) ? acces() : incorrect();

// let age = prompt("whats your age", 17);

// if (age > 18) {
//   acces();
// } else {
//   incorrect();
// }

// function acces() {
//   alert(`Your age is ${age}`)
// }

// function incorrect() {
//   if (age > 1) {
//     alert(`you have ${age} years, bye-bye!`)
//   } else if (age == 0) {
//     alert(`srlsy ${age}?`)
//   } else if (!age) {
//     alert("aborted")
//   } else {
//     alert(`You typed "${age}" Give me numbers`)
//   }
// }

// let nr1 = 2;
// let nr2 = 3;

// let sum = function (a, b) {
//   return a + b;
// };

// let sum2 = (a, b) => (a * b);

// let sum3 = a => a + 5;

// let sum4 = () => 2 + 6

// alert(sum(nr1, nr2))
// alert(sum2(nr1, nr2))
// alert(sum3(nr1, nr2))
// alert(sum4(nr1, nr2))

// let age = prompt("whats your age")

// let sum5 = (age >= 18) ? alert("allowed") : alert("denied");

// let sum6 = (age >= 18) ? () => alert('hello') : () => alert("denied")

// sum6();

// let sum = (a, b) => {
//   return a + b;
// }

// alert(sum(2, 3));

// let sum = (a, b) => { // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, then we need an explicit "return"
// };

// alert(sum(1, 2)); // 3

// let a = confirm("Do you agree")

// let ask = (a) ?
//   () => alert("You agreed") :
//   () => alert("you denied");

// ask(a);

//  let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   () => alert('Hello') :
//   () => alert("Greetings!");

// welcome();

// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }

// ask(
//   "Do you agree",
//   () => alert("you agreed"),
//   () => alert("you denied")
// );

// debugger;

// function pow(x, n) {
//   if (n < 0) {
//     alert("Negative 'n' not supported");
//   } else {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }

//     return result;
//   }
// }

// pow(2, 3);

// function pow(x, n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }
//   return result;
// }

// let x = prompt("x?", ""),
//   n = prompt("n?", "");
// if (n <= 0) {
//   alert(
//     `Power ${n} is not supported, please enter an integer number greater than zero`
//   );
// } else {
//   alert(pow(x, n));
// }

// let user = {
//   name: "john",
//   age: 30,
//   "likes birds": true,
// };

// console.log(user.age);
// delete user.age;

// console.log(user.age);
// console.log(user["likes birds"]);

// delete user["likes birds"];
// console.log(user["likes birds"]);

// user.gender = "male";
// console.log(user.gender);

// user["cars owned"] = 4;
// console.log(user["cars owned"])

// let fruit = prompt("which fruit to buy");

// let bag = {
//   [fruit]: 5,
// };

// console.log(bag.apple);

// let user;

// user = {
//   name: "john",
//   born: 1991,
//   kids: 2,
//   married: true,
// };

// alert(user.born);
// user.animals = 1;
// user["houses"] = 2;
// user.kids = 3;
// alert(user.kids)

// let answer = prompt("what do you want to know about use", "name")

// alert(user[answer])

// let fruits = prompt("What fruits to buy", "oranges");
// let applesNr = prompt("How many apples to buy", 3);

// let bag = {
//   apples: 0,
//   fruits: 0,
// };

// bag["apples"] = applesNr;
// bag["fruits"] = fruits;
// bag["limons"] = 5;

// alert(bag["apples"]);
// alert(bag["fruits"]);
// alert(bag["limons"]);

// function makeUser(name, age) {
//   return {
//     name, // name: name,
//     age, //age: age,
//   };
// }

// let user = makeUser("John", 30);
// // alert(user.name);

// alert("name" in user);
// alert("cars" in user);

// let user = {
//   age: 30,
// };

// let change = "age";

// alert(change in user)

// let user = {
//   name: "John",
//   age: 30,
//   isAdmin: true,
// };

// for (let key in user) {
//   alert(key);
//   alert(user[key]);
// }

// user ={
//   name: "John",
//   surname : "Smith",
// }

// user.name = "Pete";
// delete user.name;

// alert("name" in user)
// alert("surname" in user)

// // let key;
// let user = {};
// function isEmpty(obj) {
//   for (key in user) {
//     return false;
//   }
//   return true;
// }

// alert(isEmpty(user)); // true

// let salaries = {
//   john: 100,
//   Ann: 160,
//   Pete: 130,
// };

// let sum = 0;
// for (let key in salaries) {
//   let calc = salaries[key];
//   sum += calc;
// }
// alert(sum);

// menu = {
//   width: 200,
//   height: 300,
//   title: "My menu",
// };

// function multiplyNumeric(menu) {
//   for (let key in menu) {
//     if (typeof menu[key] == "number") {
//       menu[key] *= 2;
//     }
//   }
// }

// multiplyNumeric(menu);

// for (let key in menu) {
//   // alert(key);
//   alert(menu[key]);
// }

// let user = {
//   name: "john",
//   age: 30,
// };
// let user2 = {
//   name: "max",
//   age: 100,
// };
// let clone = {};
// let clone2 = {};
// let clone3 = {};

// //clone each key in "clone" same as Object.assing
// for (let key in user) {
//   clone[key] == user[key];
// }

// clone.age = 10;

// Object.assign(clone2, user, user2);

// clone3 = Object.assign({},user2)

// alert("user " + user.age);
// alert("clone " + clone.age);
// alert("clone2 " + clone2.age);
// alert("clone2 " + clone2.name);

// Object.assign(clone2, { cars: 2 });
// alert("clone2 cars " + clone2.cars);
// alert("clone3 " + clone3.age);

// let user = {
//   age: 30,
// };

// function sayHi() {
//   alert("Hello");
// }

// user.sayHi = sayHi;

// user.sayHi();

// user = {
//   sayHi() {
//     alert("Hello");
//   },
//   age: 29,
// };

// user.sayHi();

// let user = {
//   name: "John",
//   age: 30,

//   sayHi() {
//     alert("hello " + this.name);
//   },
// };

// user.sayHi();

// let user = { name: "john" };
// let admin = { name: "Admin" };

// function sayHi() {
//   alert(this.name);
// }

// user.f = sayHi;
// admin.f = sayHi;

// user.f();
// admin.f();

// let calculator = {
//   value1: 0,
//   value2: 0,
//   read() {
//     this.value1 = +prompt("give me first value");
//     this.value2 = +prompt("give me second value");
//   },
//   sum() {
//     return this.value1 + this.value2;
//   },
//   mul() {
//     return this.value1 * this.value2;
//   },
// };

// calculator.read();
// alert(calculator.sum());
// alert(calculator.mul());

// let ladder = {
//   step: 0,
//   up() {
//     this.step++;
//     return this;
//   },
//   down() {
//     this.step--;
//     return this;
//   },
//   showSteps() {
//     alert(this.step);
//     return this;
//   },
// };

// ladder.up().up().down().showSteps();

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }

// let user = new User("jack");

// alert(user.isAdmin);

// function User(name) {
//   //this = {} (implicity)

//   //add properties to this
//   this.name = name;
//   this.isAdmin = false;

//   //return this (implicity)
// }

// let user = new User("jack");

// user.name = "bob"
// User("jim");

// alert(user3.name)
// alert(user);

// for (let key in user) {
//   alert(user[key]);
// }

// function SmallUser() {
//   this.name = "John";
// }

// alert(new SmallUser().name);

// function User(name) {
//   this.name = name;

//   this.SayHi = function () {
//     alert("My name is: " + this.name);
//   };
// }

// let john = new User("John");

// john.SayHi();

// function User1() {
//   this.cars = 2;
//   this.houses = 1;
// }

// function User2() {
//   this.cars = 2;
//   this.houses = 1;
// }

// let visitor1 = new User1();
// let visitor2 = new User2();

// alert(visitor1 == visitor2);

// function A() {}
// function B() {}

// let a = new A();
// let b = new B();

// alert(a == b);

// debugger;
// function Calculator(value1, value2) {
//   this.read = function () {
//     this.value1 = +prompt("give first number");
//     this.value2 = +prompt("give second number");
//   };
//   this.sum = function () {
//     return this.value1 + this.value2;
//   };
//   this.mul = function () {
//     return this.value1 * this.value2;
//   };
// }

// let calculator = new Calculator();
// calculator.read();

// alert("Sum" + calculator.sum());
// alert("Mul" + calculator.mul());

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.Value = prompt("give me one value");
//   };
// }

// let accumulator = new Accumulator(1);
// accumulator.read();
// accumulator.read();

// alert(accumulator.value);

// // optional chaining verify if the value exist otherwise is returning undefined

// let user = {
//   address: 1,
//   car:3,
// };

// alert(user?.address);
// alert(user?.car);
// alert(user?.address?.street);

// let userAdmin = {
//   admin() {
//     alert("i am a admin");
//   },
// };

// let userGuest = {};

// userAdmin.admin?.();
// alert(userGuest.admin?.()); // returns undefined

// let id = Symbol("id");

// alert(id.toString());
// alert(id.description);

// let user = {
//   name: "John", //not our code
// };

// let id = Symbol("id");

// user.id = 1;

// alert(user.id)

// let user = {
//   name: "john",
// };

// let id = Symbol("id");

// user[id] = 1; // calling an id corectly
// user.id2 = 3;

// for (let key in user) {
//   alert(key);
// }

// let id = Symbol.for("id"); //searching for a global symbol, if does not exist then create
// let idAgain = Symbol.for("id");

// // the same symbol
// alert(id === idAgain); // true

// let sym = Symbol.for("name");
// Symbol.keyFor(sym);

// let user = {
//   id: 9451,
//   name: "Dominique",
//   age: 59,
// };

// const idSym = Symbol("id");

// user[idSym] = 123;

// alert(user[idSym])

// //two different symbols
// const sym1 = Symbol("id")
// const sym2 = Symbol("id")
// sym1 === sym2  //false

// //same symbol *global symbol
// const sym3 = Symbol.for("id")
// const sym4 = Symbol.for("id")
// alert(sym3 === sym4) //true

// function showingAlert() {
//   alert("hey");
// }

// function outputName(name) {
//   alert(name);
// }

// showingAlert();
// outputName();

//  task3Element.addEventListener("click", outputName)

// function combineStrings(nr1, nr2, nr3) {
//   return nr1 + " " + nr2 + " " + nr3 + " ";
// }

// const combinedString = combineStrings("hey", "you", "there");

// alert(combinedString);

// let test= [2,5,6];
// console.log(test[0]);

// var count = 0;

// function cc(card) {
//   switch (card) {
//     case 10:
//     case "J":
//     case "Q":
//     case "K":
//     case "A":
//       count--;
//       break;
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//       count++;
//   }

//   if (count > 0) {
//     return count + " Bet";
//   } else {
//     return count + " Hold";
//   }
// }
// cc(2);
// cc(3);
// cc(7);
// cc("K");
// cc("A");

// let goods = {
//   house: 1,
//   "user cars": 2,
// };
// goods.house; // --can acces with dots only if not space

// goods["user cars"]; //--can acces all

// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1].

//  function sum(arr, firstNmbrs) {
//   let count = 0;
//   for (let i = 0; i < firstNmbrs; i++) {
//     count += arr[i];
//   }
//   return count;
// }

// console.log(sum(arr, 5));

// debugger

// function test(nr) {
//   if (nr === 0) {
//     return;
//   } else {
//     console.log(nr);
//     test(nr - 1);
//   }
// }

// test(5);

// let arr = [2, 2, 2, 2, 2];
// sum(arr, 3);

// function sum(arr, firstNmbrs) {
//   // Only change code below this line
//   if (firstNmbrs <= 0) {
//     return 0;
//   } else {
//     return sum(arr, firstNmbrs - 1) + arr[firstNmbrs - 1];
//   }
// }

// let arr1 = [];
// let arr2 = [];
// for (let i = 0; i < 100; i++) {
//   const randomMumber = Math.random();
//   if (randomMumber < 0.7) {
//     arr1.push(` ${i} = ${randomMumber}\n`);
//   } else {
//     arr2.push(` ${i} = ${randomMumber}\n`);
//   }
// }
// console.log("%c%s", "color: #f200e2", `Smaller than =>${arr1}`);
// console.log("%c%s", "color: #f200e2", `Bigger than =>${arr2}`);

//  let stop = true;
// while (stop) {
//   const randomMumber = Math.random();
//   if (randomMumber < 0.7) {
//     console.log("%c%s", "color: #f200e2", `Smaller than =>${randomMumber}`);
//   } else {
//     console.log("%c%s", "color: #f200e2", `Bigger than =>${randomMumber}`);
//     stop = false;
//   }
// }

// //loop care striga la fiecare numar care e mai mare decit 0.7
// //si striga cind e mai mic de 0.7

//  if (randomMumber > 0.7) {
//   alert(`greater than ${randomMumber}`);
// } else {
//   console.log(`smaller than ${randomMumber}`);
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arr.length; i++) {
//   console.log("%c%s", "color: #807160", arr[i]);
// }

//  for (let j = arr.length; j > 0; j--) {
//   console.log("%c%s", "color: #807160", arr[j - 1]);
// }

// let randomNumber1;
// let randomNumber2;

// function changeNumbers() {
//   randomNumber1 = Math.random();
//   randomNumber2 = Math.random();
// }
// changeNumbers();
// let stop = true;

// while (stop) {
//   if (randomNumber1 > 0.2 || randomNumber2 > 0.2) {
//     console.log("%c%s", "color: #731d6d", randomNumber1);
//     console.log("%c%s", "color: #731d6d", randomNumber2);
//     stop = false;
//   } else {
//     console.log("%c%s", "color: #006dcc", randomNumber1);
//     console.log("%c%s", "color: #006dcc", randomNumber2);
//     changeNumbers();
//   }
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let reverse = [];

// for (const bot of arr) {
//   reverse.unshift(bot);
// }

// let condition = true;

// while (condition) {
//   if (arr[0] == undefined) {
//     condition = false;
//   } else {
//     arr.shift(0);
//   }
// }
// for (const bot of reverse) {
//   arr.push(bot);
// }

// console.log("%c%s", "color: #cc0088", arr);
// console.log("%c%s", "color: #cc0088", reverse);
// outerLoop: for (let i = 0; i < 10; i++) {
//   console.log("%c%s", "color: #77258c", "outer", i);
//   for (let j = 0; j < 10; j++) {
//     console.log("%c%s", "color: #ff258c", "inner", j);
//     if (j === 8) {
//       break outerLoop;
//     }
//   }
// }

// const findGreaterOrEqual = (a, b) => {
//   return a === b
//     ? "a and b are equal"
//     : a > b
//     ? "a is greater"
//     : "b is greater";
// };

// function findGreaterOrEqual(a, b) {
//   if (a === b) {
//     return "a and b are equal";
//   } else if (a > b) {
//     return "a is greater";
//   } else {
//     return "b is greater";
//   }
// }

// findGreaterOrEqual(2, 3);
// console.log("%c%s %s", "color: #eeff00", findGreaterOrEqual(2, 2));
// let count1 = ``;
// let count2 = ``;
// function test(cart, ...param) {
//   //rest operator should be last argument ...param is created as an array
//   for (const bot of param) {
//     count1 += " one " + bot;
//   }
//   count2 = `Your ${cart} have${count1}`;

//   console.log("%c%s", "color: #d0bfff", count2);
// }
// test("cart", "banana", "orange", "tomatoes");

// const unlimited = function (callback, ...arg) {
//   if (!arg) {
//     callback();
//   }
// };
// const callback = () => console.log("%c%s", "color: #40fff2", "Emty string");

// unlimited(callback, "A", "beauty", "string") ;

// function checkInput(cb, ...many) {
//   let hasEmptyText = false;
//   for (const text of many) {
//     if (!text) {
//       hasEmptyText = true;
//       break;
//     }
//   }
//   if (!hasEmptyText) {
//     cb();
//   }
// }

// debugger;

// checkInput(
//   () => {
//     console.log("All not empty");
//   },
//   "Hello",
//   "12",
//   "d"
// );

// const sumUp = (resultHandler, ...numbers) => {
//   const validateNumber = (number) => {
//     return isNaN(number) ? 0 : number;
//   };

//   let sum = 0;
//   for (const num of numbers) {
//     sum += validateNumber(num);
//   }
//   resultHandler(sum);
// };

// const subtractUp = function (resultHandler, ...numbers) {
//   let sum = 0;
//   for (const num of numbers) {
//     sum -= num;
//   }
//   resultHandler(sum);
// };

// const showResult = (result) => {
//   alert("The result after adding all numbers is: " + result);
// };

// sumUp(showResult, 1, 5, "fdsa", -3, 6, 10);
// sumUp(showResult, 1, 5, 10, -3, 6, 10, 25, 88);
// console.log(subtractUp(1, 10, 15, 20));

// function reverseCase(str) {
// 	let word =[]
// 	for(const i of str){
// 		if(i === i.toUpperCase()){
// 			word.push(i.toLowerCase())
// 		}else{
// 			word.push(i.toUpperCase())
// 		}
// 	}
// 	console.log(word.join(""))
// }

// reverseCase("sPoNtAnEoUs")

// const twoSum = function (nums, target) {
//   for (let i = 1; i <= nums.length; i++) {
//     for (let j = 1; j <= nums.length; j++) {
//       if (nums[i] != nums[j] && i + j === target) {
//         console.log(i, j);
//       }
//     }
//   }
// };

// const arr = [1, 2, 3, 4];

// twoSum(arr, 7);

// export const convert = (number) => {
//   let container = "";
//   if (number % 3 === 0) {
//     container += "Pling";
//   }
//   if (number % 5 === 0) {
//     container += "Plang";
//   }
//   if (number % 7 === 0) {
//     container += "Plong";
//   }
//   if (!container) {
//     container = number.toString();
//   }
//   return container;
// };
// debugger;
// console.log("%c%s", "color: #006dcc", convert(1));

// const minMax = (arr) => {
//   arr.sort();
//   console.log( [arr[0], arr[arr.length - 1]]);
// };

// const arr1 = [0, 1, 2, 3, 4, 5];

// function local() {
//   const part1 = arr1.slice(0, 3);
//   console.log("%c%s", "color: #997326", part1);
// }

// function list(arr1) {
//   if (arr1.length === 0) {
//     return "";
//   }
//   if (arr1.length === 1) {
//     return arr1[0];
//   }
//   let elExLast = arr1.slice(0, arr1.length - 1);
//   let lastElement = arr1.slice(arr1.length - 1, arr1.length);
//   return elExLast.join(", ") + " and " + lastElement;
// }

// list(["Huey", "Dewey", "Louie"]);

// //Huey, Dewey and Louie

// function gcd(x, y) {
//   if (typeof x !== "number" || typeof y !== "number") return false;
//   x = Math.abs(x);
//   y = Math.abs(y);
//   while (y) {
//     var t = y;
//     y = x % y;
//     x = t;
//   }
//   console.log(x);
//   return x;
// }
// debugger
// gcd(15, 6);

// 15,6

// function addWithSurcharge(nr1, nr2) {
//   let surcharge = 0;

//   if (nr1 <= 10) {
//     surcharge++;
//   } else if (nr1 <= 20) {
//     surcharge += 2;
//   } else {
//     surcharge += 3;
//   }

//   if (nr2 <= 10) {
//     surcharge++;
//   } else if (nr2 <= 20) {
//     surcharge += 2;
//   } else {
//     surcharge += 3;
//   }
//   return nr1 + nr2 + surcharge;
// }
// addWithSurcharge(10, 10);

// function median(arr) {
//   if (arr.length % 2 != 0) {
//     let position;
//     position = Math.floor(arr.length / 2);
//     return arr[position];
//   } else {
//     let nrAfterHalf = arr.length / 2;
//     let nrBeforeHalf = arr.length / 2 - 1;
//     let sum = (arr[nrAfterHalf] + arr[nrBeforeHalf]) / 2;
//     return sum;
//   }
// }

// let arr1 = [1, 2, 10];
// let arr2 = [1, 2, 10, 100];
// let arr3 = [1, 2, 10, 100, 500, 800];
// console.log(median(arr3));

// function hello(par) {
//   if (par) {
//     return `Hello ${par}!`;
//   }
//   return "Hello world!";
// }

// function cutComment(line) {
//   debugger;
//   let commentPosition = line.indexOf("//");
//   if (commentPosition !== -1) {
//     return line.slice(commentPosition + 3);
//   }
//   return null;
// }

// console.log(cutComment("let foo; // bar"));

// const teamDelphin = [85, 101, 102];
// const teamKoalas = [20, 20, 20];

// const calcAverage = (arr) => {
//   let firstThree = arr.slice(0, 3);
//   let sum = 0;
//   for (const iterator of firstThree) {
//     sum += iterator;
//   }

//   return sum / arr.length;
// };

// const checkWinner = (teamDelphin, teamKoalas) => {
//   if (teamDelphin / teamKoalas > 2) {
//     return `Team Delphin win (${teamDelphin} vs ${teamKoalas}) `;
//   } else if (teamKoalas / teamDelphin > 2) {
//     return `Team Koalas win (${teamDelphin} vs ${teamKoalas}) `;
//   } else {
//     return `No team Win, team Delphin ${teamDelphin} vs teamKoalas ${teamKoalas}`;
//   }
// };

// const mainFunction = () => {
//   const teamDelphinAverage = calcAverage(teamDelphin);
//   const teamKoalasAverage = calcAverage(teamKoalas);
//   const winner = checkWinner(teamDelphinAverage, teamKoalasAverage);
//   return winner;
// };

// console.log(mainFunction(teamDelphin, teamKoalas));
