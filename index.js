// Include packages needed for this application
const fs = require(`fs`);
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
console.log('Welcome to your personal README Generator');
console.log('Please answer a few questions to generate your own quality README file.');
// Array of questions for user_input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a title to continue to next question');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your project',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a description to continue to next question');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'installation',
        message: 'How to install your project?',
        validation: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a installation to continue to next question');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'motivation',
        message: 'What is the motivation of your project',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a motivation to continue to next question');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'problems',
        message: 'What problem does your project address',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a problem to continue to next question');
            }}
    },

    {
        type: 'input',
        name: 'solution',
        message: 'What was the solution to your problem',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a solution to continue to next question');
                return false;
            }}
    },

    {
        type: 'list',
        name: 'license_badge',
        message: 'Please choose a license badge from the list below',
        choices: ['Apache 2.0', 'Boost Software 1.0', 'BSD 3-Clause', 'BSD 2-Clause']
    },

    {
        type: 'input',
        name: 'usage',
        message: 'Please describe how to use your application, such as istructions and examples.',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter a usage to continue to next question.');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'contributions',
        message: 'Please identify your projects contributors.',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Enter your project contributors to continue to the next question.');
                return false;
            }}    
    },

    {
        type: 'input',
        name: 'testing',
        message: 'Please write and describe any tests for your application.',
        validate: user_input => {
            if (user_input) {
                return true;
            }else {
                console.log('Please enter a test description to complete your README file.');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub Username.',
        validate: github_input => {
            if (github_input) {
                return true;
            }else {
                console.log('Please enter your GitHub username!');
                return false;
            }}
    },

    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address for those who have questions about your application.',
        validate: email_input => {
            if (email_input) {
                return true;
            }else {
                console.log('Please enter your email address.');
                return false;
            }}
    },
];

// Function to write README file
function writeToFile(fileName, data) {
   fs.writeFile(fileName, data, (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("You have successfully created your README file!!");
   });
};

// Function to initialize app
function init() {
inquirer.prompt(questions)
.then(function (userInput){
    console.log(userInput)
    writeToFile("README.md", generateMarkdown(userInput));
});
};

// Function call to initialize app
init();
