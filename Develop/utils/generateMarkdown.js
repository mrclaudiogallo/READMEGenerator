// function to generate markdown for README
function generateMarkdown(answers) {
  return `
![](https://img.shields.io/badge/License-${answers.license}-green)

## ${answers.title}
  
# Description
${answers.description}

# Table of Contents<br>

1.[Installation](#installation)<br>
2.[Usage](#usage)<br>
3.[Contributing](#contributing)<br>
4.[Tests](#tests)<br>
5.[Questions](#questions)<br>

# Installation
${answers.installation}

# Usage
${answers.usage}

# Contributing
${answers.contributing}

# Tests
${answers.tests}

# Questions
Email: ${answers.email}
Github: https://github.com/${answers.github}

©${answers.license}
`;
}

module.exports = generateMarkdown;
