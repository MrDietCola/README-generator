// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is the title of your project',
    name: 'title',
  },
  {
    type: 'text',
    message: 'Descripe your project?',
    name: 'description',
  },
  {
    type: 'text',
    message: 'Describe the installation process of the project?',
    name: 'installation',
  },
  {
    type: 'text',
    message: 'What is the purpose of your project?',
    name: 'usage',
  },
  {
    type: 'text',
    message: 'What license did you use?',
    name: 'license',
  },
  {
    type: 'text',
    message: 'What resources contributed to the project?',
    name: 'contributions',
  },
  {
    type: 'text',
    message: 'Tests?',
    name: 'tests',
  },
  {
    type: 'text',
    message: 'Questions',
    name: 'questions',
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName)
}

// TODO: Create a function to initialize app
function init() {
  inquirer
  .prompt(questions)
  .then((response) =>
    fs.writeFile('index.html', genHtmljs(response), (err) => 
    err ? console.error(err) : console.log('success!')))
}

// Function call to initialize app
init();


function genReadme(res) {
  return `# Challenge-5_Event-planner

  ## Description
  ${res.description}

  ![screenshot](<Screenshot (13).png>)

  ## Installation

 ${res.installation}

  ## Usage

  ${res.usage}

  ## License

  ${res.license}
`
}