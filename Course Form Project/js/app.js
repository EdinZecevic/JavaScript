(function () {
  document.addEventListener("DOMContentLoaded", function () {});

  function Display() {
    this.name = document.getElementById("name");
    this.course = document.getElementById("course");
    this.author = document.getElementById("author");
    this.costumers = document.querySelector("costumer-list");
  }

  Display.prototype.checkFields = function () {
    this.name.addEventListener("blur", this.validateField);
  };
});
