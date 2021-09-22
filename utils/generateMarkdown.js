// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `  # ${data.title}
  
  ## Description

  ![License]

  ${data.description}


  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ### Installation

  Necessary dependencies, needed to run in the console:

  \`\`\`${data.installation}\`\`\`

  ### Usage 

  ${data.usage}

  ### License

  License used in this project:

  ${data.license}


  ### Contributuing

  These are the following contributers:

  \`\`\`${data.contributing}\`\`\`

  ### Tests

  If you'd like test, used the code bellow in the console:

  \`\`\`${data.test}\`\`\`

  ### Questions
 
  If there is any questions please take a look at my [GitHub](https://github.com/${data.github}) or feel free to contact me through ${data.email}

`;
}

module.exports = generateMarkdown;
