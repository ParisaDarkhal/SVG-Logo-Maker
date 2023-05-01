const ValidateShape = require("../lib/shapes");

describe("validate circle", () => {
  it("should return TRUE if a circle tag with red fill, and black text RYAN is returned", () => {
    const testCircle =
      '<circle class="outline" cx="250" cy="250" r="100" fill="red" stroke="black" stroke-width="2"/><text x="250" y="260" fill="black" text-anchor="middle" font-size="2rem">RYAN</text>';
    const data = {
      textColor: "black",
      text: "ryan",
      shape: "Circle",
      shapeColor: "red",
    };
    const resultCircle = ValidateShape(data);
    expect(resultCircle).toEqual(testCircle);
  });
});

describe("validate rectangle", () => {
  it("should return TRUE if a rect tag with green fill and white text FDA is returned", () => {
    const testRect =
      '<rect x="150" y="150" width="200" height="200" fill="green" rx="10" ry="10" stroke="black" stroke-width="2"/><text x="250" y="260" fill="white" text-anchor="middle" font-size="2rem">FDA</text>';
    const data = {
      textColor: "white",
      text: "fda",
      shape: "Square",
      shapeColor: "green",
    };
    const resultRect = ValidateShape(data);
    expect(resultRect).toEqual(testRect);
  });
});

describe("validate triangle", () => {
  it("should return TRUE if a polygon tag with yellow fill and blue text CDC is returned", () => {
    const testTriangle =
      '<polygon points="250,150 135,350 365,350" stroke="black" stroke-width="2" fill="yellow"/><text x="250" y="280" fill="blue" text-anchor="middle" font-size="2rem"> CDC</text>';

    const data = {
      textColor: "blue",
      text: "cdc",
      shape: "Triangle",
      shapeColor: "yellow",
    };
    const resultTriangle = ValidateShape(data);
    expect(resultTriangle).toEqual(testTriangle);
  });
});
