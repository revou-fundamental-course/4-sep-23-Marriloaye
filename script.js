// JavaScript logic for calculating square area and perimeter
document.getElementById("squareCalculator").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the side length value from the input
    const sideLength = parseFloat(document.getElementById("sideLength").value);

    // Check if the input is a valid number
    if (!isNaN(sideLength)) {
        // Calculate area and perimeter
        const area = sideLength * sideLength;
        const perimeter = 4 * sideLength;

        // Display the results
        document.getElementById("areaResult").textContent = area;
        document.getElementById("perimeterResult").textContent = perimeter;
    } else {
        alert("Please enter a valid number for side length.");
    }
});
