function convertForce() {
  const val = parseFloat(document.getElementById("forceValue").value);
  const unit = document.getElementById("forceUnit").value;
  const resultDiv = document.getElementById("forceResults");

  if (isNaN(val)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Conversion factors relative to Newton (N)
  const factors = {
    N: 1,
    kN: 1000,
    lbf: 4.44822,
    kgf: 9.80665,
    dyne: 1e-5
  };

  const NValue = val * factors[unit];

  let output = "<ul>";
  for (let u in factors) {
    output += `<li><strong>${u}:</strong> ${(NValue / factors[u]).toFixed(6)}</li>`;
  }
  output += "</ul>";

  resultDiv.innerHTML = output;
}

