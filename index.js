const fs = require('fs'); //This imports the Node.js built-in File System module. The 'fs' module provides functions for interacting with the file system, allowing us to read from and write to files.
const path = require('path'); //This imports another built-in Node.js module called 'path'. The 'path' module provides utilities for working with file and directory paths. It helps with tasks like resolving relative paths, joining paths, and extracting file extensions.
const inquirer = require('inquirer'); //This imports the 'inquirer' module. Inquirer simplifies the process of getting user input through the command line by providing a set of interactive prompts.
const generateMarkdown = require('./utils/generateMarkdown'); //This imports a custom module located at './utils/generateMarkdown.js'. The 'generateMarkdown' module contains functions or data related to generating markdown content.

//List of questions that will be asked to the user
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
        name: 'tableOfContents',
        message: 'Please select all the items you would like to include in your table of contents:',
        choices: ['Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Describe the installation of your project:',
        when: (answers) => answers.tableOfContents.includes('Installation')
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project:',
        when: (answers) => answers.tableOfContents.includes('Usage')
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select the license you would like to include in your project:',
        choices: ['MIT License', 'Apache License 2.0', 'GNU General Public License (GPL) v3', 'Mozilla Public License 2.0', 'BSD 3-Clause License'],
        when: (answers) => answers.tableOfContents.includes('License')
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Describe the contributions to your project:',
        when: (answers) => answers.tableOfContents.includes('Contributing')
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Describe the testing of your project:',
        when: (answers) => answers.tableOfContents.includes('Tests')
    },
    {
        type: 'input',
        name: 'questions1',
        message: 'Please enter your GitHub username:',
        when: (answers) => answers.tableOfContents.includes('Questions')
    },
    {
        type: 'input',
        name: 'questions2',
        message: 'Please enter your email address:',
        when: (answers) => answers.tableOfContents.includes('Questions')
    },
];

//Function to write into a README.md file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`README.md has been successfully generated as ${fileName}`);
        }
    });
}

//Function collecting user responses and writing them into the file - error message displayed if there is any issue
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

//Calling init function
init();