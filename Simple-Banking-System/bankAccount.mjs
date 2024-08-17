export class BankAccount {
  constructor(accountNumber, accountHolder, balance) {
    (this.accountNumber = accountNumber),
      (this.accountHolder = accountHolder),
      (this.balance = balance);
  }
  deposit(sum) {
    if (sum > 0) {
      this.balance += sum;
    } else {
      console.error("Deposit amount must be positive");
    }
  }
  withdraw(sum) {
    if (sum > 0 && this.balance >= sum) {
      this.balance -= sum;
    } else {
      console.error("Invalid withdrawal amount or insufficient funds");
    }
  }
  checkBalance() {
    return this.balance;
  }
}
