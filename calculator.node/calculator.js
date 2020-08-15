// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "operand" (add, subtract, multiply, etc) and the numbers
var operand = inputString[2];
var num1 = inputString[3];
var num2 = inputString[4];

// Here's the variable we will be modifying with the new numbers
var outputNum;

// Determines the operand selected...
// Based on the operand we run the appropriate math on the two numbers
switch (operand) {
case "add":
  outputNum = parseFloat(num1) + parseFloat(num2);
  break;

case "subtract":
  outputNum = parseFloat(num1) - parseFloat(num2);
  break;

case "multiply":
  outputNum = parseFloat(num1) * parseFloat(num2);
  break;

case "divide":
  outputNum = parseFloat(num1) / parseFloat(num2);
  break;

case "remainder":
  outputNum = parseFloat(num1) % parseFloat(num2);
  break;

case "exp":
  outputNum = Math.pow(num1, num2);
  break;

case "algebra":
  outputNum = parseAlgebra(num1);
  break;

default:
  outputNum = "Not a recognized command";
}

// Prints the outputNumber
console.log(outputNum);