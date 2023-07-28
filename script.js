function convertToCelsius() {
    const inputCelsius = parseFloat(document.getElementById('inputCelsius').value);
  
    if (isNaN(inputCelsius)) {
      alert('Please enter a valid number');
      return;
    }
  
    const result = (inputCelsius * 9 / 5) + 32;
    document.getElementById('result').textContent = `${inputCelsius}°C is equal to ${result.toFixed(2)}°F`;
  }
  
  function convertToFahrenheit() {
    const inputFahrenheit = parseFloat(document.getElementById('inputCelsius').value);
  
    if (isNaN(inputFahrenheit)) {
      alert('Please enter a valid number');
      return;
    }
  
    const result = (inputFahrenheit - 32) * 5 / 9;
    document.getElementById('result').textContent = `${inputFahrenheit}°F is equal to ${result.toFixed(2)}°C`;
  }
  