#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 50000; // Dollar

let myPin = 4567;

let pinAnswer = await inquirer.prompt([
  {
    name: "pin",
    message: "enter your pin number",
    type: "number",
  },
]);

//     45678     ===  4567 - false
if (pinAnswer.pin === myPin) console.log("Correct pin code!!!");

let operationAns = await inquirer.prompt([
  {
    name: "operation",
    message: "Plese select option",
    type: "list",
    choices: ["withdraw", "Fast cash", "check balance"],
  },
]);
console.log(operationAns);

// if user select withdrawl
if (operationAns.operation === "withdraw") {
  let amountAns = await inquirer.prompt([
    {
      name: "amount",
      message: "enter your amount",
      type: "number",
    },
  ]);
  if (amountAns.amount <= myBalance) {
    let balance = myBalance - amountAns.amount;
    console.log(`The remaining balance is ${balance}`);
  } else {
    console.log(`You have insufficient balance`);
  }

  // if user select fast cash
} else if (operationAns.operation === "Fast cash") {
  let FastcashAns = await inquirer.prompt([
    {
      name: "amount",
      type: "list",
      choices: ["10000", "20000", "30000", "40000", "45000", "55000"],
    },
  ]);
  if (FastcashAns.amount <= myBalance) {
    let balance2 = myBalance - FastcashAns.amount;
    console.log(`the remaining balance is ${balance2}`);
  } else {
    console.log(`You have insufficient amount`);
  }
  // if user select check balance
} else if (operationAns.operation === "check balance") {
  console.log(myBalance);
} else {
  console.log("Incorrect pin code");
}
