function convertWork() {
  const val = parseFloat(document.getElementById("workValue").value);
  const unit = document.getElementById("workUnit").value;
  const resultDiv = document.getElementById("workResults");

  if (isNaN(val)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Conversion factors relative to Joule
  const factors = {
    J: 1,
    kJ: 1000,
    kWh: 3.6e6,
    BTU: 1055.056,
    ftlb: 1.35581795,
    Nm: 1
  };

  const JValue = val * factors[unit];

  let output = "<ul>";
  for (let u in factors) {
    output += `<li><strong>${u}:</strong> ${(JValue / factors[u]).toFixed(6)}</li>`;
  }
  output += "</ul>";

  resultDiv.innerHTML = output;
}

