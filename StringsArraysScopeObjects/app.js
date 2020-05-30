/*let text = "Edin Zecevic";

console.log(text);

let result = text.length;

console.log(result);
console.log(text.length);

console.log(text.toLocaleLowerCase());
console.log(text.toLocaleUpperCase());

console.log(text.charAt(0));

for (let i = 0; i < text.length; i++) {
  console.log(text.charAt(i));
}

console.log(text.charAt(text.length - 1));
console.log(text.indexOf("e"));

console.log(text.startsWith("Edin"));
console.log(text.endsWith("c"));

console.log(text.toLocaleLowerCase().startsWith("edin"));

console.log(text.slice(0, 7));
console.log(text.slice(-5));*/ //from behind 5 letters places

/*const name = "Edin";
const age = 25;
const sentence = "Hey here is " + name + " and have " + age + " years";

console.log(sentence);

const value = `hey here is ${name} and have ${age} years`;

console.log(value);*/

//let namess = ["Kum", "Eldar", "Vedad", "Namik", "Muhso", "Muva"];

/*console.log(names.length);
console.log(names[4]);
console.log(names);*/

/*let newArr = [];

for (let i = 0; i < names.length; i++) {
  newArr[i] = names[i];
}

console.log(newArr);*/

/*function test(arr) {
  console.log(arr);
}

test(names);*/

/*let names = ["Edin", "Sinan", "Sakic", "Husnija", "Hasib", "Kaknjo"];
let name = ["Edin"];

function test(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let newItem = `${arr[i]} Zecevic`;

    newArr.push(newItem);
  }

  if (newArr.length > 2) {
    console.log(newArr);
  } else console.log("Small Array");
}

test(names);*/

/*let value = 2 < 5;

value ? console.log("true") : console.log("false");*/

//Call back Functions//

/*function calculator(arr, cb) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    let item = cb(arr[i]);
    array.push(item);
  }
  return array;
}

function add(number) {
  return number + 10;
}

function multipy(number) {
  return number * 10;
}

let result = calculator([1, 2, 3], add);

console.log(result);*/

/*function showPersons(person) {
  console.log(person.position.toUppercase());
}

showPersons(people);

people.forEach(function (person) {
  console.log(person);
});*/

/*const ages = people.map(function (person) {
  return person.age + 10;
});

const names = people.map(function (person) {
  return `<h1>${person.name}</h1>`;
});

const newPeople = people.map(function (person) {
  return {
    firstName: person.name.toUpperCase(),
    oldAge: person.age + 10,
  };
});*/

/*const people = [
  { name: "sinan", age: 20, position: "menager", id: 1, salary: 200 },
  { name: "edin", age: 21, position: "direktor", id: 2, salary: 300 },
  { name: "tare", age: 22, position: "major", id: 3, salary: 400 },
];

const personFind = people.find(function (person) {
  return person.id === 3;
});

const personFilter = people.filter(function (person) {
  return person.id === 3;
});

const totalDaily = people.reduce(function (acc, curr) {
  acc += curr.salary;
  return acc;
}, 0);

console.log(totalDaily);*/

const date = new Date();

let month = date.getMonth();
let day = date.getDay();

console.log(month + 1);
console.log(day + 1);
