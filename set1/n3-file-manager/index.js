// ELEC 3 - Node.js Self-Paced Learning Assignment
// Name: Justine Barlaan
// Section: IV-BSIT B
// Activity Code: N3 - File Manager with fs and path
// Date: November 26, 2026

// Import built-in modules
const fs = require('fs');
const path = require('path');

// Define the files directory path using path.join()
// This ensures cross-platform compatibility (works on Windows, Mac, Linux)
const FILES_DIR = path.join(__dirname, 'files');

// Ensure the files directory exists and create initial files if empty
function ensureFilesDir() {
  if (!fs.existsSync(FILES_DIR)) {
    fs.mkdirSync(FILES_DIR, { recursive: true });
    console.log(`Created files directory: ${FILES_DIR}`);
  }

  // Create at least 3 initial text files if directory is empty
  const files = fs.readdirSync(FILES_DIR);
  if (files.length === 0) {
    createInitialFiles();
  }
}

// Create three initial text files as required by the assignment
function createInitialFiles() {
  const initialFiles = [
    { name: 'notes.txt', content: 'Hello World\nThis is the first note file.' },
    { name: 'todo.txt', content: 'Task 1: Learn Node.js\nTask 2: Complete ELEC 3 assignment\nTask 3: Submit before deadline' },
    { name: 'readme.txt', content: 'ELEC 3 Node.js Activity N3\nFile Manager using fs and path modules\nCreated by Justine Barlaan' }
  ];

  initialFiles.forEach(file => {
    const filePath = path.join(FILES_DIR, file.name);
    fs.writeFileSync(filePath, file.content, 'utf8');
    console.log(`Created initial file: ${file.name}`);
  });
}

// Create a file with content
function createFile(filename, content) {
  // Build full file path using path.join()
  const filePath = path.join(FILES_DIR, filename);

  // Check if file already exists
  if (fs.existsSync(filePath)) {
    console.log(`Error: File "${filename}" already exists.`);
    return;
  }

  try {
    // Write content to file
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`File created: ${filePath}`);
    console.log(`Content: "${content}"`);
  } catch (error) {
    console.log(`Error creating file: ${error.message}`);
  }
}

// Read a file and display its contents
function readFile(filename) {
  const filePath = path.join(FILES_DIR, filename);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log(`Error: File "${filename}" does not exist.`);
    return;
  }

  try {
    const content = fs.readFileSync(filePath, 'utf8');
    console.log(`File: ${filePath}`);
    console.log(`Content: "${content}"`);
  } catch (error) {
    console.log(`Error reading file: ${error.message}`);
  }
}

// Update a file by appending text
function updateFile(filename, content) {
  const filePath = path.join(FILES_DIR, filename);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log(`Error: File "${filename}" does not exist.`);
    return;
  }

  try {
    // Append content to file (add newline before new content if file not empty)
    const existingContent = fs.readFileSync(filePath, 'utf8');
    const separator = existingContent.length > 0 ? '\n' : '';
    fs.appendFileSync(filePath, separator + content, 'utf8');
    console.log(`File updated: ${filePath}`);
    console.log(`Appended: "${content}"`);
  } catch (error) {
    console.log(`Error updating file: ${error.message}`);
  }
}

// Delete a file
function deleteFile(filename) {
  const filePath = path.join(FILES_DIR, filename);

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    console.log(`Error: File "${filename}" does not exist.`);
    return;
  }

  try {
    fs.unlinkSync(filePath);
    console.log(`File deleted: ${filePath}`);
  } catch (error) {
    console.log(`Error deleting file: ${error.message}`);
  }
}

// List all files in the files directory with details
function listFiles() {
  // Check if directory exists
  if (!fs.existsSync(FILES_DIR)) {
    console.log('Files directory does not exist yet.');
    return;
  }

  try {
    const files = fs.readdirSync(FILES_DIR);

    if (files.length === 0) {
      console.log('No files in the directory.');
      return;
    }

    console.log('\n--- File List ---');
    files.forEach((filename, index) => {
      const filePath = path.join(FILES_DIR, filename);
      const stats = fs.statSync(filePath);
      const ext = path.extname(filename);
      const base = path.basename(filename, ext);

      console.log(`${index + 1}. ${filename}`);
      console.log(`   Full Path: ${filePath}`);
      console.log(`   Name: ${base}`);
      console.log(`   Extension: ${ext || '(none)'}`);
      console.log(`   Size: ${stats.size} bytes`);

      // Read and display content
      const content = fs.readFileSync(filePath, 'utf8');
      console.log(`   Content: "${content}"`);
      console.log('');
    });
    console.log(`Total files: ${files.length}`);
  } catch (error) {
    console.log(`Error listing files: ${error.message}`);
  }
}

// Main program - parse command line arguments
const args = process.argv.slice(2);

if (args.length < 1) {
  console.log('Usage: node index.js <command> [arguments...]');
  console.log('\nCommands:');
  console.log('  create <filename> <content>  - Create a new file with content');
  console.log('  read <filename>              - Read and display file contents');
  console.log('  update <filename> <content>  - Append content to existing file');
  console.log('  delete <filename>            - Delete a file');
  console.log('  list                         - List all files with details');
  console.log('\nExamples:');
  console.log('  node index.js create notes.txt "Hello World"');
  console.log('  node index.js read notes.txt');
  console.log('  node index.js update notes.txt "Additional line"');
  console.log('  node index.js delete notes.txt');
  console.log('  node index.js list');
  process.exit(1);
}

const command = args[0].toLowerCase();

// Ensure files directory exists before any operation
ensureFilesDir();

switch (command) {
  case 'create':
    if (args.length < 3) {
      console.log('Error: create command requires filename and content');
      console.log('Usage: node index.js create <filename> <content>');
    } else {
      const createFilename = args[1];
      const createContent = args.slice(2).join(' '); // Join remaining args as content
      createFile(createFilename, createContent);
    }
    break;

  case 'read':
    if (args.length < 2) {
      console.log('Error: read command requires filename');
      console.log('Usage: node index.js read <filename>');
    } else {
      readFile(args[1]);
    }
    break;

  case 'update':
    if (args.length < 3) {
      console.log('Error: update command requires filename and content');
      console.log('Usage: node index.js update <filename> <content>');
    } else {
      const updateFilename = args[1];
      const updateContent = args.slice(2).join(' ');
      updateFile(updateFilename, updateContent);
    }
    break;

  case 'delete':
    if (args.length < 2) {
      console.log('Error: delete command requires filename');
      console.log('Usage: node index.js delete <filename>');
    } else {
      deleteFile(args[1]);
    }
    break;

  case 'list':
    listFiles();
    break;

  default:
    console.log(`Error: Unknown command "${command}"`);
    console.log('Valid commands: create, read, update, delete, list');
    process.exit(1);
}