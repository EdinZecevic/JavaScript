let count = 0;

const btn = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let clas = e.currentTarget.classList;
    if (clas.contains("increase")) {
      count++;
    } else if (clas.contains("decrease")) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
  });
});
