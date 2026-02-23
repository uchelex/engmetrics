function calculateZScores() {
  const data = document.getElementById("dataValues").value
    .split(",")
    .map(v => v.trim())
    .filter(v => v !== "")
    .map(Number);

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

  if (stdDev === 0) {
    result.innerHTML =
      "<p class='error'>Standard deviation is zero. Z-scores cannot be computed.</p>";
    return;
  }

  const min = Math.min(...data);
  const max = Math.max(...data);

  let table = `
    <table border="1" cellpadding="6" cellspacing="0">
      <tr>
        <th>Value</th>
        <th>Z-score</th>
        <th>Min–Max Normalized</th>
      </tr>
  `;

  data.forEach(x => {
    const z = (x - mean) / stdDev;
    const norm = (x - min) / (max - min);

    table += `
      <tr>
        <td>${x}</td>
        <td>${z.toFixed(4)}</td>
        <td>${norm.toFixed(4)}</td>
      </tr>
    `;
  });

  table += "</table>";

  result.innerHTML = `
    <p><strong>Mean:</strong> ${mean.toFixed(4)}</p>
    <p><strong>Standard deviation:</strong> ${stdDev.toFixed(4)}</p>
    ${table}
  `;
}

