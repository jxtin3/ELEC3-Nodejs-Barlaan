// ELEC 3 - Node.js Self-Paced Learning Assignment
// Name: Justine Barlaan
// Section: IV-BSIT B
// Activity Code: N2 - Modular Calculator
// Date: November 24, 2026

// Import custom modules using require()
// operations.js exports: add, subtract, multiply, divide, average
const operations = require('./operations');

// Import formatter module - using named export from module.exports object
const formatter = require('./formatter');

// Import built-in 'path' module as required by activity
const path = require('path');

// Get command line arguments (process.argv)
// process.argv[0] = node executable path
// process.argv[1] = script path (index.js)
// process.argv[2] = operation (add, subtract, multiply, divide, average)
// process.argv[3...] = numbers
const args = process.argv.slice(2); // Remove first two elements

// Check if operation is provided
if (args.length < 1) {
  console.log('Usage: node index.js <operation> <numbers...>');
  console.log('Operations: add, subtract, multiply, divide, average');
  console.log('Examples:');
  console.log('  node index.js add 12 8');
  console.log('  node index.js subtract 20 5');
  console.log('  node index.js multiply 6 7');
  console.log('  node index.js divide 20 4');
  console.log('  node index.js average 10 20 30 40 50');
  process.exit(1);
}

const operation = args[0].toLowerCase(); // Get operation name
const numbers = args.slice(1).map(arg => parseFloat(arg)); // Convert remaining args to numbers

// Validate that all arguments are valid numbers
const hasInvalidNumber = numbers.some(num => isNaN(num));
if (hasInvalidNumber) {
  console.log('Error: All arguments after operation must be valid numbers');
  process.exit(1);
}

// Perform the calculation based on operation
let result;

switch (operation) {
  case 'add':
    if (numbers.length < 2) {
      console.log('Error: add requires at least 2 numbers');
      process.exit(1);
    }
    result = operations.add(numbers[0], numbers[1]);
    break;

  case 'subtract':
    if (numbers.length < 2) {
      console.log('Error: subtract requires at least 2 numbers');
      process.exit(1);
    }
    result = operations.subtract(numbers[0], numbers[1]);
    break;

  case 'multiply':
    if (numbers.length < 2) {
      console.log('Error: multiply requires at least 2 numbers');
      process.exit(1);
    }
    result = operations.multiply(numbers[0], numbers[1]);
    break;

  case 'divide':
    if (numbers.length < 2) {
      console.log('Error: divide requires at least 2 numbers');
      process.exit(1);
    }
    result = operations.divide(numbers[0], numbers[1]);
    break;

  case 'average':
    if (numbers.length < 1) {
      console.log('Error: average requires at least 1 number');
      process.exit(1);
    }
    result = operations.average(numbers);
    break;

  default:
    console.log(`Error: Unknown operation "${operation}"`);
    console.log('Valid operations: add, subtract, multiply, divide, average');
    process.exit(1);
}

// Use formatter to display the result
const formattedOutput = formatter.formatResult(operation, numbers, result);
console.log(formattedOutput);

// Demonstrate using path module (built-in) - show the current script's directory
const scriptDir = path.dirname(process.argv[1]);
console.log(`\nScript running from: ${scriptDir}`);