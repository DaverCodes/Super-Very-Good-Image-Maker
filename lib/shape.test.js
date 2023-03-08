const {Circle, Shapes} = require("./svggen")


test('set text to shape', () => {
    const shape = new Shapes("svg", "blue", "red")
    expect(shape.text).toBe("svg");
  });
test('set text color to shape', () => {
    const shape = new Shapes("svg", "blue", "red")
    expect(shape.textColor).toBe("blue");
  });
test('set text color to shape', () => {
    const shape = new Shapes("svg", "blue", "red")
    expect(shape.shapeColor).toBe("red");
  });


test('set text to circle', () => {
    const shape = new Circle("svg", "blue", "red")
    expect(shape.text).toBe("svg");
  });
test('set text color to circle', () => {
    const shape = new Circle("svg", "blue", "red")
    expect(shape.textColor).toBe("blue");
  });
test('set text color to circle', () => {
    const shape = new Circle("svg", "blue", "red")
    expect(shape.shapeColor).toBe("red");
  });



