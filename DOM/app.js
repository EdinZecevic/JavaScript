/*const h1 = document.getElementById("title");
h1.style.color = "red";

const headings = document.getElementsByTagName("h2");

headings[0].style.color = "green";

const items = document.getElementsByTagName("li");

const betterItems = [...items];

/*betterItems.forEach(function (item) {
  //.log(item);
});*/

/*const listItems = document.getElementsByClassName("special");

listItems[1].style.color = "red";

const result = document.querySelector("#result");
result.style.backgroundColor = "blue";

const item = document.querySelector(".special");
//console.log(item);

const listItem = document.querySelectorAll(".special");

listItem.forEach(function (item) {
  //console.log(item);
});

const first = document.querySelector(".first");
const classValue = first.getAttribute("class");
const idValue = first.getAttribute("id");
//console.log(classValue);

const link = document.getElementById("link");
const showLink = link.getAttribute("href");
console.log(showLink);

const last = link.nextElementSibling;
last.setAttribute("class", "first");
last.textContent = "I allso have class of first";
console.log(last);

const links = document.querySelectorAll(".first");*/

/*const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");

const classValue = first.className;
//console.log(classValue);

second.className = "colors";

third.classList.add("colors", "text");
third.classList.remove("colors");
let result = third.classList.contains("colors");
if (result) {
  console.log("hello world");
} else {
  console.log("there is no any world");
}

/*const result = document.querySelector("#result");

const bodyDiv = document.createElement("div");
const text = document.createTextNode("Simple body div");
bodyDiv.appendChild(text);
document.body.appendChild(bodyDiv);

document.body.insertBefore(bodyDiv, result);

const heading = document.createElement("h1");
const headingTExt = document.createTextNode("This is headinText");
heading.appendChild(headingTExt);
heading.classList.add("blue");*/

//result.appendChild(heading);

/*const heading = document.createElement("h1");
heading.innerText = `i am dynamic heading`;
document.body.prepend(heading);

//const result = document.querySelector("#result");
//result.remove();

/*const list = document.getElementById("first");
const div = document.getElementById("second");
const item = document.querySelector(".item");

console.log(div.textContent);
console.log(list.innerHTML);
console.log(list.textContent);

const randomWar = "radnom value";

const ul = document.createElement("ul");
ul.innerHTML = `<li class="item">${randomWar}</li>
                <li>list item</li>`;

document.body.appendChild(ul);

/*const random = document.querySelector(".random");
random.style.backgroundColor = "blue";
random.style.color = "white";
random.size = "3 rem";

random.classList.add("title");

/*const btn = document.querySelector(".btn");
const heading = document.querySelector("h2");

function changecolors() {
  let hasClass = heading.classList.contains("red");
  if (hasClass) {
    heading.classList.remove("red");
  } else {
    heading.classList.add("red");
  }
}

//btn.addEventListener("click", function () {
//heading.style.backgroundColor = "red";
//heading.classList.add("red");
//});

btn.addEventListener("click", changecolors);*/

/*const heading = document.querySelector("h2");
const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("you have clicked me");
});

btn.addEventListener("mouseenter", function () {
  console.log("up");
});

btn.addEventListener("mouseleave", function () {
  console.log("down");
});*/

/*const heading = document.querySelector("h1");
const btn = document.querySelector(".btn");

heading.addEventListener("click", function () {
  heading.classList.add("a");
});

btn.addEventListener("click", function (event) {
  event.currentTarget.classList.add("a");
});

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    //console.log(e.currentTarget);
    //e.currentTarget.style.color = "green";
    console.log(e.target);
    e.target.style.color = "green";
  });
});

const container = document.querySelector(".container");
const list = document.querySelector(".list-items");

function showBubling(e) {
  console.log("current target", e.currentTarget);
  console.log("target", e.target);
}

list.addEventListener("click", showBubling);
container.addEventListener("click", showBubling);

const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const heading = document.querySelector(".heading");

function sayHello() {
  console.log("hello");
}

btn.addEventListener("click", function () {
  const element = document.createElement("h1");
  element.classList.add("link");
  element.textContent = "The new text for h1";
  container.appendChild(element);
});

heading.addEventListener("click", sayHello);

const form = document.getElementById("form");
const name = document.getElementById("name");
const password = document.getElementById("password");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("form submitetd");
  console.log(name.value);
  console.log(password.value);
});

localStorage.setItem("name", "john");
sessionStorage.setItem("name", "john");

const friends = ["Sinan", "Sakic", "Jasar"];

localStorage.setItem("friends", JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem("friends"));

console.log(values[1]);*/

let fruits;
if (localStorage.getItem("fruits")) {
  fruits = JSON.parse(localStorage.getItem("fruits"));
} else {
  fruits = [];
}

fruits.push("banana");
fruits.push("apple");
localStorage.setItem("fruits", JSON.stringify(fruits));
