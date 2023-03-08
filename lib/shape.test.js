const {Circle, Triangle, Square, Shapes} = require("./svggen")


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

  test('set text to Circle', () => {
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

test('set text to Triangle', () => {
    const shape = new Triangle("svg", "blue", "red")
    expect(shape.text).toBe("svg");
  });
test('set text color to Triangle', () => {
    const shape = new Triangle("svg", "blue", "red")
    expect(shape.textColor).toBe("blue");
  });
test('set text color to Triangle', () => {
    const shape = new Triangle("svg", "blue", "red")
    expect(shape.shapeColor).toBe("red");
  });


  test('set text to Square', () => {
    const shape = new Square("svg", "blue", "red")
    expect(shape.text).toBe("svg");
  });
test('set text color to Square', () => {
    const shape = new Square("svg", "blue", "red")
    expect(shape.textColor).toBe("blue");
  });
test('set text color to Square', () => {
    const shape = new Square("svg", "blue", "red")
    expect(shape.shapeColor).toBe("red");
  });



