// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  ${generateTableOfContents(data)}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${generateLicenseSection(data)}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  GitHub Profile: [${data.questions1}](https://github.com/${data.questions1})
  
  For additional questions, contact me at: ${data.questions2}
`;
}

function generateTableOfContents(data) {
  const selectedSections = data.tableOfContents.map(item => {
      return `- [${item}](#${item.toLowerCase()})`;
  });

  return selectedSections.join('\n');
}

function generateLicenseSection(data) {
  // // Add logic here to include the selected license badge and notice
  // // Example: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // // and a notice based on the selected license
  // return `[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license.toLowerCase()})\n\nThis project is licensed under the ${data.license} License.`;
}

module.exports = generateMarkdown;
