// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenseBadgeInfo = {
  mit: {
    badge: "![License](https://img.shields.io/badge/License-MIT-yellow)",
    link: "https://opensource.org/licenses/MIT",
  },
  apache: {
    badge: "![License](https://img.shields.io/badge/License-Apache_2.0-blue)",
    link: "https://opensource.org/licenses/Apache-2.0",
  },
  gnu: {
    badge: "![License](https://img.shields.io/badge/License-GPLv3-green)",
    link: "https://www.gnu.org/licenses/gpl-3.0",
  }
}
function renderLicenseBadge(license) {
  let licenseBadge;
  switch (license) {
    case 'MIT License':
      licenseBadge = licenseBadgeInfo.mit.badge;
      break;
    case 'Apache License 2.0':
      licenseBadge = licenseBadgeInfo.apache.badge;
      break;
    case 'GNU General Public License v3.0':
      licenseBadge = licenseBadgeInfo.gnu.badge;
      break;
    default:
      licenseBadge = '';
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
  switch (license) {
    case 'MIT License':
      licenseLink = licenseBadgeInfo.mit.link;
      break;
    case 'Apache License 2.0':
      licenseLink = licenseBadgeInfo.apache.link;
      break;
    case 'GNU General Public License v3.0':
      licenseLink = licenseBadgeInfo.gnu.link;
      break;
    default:
      licenseLink = '';
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseChoice) {
  console.log(licenseChoice);
  if (licenseChoice && licenseChoice.length > 0) {
    const license = licenseChoice[0];
    console.log(license);
    return `## License
  Node.js is available under the [${license}](${renderLicenseLink(license)}).
    
${renderLicenseBadge(license)}`;
  } else {
    return `## License
  
  No Licenses for this project`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description

${data.description}

## Table of Contents


- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.testInstruct}

## Usage

${data.usageInfo}

## Contributing

${data.contributionGuide}

## Tests

${data.testInstruct}

${renderLicenseSection(data.license)}

## Questions

Github Username: ${data.username}

Gihub Link: <https://github.com/${data.username}>

Email Address: <${data.email}>

`;
}

module.exports = generateMarkdown;
