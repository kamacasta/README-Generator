// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
  // Questions begin using multi-line strings (prompts)
  return inquirer.prompt([
    {
      type: "input",
      name: "author",
      message: "Please enter the name of the author.",
    },
    {
      type: "input",
      name: "email",
      message: "Please enter a valid email address.",
    },
    {
      type: "input",
      name: "github",
      message: "Please enter your GitHub username. ",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please describe the project!",
    },
    {
      type: "input",
      name: "contributing",
      message:
        "If the user wanted to contribute to the repository what should they know?",
    },
    {
      type: "input",
      name: "installation",
      message: "To install dependencies what are the necessary commands used.",
    },
    {
      type: "input",
      name: "test",
      message: "To run tests what are the necessary commands used?",
    },
    {
      type: "input",
      name: "usage",
      message: "Why does the user use this repository",
    },
    {
      type: "list",
      name: "license",
      message: "What license is the project using?",
      choices: ["None", "MIT", "APACHE", "GPL"],
    },
  ]);
  // prompts ended
};

//Const created at the top of the file for the prompts
questions().then((readmedata) => {
  // created a readmeMD for generateMarkdown to recieve data
  const readmeMD = generateMarkdown(readmedata);
  // fs.write file will write the specified data to a file
  fs.writeFile("./generated/generatedREADME.md", readmeMD, (err) => {
    if (err) throw Error(err);
    // console.log to let the user know the ReadMe has been created!
    console.log("Your personalized ReadMe has been completed!");
  });
});
