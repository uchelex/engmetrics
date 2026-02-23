function convertSpeed() {
  const val = parseFloat(document.getElementById("speedValue").value);
  const unit = document.getElementById("speedUnit").value;
  const resultDiv = document.getElementById("speedResults");

  if (isNaN(val)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Conversion factors to m/s
  const factors = {
    ms: 1,
    kmh: 0.277777778,
    fts: 0.3048,
    ftmin: 0.00508,
    mph: 0.44704,
    knot: 0.514444,
    ins: 0.0254
  };

  const msValue = val * factors[unit];

  let output = "<h4>Converted Speed Values</h4><ul>";
  output += `<li><strong>m/s (SI):</strong> ${msValue.toFixed(4)}</li>`;
  output += `<li><strong>km/h (SI):</strong> ${(msValue / factors.kmh).toFixed(4)}</li>`;
  output += `<li><strong>ft/s (Engineering):</strong> ${(msValue / factors.fts).toFixed(4)}</li>`;
  output += `<li><strong>ft/min (Engineering):</strong> ${(msValue / factors.ftmin).toFixed(4)}</li>`;
  output += `<li><strong>mph (Field):</strong> ${(msValue / factors.mph).toFixed(4)}</li>`;
  output += `<li><strong>knot (Field):</strong> ${(msValue / factors.knot).toFixed(4)}</li>`;
  output += `<li><strong>in/s (Equipment):</strong> ${(msValue / factors.ins).toFixed(4)}</li>`;
  output += "</ul>";

  resultDiv.innerHTML = output;
}

