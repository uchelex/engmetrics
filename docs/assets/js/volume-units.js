function convertVolume() {
  const value = parseFloat(document.getElementById("volumeValue").value);
  const from = document.getElementById("fromVolume").value;
  const to = document.getElementById("toVolume").value;
  const resultDiv = document.getElementById("volumeResult");

  if (isNaN(value)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Convert all volumes to cubic meters (m³)
  const toCubicMeter = {
    m3: 1,
    bbl: 0.158987294928,
    stb: 0.158987294928,
    l: 0.001,
    ft3: 0.028316846592,
    gal: 0.003785411784
  };

  const cubicMeters = value * toCubicMeter[from];
  const converted = cubicMeters / toCubicMeter[to];

  resultDiv.innerHTML = `
    <p>
      <strong>${value} ${from}</strong> =
      <strong>${converted.toFixed(6)} ${to}</strong>
    </p>
  `;
}

