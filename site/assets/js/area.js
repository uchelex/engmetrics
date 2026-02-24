function convertArea() {
  const val = parseFloat(document.getElementById("areaValue").value);
  const unit = document.getElementById("areaUnit").value;
  const resultDiv = document.getElementById("areaResults");

  if (isNaN(val)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Conversion factors relative to square meters
  const factors = {
    m2: 1,
    ft2: 0.092903,
    in2: 0.00064516,
    acre: 4046.86,
    ha: 10000
  };

  const m2Value = val * factors[unit];

  // Build results
  let output = "<ul>";
  for (let u in factors) {
    output += `<li><strong>${u}:</strong> ${(m2Value / factors[u]).toFixed(6)}</li>`;
  }
  output += "</ul>";

  resultDiv.innerHTML = output;
}

