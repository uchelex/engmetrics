function calculateCI() {
  const data = document.getElementById("dataValues").value
    .split(",")
    .map(v => v.trim())
    .filter(v => v !== "")
    .map(Number);

  const confidence = parseFloat(
    document.getElementById("confidence").value
  );

  const result = document.getElementById("result");

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
  const mean = data.reduce((a, b) => a + b, 0) / n;

  const variance =
    data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / (n - 1);

  const stdDev = Math.sqrt(variance);
  const stdError = stdDev / Math.sqrt(n);

  // t critical values (two-tailed)
  const tTable = {
    0.90: [0, 6.314, 2.920, 2.353, 2.132, 2.015],
    0.95: [0, 12.706, 4.303, 3.182, 2.776, 2.571],
    0.99: [0, 63.657, 9.925, 5.841, 4.604, 4.032]
  };

  const df = Math.min(n - 1, 5);
  const tCrit = tTable[confidence][df];

  const margin = tCrit * stdError;

  const lower = mean - margin;
  const upper = mean + margin;

  result.innerHTML = `
    <p><strong>Sample size (n):</strong> ${n}</p>
    <p><strong>Mean:</strong> ${mean.toFixed(4)}</p>
    <p><strong>Standard deviation:</strong> ${stdDev.toFixed(4)}</p>
    <p><strong>Confidence level:</strong> ${(confidence * 100).toFixed(0)}%</p>
    <p><strong>Confidence Interval:</strong><br>
      (${lower.toFixed(4)}, ${upper.toFixed(4)})
    </p>
  `;
}

