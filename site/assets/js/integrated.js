// ----------------- Units -----------------
function updateUnits() {
  const type = document.getElementById("dataType").value;
  const label = document.getElementById("dataLabel");
  const unit = document.getElementById("unitLabel");

  if (type === "pressure") {
    label.innerText = "Pressure";
    unit.innerText = "psi";
  } else if (type === "density") {
    label.innerText = "Mud Weight";
    unit.innerText = "ppg";
  } else {
    label.innerText = "Production Rate";
    unit.innerText = "STB/d";
  }
}

// ----------------- Statistics -----------------
function runIntegratedStats() {
  const data = document.getElementById("dataValues")
    .value.split(",")
    .map(v => Number(v.trim()))
    .filter(v => !isNaN(v));

  if (data.length < 2) {
    alert("Enter at least two numeric values.");
    return;
  }

  data.sort((a, b) => a - b);
  const n = data.length;
  const mean = data.reduce((a, b) => a + b, 0) / n;
  const variance = data.reduce((s, v) => s + (v - mean) ** 2, 0) / (n - 1);
  const stdDev = Math.sqrt(variance);

  const median = n % 2 ? data[(n - 1) / 2] : (data[n / 2 - 1] + data[n / 2]) / 2;
  const q1 = data[Math.floor(n / 4)];
  const q3 = data[Math.floor(3 * n / 4)];
  const iqr = q3 - q1;

  const margin = 1.96 * stdDev / Math.sqrt(n);

  window.lastStats = {
    n,
    mean: mean.toFixed(4),
    variance: variance.toFixed(4),
    stdDev: stdDev.toFixed(4),
    median,
    q1,
    q3,
    iqr,
    ciLower: (mean - margin).toFixed(4),
    ciUpper: (mean + margin).toFixed(4)
  };

  document.getElementById("statsResult").innerHTML = `
    <p><strong>n:</strong> ${n}</p>
    <p><strong>Mean:</strong> ${mean.toFixed(4)}</p>
    <p><strong>Std Dev:</strong> ${stdDev.toFixed(4)}</p>
    <p><strong>Median:</strong> ${median}</p>
    <p><strong>Q1 / Q3:</strong> ${q1} / ${q3}</p>
    <p><strong>95% CI:</strong> [${lastStats.ciLower}, ${lastStats.ciUpper}]</p>
  `;

  drawHistogram(data);
}

// ----------------- Histogram -----------------
function drawHistogram(data) {
  const canvas = document.getElementById("histogramCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const bins = 6;
  const min = Math.min(...data);
  const max = Math.max(...data);
  const width = (max - min) / bins;
  const counts = new Array(bins).fill(0);

  data.forEach(v => {
    const i = Math.min(Math.floor((v - min) / width), bins - 1);
    counts[i]++;
  });

  const barW = canvas.width / bins;

  counts.forEach((c, i) => {
    const h = (c / Math.max(...counts)) * (canvas.height - 40);
    ctx.fillStyle = "#1f77b4";
    ctx.fillRect(i * barW + 20, canvas.height - h - 20, barW - 10, h);
  });
}

// ----------------- Regression -----------------
function runRegression() {
  const data = document.getElementById("dataValues")
    .value.split(",")
    .map(v => Number(v.trim()))
    .filter(v => !isNaN(v));

  const x = data.map((_, i) => i + 1);
  const y = data;

  const n = x.length;
  const sx = x.reduce((a, b) => a + b, 0);
  const sy = y.reduce((a, b) => a + b, 0);
  const sxy = x.reduce((s, v, i) => s + v * y[i], 0);
  const sx2 = x.reduce((s, v) => s + v * v, 0);

  const m = (n * sxy - sx * sy) / (n * sx2 - sx * sx);
  const c = (sy - m * sx) / n;

  alert(`Regression line:\ny = ${m.toFixed(4)}x + ${c.toFixed(4)}`);
}

// ----------------- Decline Curve -----------------
function overlayDeclineCurveButton() {
  if (document.getElementById("unitLabel").innerText !== "STB/d") {
    alert("Decline curve applies to production data only.");
    return;
  }

  const data = document.getElementById("dataValues")
    .value.split(",")
    .map(v => Number(v.trim()));

  const canvas = document.getElementById("histogramCanvas");
  const ctx = canvas.getContext("2d");

  const qi = data[0];
  const qn = data[data.length - 1];
  const n = data.length - 1;
  const b = 0.5;
  const model = document.getElementById("declineModel").value;

  ctx.beginPath();
  ctx.strokeStyle = "#d62728";
  ctx.lineWidth = 2;

  const D = model === "exp"
    ? Math.log(qi / qn) / n
    : (Math.pow(qi / qn, b) - 1) / (b * n);

  for (let t = 0; t <= n; t++) {
    const q = model === "exp"
      ? qi * Math.exp(-D * t)
      : qi / Math.pow(1 + b * D * t, 1 / b);

    const x = (t / n) * (canvas.width - 40) + 20;
    const y = canvas.height - (q / qi) * (canvas.height - 40) - 20;

    t === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }

  ctx.stroke();
}

// ----------------- CSV Export -----------------
function exportCSV() {
  if (!window.lastStats) return alert("Run analysis first.");

  const rows = Object.entries(lastStats)
    .map(([k, v]) => `${k},${v}`)
    .join("\n");

  const blob = new Blob([rows], { type: "text/csv" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "engineering_results.csv";
  a.click();
}

// ----------------- PDF Report -----------------
function generateReport() {
  if (!window.lastStats) return alert("Run analysis first.");

  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text("Engineering Statistical Report", 20, 20);

  let y = 35;
  for (const [k, v] of Object.entries(lastStats)) {
    doc.text(`${k}: ${v}`, 20, y);
    y += 7;
  }

  doc.save("engineering_report.pdf");
}

