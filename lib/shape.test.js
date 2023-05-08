const Shape = require('./shape');

describe('Shape', () => {
  describe('constructor', () => {
    it('should create a new Shape object with the given dimensions', () => {
      const shape = new Shape(5, 10);
      expect(shape.width).toEqual(5);
      expect(shape.height).toEqual(10);
    });
  });

  describe('area', () => {
    it('should return the area of the shape', () => {
      const shape = new Shape(5, 10);
      expect(shape.area()).toEqual(50);
    });
  });

  describe('scale', () => {
    it('should scale the width and height of the shape by the given factor', () => {
      const shape = new Shape(5, 10);
      shape.scale(2);
      expect(shape.width).toEqual(10);
      expect(shape.height).toEqual(20);
    });
  });

  describe('toString', () => {
    it('should return a string representation of the shape', () => {
      const shape = new Shape(5, 10);
      expect(shape.toString()).toEqual('Shape { width: 5, height: 10 }');
    });
  });
});
