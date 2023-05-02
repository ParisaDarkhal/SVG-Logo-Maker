// inport from shape module
const generateShape = require("./shapes");

// function to generate logo.svg file
function createSVGfile(data) {
  return `<?xml version="1.0" standalone="no"?>
  <svg xmlns="http://www.w3.org/2000/svg" style="background-color: white" width="500" height="500">
  ${generateShape(data)}
  </svg>`;
}

module.exports = createSVGfile;
