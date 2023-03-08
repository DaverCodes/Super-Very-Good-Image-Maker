class Shapes {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    setColor(color){
        this.shapeColor = color

    }
    

}

class Circle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <circle cx="25" cy="75" r="20" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>
         <text>
         <tspan font-weight="bold" fill="${this.textColor}">${this.text}</tspan>
         </text>
         </svg>`
    }
    
}

class Triangle extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
         <polygon points="50,10 25,40 75,40" stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>
         <text>
         <tspan font-weight="bold" fill="${this.textColor}">${this.text}</tspan>
         </text>
         </svg>`
    }
    
}

class Square extends Shapes {
    constructor(text, textColor, shapeColor) {
        super(text, textColor, shapeColor)
    }
    render(){
        return `<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="50" width="50" height="50"  stroke="${shapeColor}" fill="${shapeColor}" stroke-width="5"/>
         <text>
         <tspan font-weight="bold" fill="${this.textColor}">${this.text}</tspan>
         </text>
         </svg>`
    }
    
}




module.exports = {Circle, Triangle, Square,  Shapes}

// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');