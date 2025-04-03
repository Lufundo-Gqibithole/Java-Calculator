const buttonValues = [
    "AC", "+/-", "%", "÷", 
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];

const display = document.getElementById("display");

// Create buttons and handle clicks
buttonValues.forEach(value => {
    const button = document.createElement("button");
    button.innerText = value;

    // Add click event to handle button functionality
    button.addEventListener("click", () => {
        if (value === "AC") {
            display.value = ""; // Clear display
        } else if (value === "=") {
            try {
                // Evaluate the expression in the display
                display.value = eval(display.value.replace("×", "*").replace("÷", "/"));
            } catch {
                display.value = "Error"; // Handle invalid expressions
            }
        } else if (value === "+/-") {
            // Toggle positive/negative sign
            if (display.value.startsWith("-")) {
                display.value = display.value.slice(1);
            } else {
                display.value = "-" + display.value;
            }
        } else if (value === "%") {
            display.value = Number(display.value) / 100;
        } else {
            display.value += value;
        }
    });

    // Add button to calculator
    document.getElementById("buttons").appendChild(button);
});