const fs = require('fs'); //This imports the Node.js built-in File System module. The 'fs' module provides functions for interacting with the file system, allowing us to read from and write to files.
const path = require('path'); //This imports another built-in Node.js module called 'path'. The 'path' module provides utilities for working with file and directory paths. It helps with tasks like resolving relative paths, joining paths, and extracting file extensions.
const inquirer = require('inquirer'); //This imports the 'inquirer' module. Inquirer simplifies the process of getting user input through the command line by providing a set of interactive prompts.
const generateMarkdown = require('./utils/generateMarkdown'); //This imports a custom module located at './utils/generateMarkdown.js'. The 'generateMarkdown' module contains functions or data related to generating markdown content.

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
