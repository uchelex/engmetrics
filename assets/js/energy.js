function convertEnergy() {
  const val = parseFloat(document.getElementById("energyValue").value);
  const unit = document.getElementById("energyUnit").value;
  const resultDiv = document.getElementById("energyResults");

  if (isNaN(val)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Conversion factors relative to Joule
  const factors = {
    J: 1,
    cal: 4.184,
    kWh: 3.6e6,
    BTU: 1055.056,
    MMBTU: 1.055e9,
    ftlb: 1.35581795
  };

  // Convert input to Joules
  const joules = val * factors[unit];

  // Build results table
  let output = "<ul>";
  for (let u in factors) {
    output += `<li><strong>${u}:</strong> ${(joules / factors[u]).toFixed(4)}</li>`;
  }
  output += "</ul>";

  resultDiv.innerHTML = output;
}

