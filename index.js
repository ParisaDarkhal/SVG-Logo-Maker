// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const HTMLfile = require("./lib/generateHTMLfile");

// Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "text-color",
    message: "What color should your text be?",
  },
  {
    type: "input",
    name: "text",
    message: "Pleas enter three letters as your chosen text:",
  },
  {
    type: "input",
    name: "shape-color",
    message: "What color should your shape be?",
  },
  {
    type: "list",
    name: "shape",
    message: "Please chose a shape:",
    choices: ["Circle", "Square", "Triangle"],
  },
];

function askQustions() {
  return inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    // const newHTMLfile = HTMLfile(answers);
    // fs.writeFile("./lib/index.html", newHTMLfile, () => {
    //   console.log(
    //     "Done! Please check lib forlder to find your newly generated index.html file."
    //   );
    //   return answers;
    // }).catch((error) => console.log(error));
  });
}

// call askQuestions function
askQustions();
