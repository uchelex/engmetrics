function convertTorque() {
  const val = parseFloat(document.getElementById("torqueValue").value);
  const unit = document.getElementById("torqueUnit").value;
  const resultDiv = document.getElementById("torqueResults");

  if (isNaN(val)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Conversion factors relative to Newton-meter (N·m)
  const factors = {
    Nm: 1,
    kNm: 1000,
    lbfft: 1.35581795,
    lbfin: 0.1129848,
    kgm: 9.80665
  };

  const NmValue = val * factors[unit];

  let output = "<ul>";
  for (let u in factors) {
    output += `<li><strong>${u}:</strong> ${(NmValue / factors[u]).toFixed(6)}</li>`;
  }
  output += "</ul>";

  resultDiv.innerHTML = output;
}

