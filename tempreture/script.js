document.getElementById("convertBtn").addEventListener("click", function() {
    const tempInput = document.getElementById("tempInput").value;
    const unit = document.querySelector('input[name="unit"]:checked').value;
    let convertedTemp;

    if (unit === "Celsius") {
        convertedTemp = (tempInput * 9/5) + 32; // Celsius to Fahrenheit
        document.getElementById("result").innerText = `${convertedTemp.toFixed(2)} °F`;
    } else {
        convertedTemp = (tempInput - 32) * 5/9; // Fahrenheit to Celsius
        document.getElementById("result").innerText = `${convertedTemp.toFixed(2)} °C`;
    }
});
