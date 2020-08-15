let myAccount = {
    name: 'Andrew Mead',
    expense: 0,
    income: 0
};

let otherAccount = myAccount;
otherAccount.income = 1000;

let addExpense = function (account, amount){
    account.expense = account.expense + amount
};

addExpense(myAccount, 2.50);
console.log(myAccount);