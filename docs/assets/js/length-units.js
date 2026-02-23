function convertLength() {
  const value = parseFloat(document.getElementById("lengthValue").value);
  const from = document.getElementById("fromUnit").value;
  const to = document.getElementById("toUnit").value;
  const resultDiv = document.getElementById("lengthResult");

  if (isNaN(value)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Convert everything to meters first
  const toMeters = {
    m: 1,
    km: 1000,
    ft: 0.3048,
    in: 0.0254,
    mi: 1609.344
  };

  const meters = value * toMeters[from];
  const converted = meters / toMeters[to];

  resultDiv.innerHTML = `
    <p>
      <strong>${value} ${from}</strong> =
      <strong>${converted.toFixed(6)} ${to}</strong>
    </p>
  `;
}

