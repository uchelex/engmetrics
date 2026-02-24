
function calculateStats() {
  const data = document.getElementById("dataValues").value
    .split(",")
    .map(v => v.trim())
    .filter(v => v !== "")
    .map(Number);

  const result = document.getElementById("result");

  // Validation
  if (data.length < 2) {
    result.innerHTML =
      "<p class='error'>Please enter at least two numeric values.</p>";
    return;
  }

  if (data.some(isNaN)) {
    result.innerHTML =
      "<p class='error'>Please enter numeric values only.</p>";
    return;
  }

  const n = data.length;

  // Mean
  const mean = data.reduce((a, b) => a + b, 0) / n;

  // Variance (sample variance)
  const variance =
    data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (n - 1);

  // Standard deviation
  const stdDev = Math.sqrt(variance);

  result.innerHTML = `
    <p><strong>Number of values (n):</strong> ${n}</p>
    <p><strong>Mean:</strong> ${mean.toFixed(4)}</p>
    <p><strong>Variance:</strong> ${variance.toFixed(4)}</p>
    <p><strong>Standard Deviation:</strong> ${stdDev.toFixed(4)}</p>
  `;
}

