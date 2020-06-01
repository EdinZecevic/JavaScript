const h1 = document.getElementById("title");
h1.style.color = "red";

const headings = document.getElementsByTagName("h2");

headings[0].style.color = "green";

const items = document.getElementsByTagName("li");

const betterItems = [...items];

/*betterItems.forEach(function (item) {
  console.log(item);
});*/

const listItems = document.getElementsByClassName("special");

listItems[1].style.color = "blue";
