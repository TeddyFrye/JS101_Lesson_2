// Enter the monthly payment
// Enter the loan amount
// Caclulate the monthly interest rate
// Calculate the loan duration in months
// Calculate total car payment
// Calculate how long to pay off the car

const readline = require("readline-sync");
function prompt(message) {
  console.log(`=> ${message}`);
}

prompt(`Please enter loan amount: `);
let loanAmount = readline.question();

prompt(`Please enter the annual percentage rate: `);
let annualPercentageRate = readline.question();

prompt(`Please enter the loan duration in years: `);
let loanDurationInYears = readline.question();

let monthlyInterestRate = annualPercentageRate / 100 / 12;
let loanDurationInMonths = loanDurationInYears * 12;

let monthlyPayment =
  loanAmount *
  (monthlyInterestRate /
    (1 - Math.pow(1 + monthlyInterestRate, -loanDurationInMonths)));
let totalCarPayment = monthlyPayment * loanDurationInMonths;
let yearsToPayOff = loanDurationInMonths / 12;

prompt(
  `Your monthly payment is: $${monthlyPayment.toFixed(
    2
  )}.\nYour total car payment is: $${totalCarPayment.toFixed(
    2
  )}.\nIt will take you ${yearsToPayOff} years to pay off the car.`
);
