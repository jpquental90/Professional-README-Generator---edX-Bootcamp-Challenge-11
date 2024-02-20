// function to generate markdown for README
function generateMarkdown(data) {
  let markdownContent = '';

  // Add License badge at the top
  if (data.license) {
    markdownContent += generateLicenseBadge(data) + '\n\n';
  }
  
  markdownContent += `# ${data.title}\n\n`;

  // Add Description section
  if (data.description) {
      markdownContent += `## Description\n${data.description}\n\n`;
  }

  // Add Table of Contents section
  markdownContent += `## Table of Contents\n${generateTableOfContents(data)}\n\n`;

  // Add Installation section if user provided installation details
  if (data.installation) {
      markdownContent += `## Installation\n${data.installation}\n\n`;
  }

  // Add Usage section if user provided usage details
  if (data.usage) {
      markdownContent += `## Usage\n${data.usage}\n\n`;
  }

  // Add License section if user selected a license
  if (data.license) {
      // Notice about the license will be added here later
      markdownContent += `## License\n`;
  }

  // Add Contributing section if user provided contribution details
  if (data.contributing) {
      markdownContent += `## Contributing\n${data.contributing}\n\n`;
  }

  // Add Tests section if user provided testing details
  if (data.tests) {
      markdownContent += `## Tests\n${data.tests}\n\n`;
  }

  // Add Questions section if user provided GitHub username and email
  if (data.questions1 && data.questions2) {
      markdownContent += `## Questions\nGitHub Profile: [${data.questions1}](https://github.com/${data.questions1})\n\nFor additional questions or comments, please contact me here: ${data.questions2}\n\n`;
  }

  // Add license notice (if a license is selected)
  if (data.license) {
    markdownContent += generateLicenseSection(data) + '\n\n';
  }

  return markdownContent;
}

function generateLicenseBadge(data) {
  // Define the license badges and links
  const licenseBadges = {
    'Apache License 2.0': '[![License: Apache_2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'Mozilla Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    'GNU General Public License (GPL) v3': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3-Clause License': '[![License: BSD 3--Clause](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };

  // Get the selected license badge
  const selectedBadge = licenseBadges[data.license];

  // Return the selected badge
  return selectedBadge;
}

function generateTableOfContents(data) {
  const selectedSections = data.tableOfContents.map(item => {
      return `- [${item}](#${item.toLowerCase()})`;
  });

  return selectedSections.join('\n');
}

function generateLicenseSection(data) {
  // Define the license notice
  return `This project is licensed under the ${data.license}.`;
}

module.exports = generateMarkdown;