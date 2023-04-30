// inport from shape module
const shape = require("./lib/shapes");

// function to generate index.html containing SVG (gets data form question prompts from index.js)
function generateHTMLfile(data) {
  return `
  <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Your Logo</title>
  </head>
  <body>
  <svg style="background-color: white" width="500" height="500">
  
  
  </svg>
  </body>


    
    `;
}

mudule.exports = generateHTMLfile;
