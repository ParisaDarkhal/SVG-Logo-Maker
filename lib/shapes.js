let shape = "";
// function to generate SVG tag for shape (gets data form question prompts from index.js)
function generateShape(data) {
  if (data.shape === "Circle") {
    shape = `<circle class="outline" cx="250" cy="250" r="100" fill="${
      data.shapeColor
    }" stroke="black" stroke-width="2"/><text x="250" y="260" fill="${
      data.textColor
    }" text-anchor="middle" font-size="2rem">${data.text.toUpperCase()}</text>`;
  } else if (data.shape === "Square") {
    shape = `<rect x="150" y="150" width="200" height="200" fill="${
      data.shapeColor
    }" rx="10" ry="10" stroke="black" stroke-width="2"/><text x="250" y="260" fill="${
      data.textColor
    }" text-anchor="middle" font-size="2rem">${data.text.toUpperCase()}</text>`;
  } else if (data.shape === "Triangle") {
    shape = `<polygon points="250,150 135,350 365,350" stroke="black" stroke-width="2" fill="${
      data.shapeColor
    }"/><text x="250" y="280" fill="${
      data.textColor
    }" text-anchor="middle" font-size="2rem"> ${data.text.toUpperCase()}</text>`;
  }
  return shape;
}

module.exports = generateShape;
