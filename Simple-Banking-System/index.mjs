import { BankAccount } from "./bankAccount.mjs";

const myAccount = new BankAccount("123456", "John Doe", 1000);

myAccount.deposit(500);
console.log(myAccount.checkBalance());

myAccount.withdraw(200);
console.log(myAccount.checkBalance());
myAccount.withdraw(1500);
