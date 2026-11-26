// ELEC 3 - Node.js Self-Paced Learning Assignment
// Name: Justine Barlaan
// Section: IV-BSIT B
// Activity Code: N2 - Modular Calculator (formatter module)
// Date: November 24, 2026

// Import the built-in 'os' module as required by the activity
const os = require('os');

/**
 * Formats a calculation result for display
 * @param {string} operation - The operation name (add, subtract, multiply, divide, average)
 * @param {number[]} numbers - Array of numbers used in the calculation
 * @param {number|null} result - The calculated result (null indicates error)
 * @returns {string} Formatted string like "12 + 8 = 20" or error message
 */
function formatResult(operation, numbers, result) {
  // Define operation symbols for display
  const symbols = {
    add: '+',
    subtract: '-',
    multiply: 'x',
    divide: '÷',
    average: 'avg'
  };

  const symbol = symbols[operation] || operation;

  // Demonstrate using the built-in os module - get platform info
  const platform = os.platform();

  // Handle division by zero error
  if (result === null) {
    return `Error: Cannot divide by zero (running on ${platform})`;
  }

  // Format based on operation type
  if (operation === 'average') {
    // For average, show all numbers
    const numsStr = numbers.join(', ');
    return `Average of [${numsStr}] = ${result} (platform: ${platform})`;
  } else {
    // For binary operations, show as "a + b = result"
    const numsStr = numbers.join(` ${symbol} `);
    return `${numsStr} = ${result} (platform: ${platform})`;
  }
}

// Export the function using module.exports (CommonJS)
module.exports = {
  formatResult
};