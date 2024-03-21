#!/usr/bin/env node  
//it indicates that it is not an ordinary file but it is executaable on terminal after publishing,thid is called shenbang.
import inquirer from "inquirer"; 
const answers = await inquirer.prompt([
  //all objects are in a single array

  //1 object
  { message: "Enter 1st number:", type: "number", name: "FirstNumber" },

  //2nd object
  {
    message: "Enter 2nd number:",
    type: "number",
    name: "SecondNumber",
  },

  //3rd object
  {
    message: "Enter any operator:",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Divison"], //choices in an array
  },
]);
//conditional statement

if (answers.operator === "Addition") {
  console.log(answers.FirstNumber + answers.SecondNumber);
} else if (answers.operator === "Subtraction") {
  console.log(answers.FirstNumber - answers.SecondNumber);
} else if (answers.operator === "Multiplication") {
  console.log(answers.FirstNumber * answers.SecondNumber);
} else if (answers.operator === "Divison") {
  console.log((answers.FirstNumber / answers.SecondNumber).toFixed(3));
} else {
  console.log("please select valid operator");
}
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//




