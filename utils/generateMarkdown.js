// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license);  
  switch (license) {
    case 'Apache 2.0': 
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
      break;
    case 'Boost Software 1.0':
      return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)';
      break;
    case 'BSD 3-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'BSD 2-Clause':
      return '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)';
  }}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${data.title}
  ## License: ${renderLicenseBadge(data.license_badge)}
  #Title: ${data.title}

  ## Table of Contents:
  - Descriptions(#description)
  - Installation(#installation)
  - Motivation(#motivation)
  - Problems(#problems)
  - Solution(#solution)
  - Usage(#usage)
  - Contributions(#contributions)
  - Testing(#testing)
  - Questions(#questions)



  ## Description: 
  ${data.description}
  ## Installation: 
  ${data.installation}
  ## Motivation: 
  ${data.motivation}
  ## Problems: 
  ${data.problems}
  ## Solution: 
  ${data.solution}
  ## Usage: 
  ${data.usage} 
  ## Constributions: 
  ${data.contributions}
  ## Testing: 
  ${data.testing}
  ## Questions: 
    - Github: ${data.github}, (https://github.com/${data.github})
    - Email: ${data.email}, (${data.email})
`;
}

module.exports = generateMarkdown;
