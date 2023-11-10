// Function to generate a license badge based on the selected license
function renderLicenseBadge(license) {
    // Determine the badge text based on the selected license and return empty if none selelected
  switch (license) {
    case 'MIT':
      return `[![License: MIT]`;
    case 'Boost':
      return `[![License]`;
    case 'Apache':
      return `[![License]`;
    case 'IBM':
      return `[![License: IPL 1.0]`;
    default:
      return '';
  }  
}

// Function to generate a link to the license information based on the selected license
function renderLicenseLink(license) {
    // Determine the link text based on the selected license or return empty
  switch (license) {
    case 'MIT':
     return `(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Boost':
     return `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Apache':
     return `(https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'IBM':
     return `(https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    default:
     return '';
  } 
}

// Function to generate the license section for the README
function renderLicenseSection(license) {
  if (license === 'n/a') {
    return 'N/A';
  } else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }
}

// Main function to generate the markdown for the README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license[0])}
`;
}

module.exports = generateMarkdown;




 
