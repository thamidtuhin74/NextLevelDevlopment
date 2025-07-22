{
  // Encaptulation --> It's using AccessModifier

  {
    class BankAccount {
      public readonly id: number;
      public name: string;
      protected _balance: number;

      constructor(id: number, name: string, balance: number) {
        this.id = id;
        this.name = name;
        this._balance = balance;
      }

      public addDeposit(amount: number) {
        this._balance = this._balance + amount;
      }
      public getbalance() {
        return this._balance;
      }

      // FUntions using setter - Step 1;
      set Deposit(amount: number) {
        this._balance = this._balance + amount;
      }

      // using getter - Step 1;
      get Balance() {
        //Create as like as a Function
        return this._balance;
      }
    }

    const poorAccount = new BankAccount(1001, "Tahmid TUhin", 2500);
    poorAccount.addDeposit(20);
    const myBalance = poorAccount.getbalance();

    // using getter - Step 2;
    const getBalacneUsingGetter = poorAccount.Balance; //Use as like as a Property;
    console.log(getBalacneUsingGetter);
    poorAccount.Deposit = 1000;
    console.log(poorAccount.Balance);
  }
}
