const MESSAGES = require("./calculator_messages.json");
const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return Number.isNaN(Number(number));
}

// Mapping user input to language codes
const languageMap = {
  1: "English",
  2: "Espanol",
  3: "German",
  4: "Leet",
  5: "Klingon",
  6: "Pirate",
};

prompt(
  "Enter your language:\n 1) English 2) Spanish 3) German\n Do NOT enter 4, 5, or 6\n"
);
let langChoice = readline.question();

// Validate language choice and ask again if necessary
while (!languageMap[langChoice]) {
  prompt("Please enter a valid language choice");
  langChoice = readline.question();
}

// Fetch the selected language's messages
let currentLanguage = languageMap[langChoice];
let langMessages = MESSAGES[currentLanguage];

// Use langMessages for prompts
prompt(langMessages["welcome"]);

while (true) {
  prompt(langMessages["firstNumber"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(langMessages["invalidNumber"]);
    number1 = readline.question();
  }

  prompt(langMessages["secondNumber"]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(langMessages["invalidNumber"]);
    number2 = readline.question();
  }

  prompt(langMessages["operation"]);
  let operation = readline.question();

  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(langMessages["invalidOperation"]);
    operation = readline.question();
  }

  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(langMessages["result"] + output);

  prompt(langMessages["again"]);
  let answer = readline.question();

  if (answer.toLowerCase() !== "y") {
    prompt(langMessages["thanks"]);
    break;
  }
}
