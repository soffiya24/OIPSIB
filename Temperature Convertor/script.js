// Function to convert temperatures between Celsius and Fahrenheit
function Temperature_convert(unit) {
    if (unit === 'celsius') {
        let celsius = document.getElementById('celsius-in').value;
       // Perform the conversion to Fahrenheit
        let fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit-in').value = fahrenheit.toFixed(2);
        document.getElementById('result').innerText = `${celsius} degrees Celsius is ${fahrenheit.toFixed(2)} degrees Fahrenheit.`;
    } else if (unit === 'fahrenheit') {
        let fahrenheit = document.getElementById('fahrenheit-in').value;
        // Perform the conversion to Celsius
        let celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius-in').value = celsius.toFixed(2);
        document.getElementById('result').innerText = `${fahrenheit} degrees Fahrenheit is ${celsius.toFixed(2)} degrees Celsius.`;
    }
}
