const { Shape, Triangle, Circle, Square } = require('./shapes');

describe('Shape class', () => {
  test('setColor method sets the color property', () => {
    const shape = new Shape();
    shape.setColor('red');
    expect(shape.color).toBe('red');
  });
});

describe('Triangle class', () => {
  test('render method returns SVG for a triangle', () => {
    const triangle = new Triangle();
    triangle.setColor('blue');
    expect(triangle.render()).toBe('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
  });
});

describe('Circle class', () => {
  test('render method returns SVG for a circle', () => {
    const circle = new Circle();
    circle.setColor('green');
    expect(circle.render()).toBe('<circle cx="150" cy="100" r="80" fill="green" />');
  });
});

describe('Square class', () => {
  test('render method returns SVG for a square', () => {
    const square = new Square();
    square.setColor('yellow');
    expect(square.render()).toBe('<rect x="25" y="25" width="250" height="150" fill="yellow" />');
  });
});
