// Shape class
class Shape {
    constructor() {
      this.color = "";
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  // Triangle class
  class Triangle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  // Circle class
  class Circle extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // Square class
  class Square extends Shape {
    constructor() {
      super();
    }
  
    render() {
      return `<rect x="25" y="25" width="250" height="150" fill="${this.color}" />`;
    }
  }
  
  module.exports = {
    Shape,
    Triangle,
    Circle,
    Square,
  };
  