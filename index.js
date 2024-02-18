const fs = require('fs'); //This imports the Node.js built-in File System module. The 'fs' module provides functions for interacting with the file system, allowing us to read from and write to files.
const path = require('path'); //This imports another built-in Node.js module called 'path'. The 'path' module provides utilities for working with file and directory paths. It helps with tasks like resolving relative paths, joining paths, and extracting file extensions.
const inquirer = require('inquirer'); //This imports the 'inquirer' module. Inquirer simplifies the process of getting user input through the command line by providing a set of interactive prompts.
const generateMarkdown = require('./utils/generateMarkdown'); //This imports a custom module located at './utils/generateMarkdown.js'. The 'generateMarkdown' module contains functions or data related to generating markdown content.

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of the project?',
    },
    {
        type: 'checkbox',
        name: 'table-of-contents',
        message: 'Please select all the items you would like to include in your table of contents:',
        choices: ['Installation', 'Usage', 'Licence', 'Contributing', 'Tests', 'Questions']
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license you would like to include in your project:',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe the contributions to your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the testing of your project:',
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'Please enter your GitHub username:',
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'Please enter your email address:',
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README.md has been successfully generated as ${fileName}`);
        }
    });
}

// function to initialize program
async function init() {
    try {

        const userResponses = await inquirer.prompt(questions);

        const markdownContent = generateMarkdown(userResponses);

        const outputFileName = 'README.md';

        writeToFile(outputFileName, markdownContent);

    } catch (error) {
        console.error('Error initializing program:', error);
    }
}

// function call to initialize program
init();
