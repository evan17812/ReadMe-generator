// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    'What is your project title?',
    'What is the description?',
    'What are the installation instructions?',
    'What is the usage information?',
    'What is the contribution guidelines?',
    'What are the test instructions?',
    'What is the License used?',
    'What is your Github Username?',
    'What is your email address?',
  ];
inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your project title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'What is the description?',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the installation instructions?',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the usage information?',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'What is the contribution guidelines?',
        },
        {
            type: 'input',
            name: 'test',
            message: 'What are the test instructions?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What is the License used?',
            choices: ['Apache license 2.0', 'Academic Free License v3.0','MIT']
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your Github Username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },

    ])
    .then((data) => {
        writeToFile('README.md', data);
      });
    
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        const content = `
      # ${data.name}
      
      ## Description
      ${data.description}
      
      ## Table of Contents
      1. [Installation](#installation)
      2. [Usage](#usage)
      3. [Contribution](#contribution)
      4. [Tests](#tests)
      5. [License](#license)
      6. [Contact](#contact)
      
      ## Installation
      ${data.installation}
      
      ## Usage
      ${data.usage}
      
      ## Contribution
      ${data.contribution}
      
      ## Tests
      ${data.test}
      
      ## License
      This project is licensed under the ${data.license} License.
      
      ## Contact
      - GitHub: [${data.github}](https://github.com/${data.github})
      - Email: ${data.email}
      `;
      
        fs.writeFile(fileName, content, (err) =>
          err ? console.log(err) : console.log('Success! README.md file has been generated.')
        );
      }
      
      // TODO: Create a function to initialize app
      function init() {
        // Your initialization logic here
      }
      
      // Function call to initialize app
      init();
    