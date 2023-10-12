// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'n/a') {
    return '';
  } else if (license === 'MIT') {
    return `[![License: MIT]`
  } else if (license === 'Boost') {
    return `[![License]`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'n/a') {
    return '';
  } else if (license === 'MIT') {
    return `(https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if (license === 'Boost') {
    return `(https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'n/a') {
    return '';
  } else {
    return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseSection(data.license[0])}
`;
}

module.exports = generateMarkdown;
