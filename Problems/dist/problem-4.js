"use strict";
{
    // Function
    function calculateShapeArea(shape) {
        if (shape.shape === "circle") {
            return (3.1416 * shape.radius * shape.radius);
        }
        else if (shape.shape === "rectangle") {
            return shape.width * shape.height;
        }
        else {
            return 0;
        }
    }
    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    console.log(circleArea);
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(rectangleArea);
}
