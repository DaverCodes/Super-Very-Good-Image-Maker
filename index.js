const questions = () => {
    return inquirer.prompt([  
        {
            type: "input",
            name: "text",
            message: "enter up to three characters"
        },
        {
            type: "input",
            name: "textColor",
            message: "enter a color keyword (OR a hexadecimal number) for text"
        },
        {
            type: "list",
            name: "shape",
            message: "choose from: circle, triangle, or square",
            choices: ["Circle", "Triangle", "Square"]
            },
        {
            type: "input",
            name: "shapeColor",
            message: "enter a color keyword (OR a hexadecimal number) for shape"
        }
])};