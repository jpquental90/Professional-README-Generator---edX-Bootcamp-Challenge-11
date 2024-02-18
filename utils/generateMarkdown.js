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

module.exports = generateMarkdown;
