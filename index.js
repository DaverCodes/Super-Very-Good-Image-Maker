const { writeFile } = require("fs").promises;
const inquirer = require("inquirer");
const { Circle, Triangle, Square } = require("./lib/shapes");

const questions = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "text",
        message: "Enter up to three characters:",
      },
      {
        type: "input",
        name: "textColor",
        message: "Enter a color keyword (OR a hexadecimal number) for text:",
      },
      {
        type: "list",
        name: "shape",
        message: "Choose a shape:",
        choices: ["Circle", "Triangle", "Square"],
      },
      {
        type: "input",
        name: "shapeColor",
        message: "Enter a color keyword (OR a hexadecimal number) for shape:",
      },
    ])
    .then(function (answers) {
      console.log(answers);
      // Instantiate the chosen shape class with the chosen color
      let shape;
      switch (answers.shape) {
        case "Circle":
          shape = new Circle();
          break;
        case "Triangle":
          shape = new Triangle();
          break;
        case "Square":
          shape = new Square();
          break;
        default:
          console.error("Invalid shape choice:", answers.shape);
          return;
      }
      shape.setColor(answers.shapeColor);

      // Generate the SVG code for the shape
      const svg = `<svg xmlns="http://www.w3.org/2000/svg">
        ${shape.render()}
        <text x="150" y="100" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
      </svg>`;

      // Write the SVG code to a file
      const filename = `${answers.shape}-${Date.now()}.svg`;
      return writeFile(filename, svg).then(() => {
        console.log(`SVG file written to ${filename}`);
      });
    });
};

questions();
