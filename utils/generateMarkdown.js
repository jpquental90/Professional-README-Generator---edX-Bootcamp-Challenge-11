//Function to generate markdown for README
function generateMarkdown(data) {
  let markdownContent = '';

  //Adds License badge at the top
  if (data.license) {
    markdownContent += generateLicenseBadge(data) + '\n\n';
  }
  
  //Adds titles and answers to each section
  markdownContent += `# ${data.title}\n\n`;

  if (data.description) {
      markdownContent += `## Description\n${data.description}\n\n`;
  }

  markdownContent += `## Table of Contents\n${generateTableOfContents(data)}\n\n`;

  if (data.installation) {
      markdownContent += `## Installation\n${data.installation}\n\n`;
  }

  if (data.usage) {
      markdownContent += `## Usage\n${data.usage}\n\n`;
  }

  if (data.license) {
    markdownContent += `## License\n`;
  }

  if (data.contributing) {
      markdownContent += `## Contributing\n${data.contributing}\n\n`;
  }

  if (data.tests) {
      markdownContent += `## Tests\n${data.tests}\n\n`;
  }

  if (data.questions1 && data.questions2) {
      markdownContent += `## Questions\nGitHub Profile: [${data.questions1}](https://github.com/${data.questions1})\n\nFor additional questions or comments, please contact me here: ${data.questions2}\n\n`;
  }

  if (data.license) {
    markdownContent += generateLicenseSection(data) + '\n\n';
  }

  return markdownContent;
}

//Function to define the license badges and links
function generateLicenseBadge(data) {

  const licenseBadges = {
    'Apache License 2.0': '[![License: Apache_2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'GNU General Public License (GPL) v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause License': '[![License: BSD 3--Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };

  const selectedBadge = licenseBadges[data.license];

  return selectedBadge;
}

//Function to generate a table of contents based on the user selection
function generateTableOfContents(data) {
  const selectedSections = data.tableOfContents.map(item => {
      return `- [${item}](#${item.toLowerCase()})`;
  });

  return selectedSections.join('\n');
}

//Function to generate license notice
function generateLicenseSection(data) {
  return `This project is licensed under the ${data.license}.`;
}

module.exports = generateMarkdown;