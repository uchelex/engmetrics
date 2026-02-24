function convertTemperature() {
  const value = parseFloat(document.getElementById("tempValue").value);
  const unit = document.getElementById("tempUnit").value;
  const resultDiv = document.getElementById("tempResults");

  if (isNaN(value)) {
    resultDiv.innerHTML =
      "<p class='error'>Please enter a numeric temperature value.</p>";
    return;
  }

  let C, F, K, R;

  switch (unit) {
    case "C":
      C = value;
      F = (9 / 5) * C + 32;
      K = C + 273.15;
      R = F + 459.67;
      break;

    case "F":
      F = value;
      C = (5 / 9) * (F - 32);
      K = C + 273.15;
      R = F + 459.67;
      break;

    case "K":
      K = value;
      C = K - 273.15;
      F = (9 / 5) * C + 32;
      R = F + 459.67;
      break;

    case "R":
      R = value;
      F = R - 459.67;
      C = (5 / 9) * (F - 32);
      K = C + 273.15;
      break;
  }

  resultDiv.innerHTML = `
    <ul>
      <li><strong>Celsius:</strong> ${C.toFixed(4)} °C</li>
      <li><strong>Fahrenheit:</strong> ${F.toFixed(4)} °F</li>
      <li><strong>Kelvin:</strong> ${K.toFixed(4)} K</li>
      <li><strong>Rankine:</strong> ${R.toFixed(4)} °R</li>
    </ul>
  `;
}

