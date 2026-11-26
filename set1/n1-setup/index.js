// ELEC 3 - Node.js Self-Paced Learning Assignment
// Name: Justine Barlaan
// Section: IV-BSIT B
// Activity Code: N1 - Project Setup and Package Management
// Date: November 23, 2026

// Import chalk for colored console output (external dependency)
import chalk from 'chalk';

// Print a welcome message with student information
console.log(chalk.blue('='.repeat(50)));
console.log(chalk.green.bold('ELEC 3 - Node.js Activity N1'));
console.log(chalk.blue('='.repeat(50)));
console.log(chalk.yellow('Student Name:'), chalk.white('Justine Barlaan'));
console.log(chalk.yellow('Section:'), chalk.white('IV-BSIT B'));
console.log(chalk.yellow('Activity:'), chalk.white('Project Setup and Package Management'));
console.log(chalk.blue('='.repeat(50)));
console.log(chalk.green('\nProject initialized successfully!'));
console.log(chalk.cyan('Package.json created with dependencies and devDependencies.'));
console.log(chalk.cyan('Run "npm start" to execute this program.'));
console.log(chalk.cyan('Run "npm run dev" to execute with nodemon for development.'));