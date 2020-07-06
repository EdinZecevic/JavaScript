/*const jon = {
  name: "Edin",
  surname: "Zecevic",
  company: {
    name: "amerika",
    job: "developer",
  },
};

function createPerson() {
  return {
    firstName: "john",
    lastName: "sanders",
    fullName: function () {
      console.log(`my name ${this.firstName} adn ${this.lastName}`);
    },
  };
}

const john = createPerson();

console.log(john.fullName());


function createPerson(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: function () {
      console.log(`my name ${this.firstName} ${this.lastName}`);
    },
  };
}

const edin = createPerson("Edin", "Zecevic");

console.log(edin.fullName());

function Person(firstName, lastName) {
  (this.firstName = firstName),
    (this.lastName = lastName),
    (this.fullName = function () {
      console.log(`my name ${this.firstName} ${this.lastName}`);
    });
}

const edin = new Person("Edin", "Zecevic");
console.log(edin);*/

function Account(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
}

const edin = new Account("edin", 200);
const bob = new Account("bob", 280);
console.log(edin);

Account.prototype.bank = "Rifefisen"; // for all Account object the proto will be the rifefisen
Account.prototype.deposit = function (amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
};
