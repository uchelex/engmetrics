let chart = null;

function calculateRegression() {
  const x = document
  .getElementById("xValues")
  .value.split(",")
  .map(v => v.trim())
  .filter(v => v !== "")
  .map(Number);

const y = document
  .getElementById("yValues")
  .value.split(",")
  .map(v => v.trim())
  .filter(v => v !== "")
  .map(Number);

  if (x.length !== y.length || x.length < 2) {
    document.getElementById("result").innerHTML =
      "<p class='error'>Please enter equal numbers of x and y values.</p>";
    return;
  }

if (x.some(isNaN) || y.some(isNaN)) {
  document.getElementById("result").innerHTML =
    "<p class='error'>Please enter numeric values only.</p>";
  return;
}

  const n = x.length;
  let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;

  for (let i = 0; i < n; i++) {
    sumX += x[i];
    sumY += y[i];
    sumXY += x[i] * y[i];
    sumX2 += x[i] * x[i];
    sumY2 += y[i] * y[i];
  }

  const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
  const c = (sumY / n) - m * (sumX / n);

  const rNumerator = n * sumXY - sumX * sumY;
  const rDenominator = Math.sqrt(
    (n * sumX2 - sumX * sumX) * (n * sumY2 - sumY * sumY)
  );
  const r = rNumerator / rDenominator;
  const r2 = r * r;

  let strength = "";
  const absR = Math.abs(r);

  if (absR < 0.2) strength = "very weak";
  else if (absR < 0.4) strength = "weak";
  else if (absR < 0.6) strength = "moderate";
  else if (absR < 0.8) strength = "strong";
  else strength = "very strong";

  const direction = r > 0 ? "positive" : "negative";
  const explained = (r2 * 100).toFixed(1);

  document.getElementById("result").innerHTML = `
    <h3>Results</h3>
    <p><b>Slope (m):</b> ${m.toFixed(4)}</p>
    <p><b>Intercept (c):</b> ${c.toFixed(4)}</p>
    <p><b>Regression Equation:</b> y = ${m.toFixed(4)}x + ${c.toFixed(4)}</p>
    <p><b>Correlation coefficient (r):</b> ${r.toFixed(4)}</p>
    <p><b>Coefficient of determination (R²):</b> ${r2.toFixed(4)}</p>
    <hr>
    <p><b>Interpretation:</b></p>
    <p>
      There is a <b>${strength} ${direction}</b> linear relationship between
      <b>x</b> and <b>y</b>.
      Approximately <b>${explained}%</b> of the variation in <b>y</b>
      is explained by <b>x</b>.
    </p>
  `;

  plotRegression(x, y, m, c);
}

function plotRegression(x, y, m, c) {
  const ctx = document.getElementById("regressionChart").getContext("2d");

  const scatterData = x.map((xi, i) => ({ x: xi, y: y[i] }));
  const lineData = [
    { x: Math.min(...x), y: m * Math.min(...x) + c },
    { x: Math.max(...x), y: m * Math.max(...x) + c }
  ];

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: "scatter",
    data: {
      datasets: [
        {
          label: "Data Points",
          data: scatterData
        },
        {
          label: "Regression Line",
          type: "line",
          data: lineData,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        x: { title: { display: true, text: "X" } },
        y: { title: { display: true, text: "Y" } }
      }
    }
  });
}

