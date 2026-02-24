function convertFuelEfficiency() {
  const value = parseFloat(document.getElementById("feValue").value);
  const from = document.getElementById("feFrom").value;
  const to = document.getElementById("feTo").value;
  const result = document.getElementById("feResult");

  if (isNaN(value) || value <= 0) {
    result.innerHTML =
      "<p class='error'>Please enter a positive numeric value.</p>";
    return;
  }

  // Base unit: km/L
  const toKmL = {
    kml: v => v,
    ml: v => v / 1000,
    mil: v => v * 1.60934,
    mpg_us: v => v * 0.425144,
    mpg_uk: v => v * 0.354006
  };

  const fromKmL = {
    kml: v => v,
    ml: v => v * 1000,
    mil: v => v / 1.60934,
    mpg_us: v => v / 0.425144,
    mpg_uk: v => v / 0.354006
  };

  const kmL = toKmL[from](value);
  const converted = fromKmL[to](kmL);

  result.innerHTML = `
    <p><strong>Result:</strong> ${converted.toFixed(4)} ${to}</p>
  `;
}

