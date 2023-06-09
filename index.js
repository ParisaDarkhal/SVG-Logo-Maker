// packages needed for this application
const inquirer = require("inquirer");
const { writeFile } = require("fs/promises");
const createHTMLfile = require("./lib/generateHTMLfile");
const createSVGfile = require("./lib/generateSVGfile");

// validation function
const checkInputText = async (input) => {
  if (input.length > 3) {
    return false;
  }
  return true;
};

// Creating an array of questions for user input
const questions = [
  {
    type: "input",
    name: "textColor",
    message: "What color should your text be?",
  },
  {
    type: "input",
    name: "text",
    message: "Pleas enter THREE letters as your chosen text:",
    validate: checkInputText,
  },
  {
    type: "input",
    name: "shapeColor",
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
    const newHTMLfile = createHTMLfile(answers);
    const newSVGfile = createSVGfile(answers);
    const fileStatus = writeFile("./examples/index.html", newHTMLfile)
      .then((fileStatus) => {
        if (fileStatus === undefined) {
          console.log(
            "Done! Please check examples forlder to find your newly generated index.html file."
          );
        }
      })
      .catch((error) => console.log(error));
    console.log("fileStatus :>> ", fileStatus);
    const svgFileStatus = writeFile("./examples/logo.svg", newSVGfile)
      .then((fileStatus) => {
        if (fileStatus === undefined) {
          console.log(
            "Done! Please check examples forlder to find your newly generated logo.svg file."
          );
        }
      })
      .catch((error) => console.log(error));
    console.log("fileStatus :>> ", svgFileStatus);
  });
}

// call askQuestions function
askQustions();
