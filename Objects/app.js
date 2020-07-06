class Account {
  constructor(name, initalBalance) {
    this.name = name;
    this.balance = initalBalance;
  }
  deposit(amount) {
    this.balance += amount;
    console.log(`Hello ${this.name}, your balance is ${this.balance}`);
  }
  bank = "chase";
}

const john = new Account("Edin", 200);
console.log(john);
john.deposit(4000);
