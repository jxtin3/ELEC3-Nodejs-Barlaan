// ELEC 3 - Node.js Self-Paced Learning Assignment
// Name: Justine Barlaan
// Section: IV-BSIT B
// Activity Code: N2 - Modular Calculator (operations module)
// Date: November 24, 2026

/**
 * Adds two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtracts second number from first
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplies two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Divides first number by second
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number|null} Quotient of a and b, or null if dividing by zero
 */
function divide(a, b) {
  // Check for division by zero
  if (b === 0) {
    return null; // Return null to indicate error
  }
  return a / b;
}

/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers
 * @returns {number} Average of the numbers, or 0 if array is empty
 */
function average(numbers) {
  if (!numbers || numbers.length === 0) {
    return 0;
  }
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}

// Export all functions using module.exports (CommonJS)
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  average
};