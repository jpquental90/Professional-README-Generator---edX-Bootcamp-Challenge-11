// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    ## Table of contents
    ${data.table-of-contents}
`;
}

module.exports = generateMarkdown;
