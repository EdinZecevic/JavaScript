const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

let futureDate = new Date(2020, 4, 20, 17, 30, 12);

let year = futureDate.getFullYear();
let hours = futureDate.getHours();
let minutes = futureDate.getMinutes();
let seconds = futureDate.getSeconds();

let day = futureDate.getDay();
let date = futureDate.getDate();

let month = futureDate.getMonth();

giveaway.textContent = `Giveaway ends ${weekdays[day]}, ${date}
${months[month - 1]} 
 ${year} ${hours}:${minutes}:${seconds}`;
