// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    "What is your project title?",
    "What is the description of this project?",
    "What are the installation instructions for this project?",
    "What is the usage information for this project?",
    "What are the contribution guidelines for this project?",
    "What are the test instructions for this project?",
    "Which license is the project covered under?",
    "What is your GitHub username?",
    "What is your Email Address?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err =>
        err ? console.error(err) : console.log('README creation succeed!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: questions[0],
                name: 'title',
            },
            {
                type: 'input',
                message: questions[1],
                name: 'description',
            },
            {
                type: 'input',
                message: questions[2],
                name: 'installInstruc',
            },
            {
                type: 'input',
                message: questions[3],
                name: 'usageInfo',
            },
            {
                type: 'input',
                message: questions[4],
                name: 'contributionGuide',
            },
            {
                type: 'input',
                message: questions[5],
                name: 'testInstruct',
            },
            {
                type: 'checkbox',
                message: questions[6],
                name: 'license',
                choices: [
                    'MIT License',
                    new inquirer.Separator(),
                    'Apache License 2.0',
                    new inquirer.Separator(),
                    'GNU General Public License v3.0',
                    new inquirer.Separator()
                ]
            },
            {
                type: 'input',
                message: questions[7],
                name: 'username',
            },
            {
                type: 'input',
                message: questions[8],
                name: 'email',
            },
        ])
        .then((response) => {
            writeToFile("README.md", generateMarkdown(response));
        })
}

// Function call to initialize app
init();
