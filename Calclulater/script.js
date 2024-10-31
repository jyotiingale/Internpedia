const display = document.getElementById("display");
const buttons = document.querySelectorAll(".button");

let currentInput = "";
let operator = "";
let firstValue = null;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            // Clear the display
            currentInput = "";
            operator = "";
            firstValue = null;
            display.value = "";
        } else if (value === "=") {
            // Calculate the result
            if (firstValue !== null && operator) {
                const secondValue = parseFloat(currentInput);
                const result = calculate(firstValue, secondValue, operator);
                display.value = result;
                currentInput = result.toString();
                operator = "";
                firstValue = null;
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            // Set the operator and store the first value
            if (currentInput) {
                firstValue = parseFloat(currentInput);
                operator = value;
                currentInput = "";
            }
        } else {
            // Append the clicked number to the display
            currentInput += value;
            display.value = currentInput;
        }
    });
});

function calculate(firstValue, secondValue, operator) {
    switch (operator) {
        case "+":
            return firstValue + secondValue;
        case "-":
            return firstValue - secondValue;
        case "*":
            return firstValue * secondValue;
        case "/":
            return firstValue / secondValue;
        default: 
            return secondValue;
    }
}
