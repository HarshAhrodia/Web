// Function to solve quadratic equation: ax^2 + bx + c = 0
function solveQuadratic(a, b, c) {
    const discriminant = b * b - 4 * a * c;
    
    if (discriminant > 0) {
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        const root = -b / (2 * a);
        return [root];
    } else {
        const realPart = (-b / (2 * a)).toFixed(2);
        const imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
        return [`${realPart} + ${imagPart}i`, `${realPart} - ${imagPart}i`];
    }
}

console.log("Roots of x^2 - 5x + 6 = 0:", solveQuadratic(1, -5, 6));
console.log("Roots of x^2 - 4x + 4 = 0:", solveQuadratic(1, -4, 4));
console.log("Roots of x^2 + 4 = 0:", solveQuadratic(1, 0, 4));

// Commit 1
console.log("Test 1");
