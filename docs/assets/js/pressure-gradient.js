function calculateGradient() {
  const value = parseFloat(document.getElementById("densityValue").value);
  const unit = document.getElementById("densityUnit").value;
  const resultDiv = document.getElementById("gradientResult");

  if (isNaN(value) || value <= 0) {
    resultDiv.innerHTML =
      "<p class='error'>Please enter a valid positive density value.</p>";
    return;
  }

  // Convert density to ppg (base oilfield unit)
  let ppg;

  if (unit === "ppg") {
    ppg = value;
  } else if (unit === "kgm3") {
    ppg = value / 119.826;
  } else if (unit === "sg") {
    ppg = value * 8.345;
  }

  // Pressure gradients
  const psiPerFt = 0.052 * ppg;
  const kPaPerM = psiPerFt * 22.6206;
  const barPerM = kPaPerM / 100;

  resultDiv.innerHTML = `
    <h3>Pressure Gradient</h3>
    <p><strong>${psiPerFt.toFixed(4)}</strong> psi/ft</p>
    <p><strong>${kPaPerM.toFixed(4)}</strong> kPa/m</p>
    <p><strong>${barPerM.toFixed(4)}</strong> bar/m</p>

    <hr>

    <p><em>Oilfield relation used:</em></p>
    <p>Pressure gradient (psi/ft) = 0.052 × density (ppg)</p>
  `;
}

function calculateECD() {
  const mudWeight = parseFloat(document.getElementById("mudWeight").value);
  const annularLoss = parseFloat(document.getElementById("annularLoss").value);
  const tvd = parseFloat(document.getElementById("tvd").value);
  const resultDiv = document.getElementById("ecdResult");

  if (
    isNaN(mudWeight) || mudWeight <= 0 ||
    isNaN(annularLoss) || annularLoss < 0 ||
    isNaN(tvd) || tvd <= 0
  ) {
    resultDiv.innerHTML =
      "<p class='error'>Please enter valid positive values for all fields.</p>";
    return;
  }

  // ECD calculation
  const ecd = mudWeight + annularLoss / (0.052 * tvd);
  const gradient = 0.052 * ecd;

  resultDiv.innerHTML = `
    <h3>Equivalent Circulating Density</h3>
    <p><strong>ECD:</strong> ${ecd.toFixed(3)} ppg</p>
    <p><strong>Pressure Gradient:</strong> ${gradient.toFixed(4)} psi/ft</p>

    <hr>

    <p><em>Formula used:</em></p>
    <p>ECD = MW + ΔP / (0.052 × TVD)</p>
  `;
}

function calculateHydrostatic() {
  const mw = parseFloat(document.getElementById("hsMudWeight").value);
  const depth = parseFloat(document.getElementById("hsDepth").value);
  const resultDiv = document.getElementById("hydroResult");

  if (isNaN(mw) || mw <= 0 || isNaN(depth) || depth <= 0) {
    resultDiv.innerHTML =
      "<p class='error'>Please enter valid positive mud weight and depth.</p>";
    return;
  }

  const gradient = 0.052 * mw;
  const pressure = gradient * depth;

  resultDiv.innerHTML = `
    <h3>Hydrostatic Pressure</h3>
    <p><strong>Pressure:</strong> ${pressure.toFixed(2)} psi</p>
    <p><strong>Pressure Gradient:</strong> ${gradient.toFixed(4)} psi/ft</p>

    <hr>

    <p><em>Formula used:</em></p>
    <p>P = 0.052 × MW × TVD</p>
  `;
}

function plotPressureWindow() {
  const depthMax = parseFloat(document.getElementById("pwDepth").value);
  const ppGrad = parseFloat(document.getElementById("ppGrad").value);
  const fgGrad = parseFloat(document.getElementById("fgGrad").value);
  const mw = parseFloat(document.getElementById("pwMW").value);
  const ecdVal = parseFloat(document.getElementById("pwECD").value);

  const canvas = document.getElementById("pressureWindowCanvas");
  const ctx = canvas.getContext("2d");

  if (
    isNaN(depthMax) || depthMax <= 0 ||
    isNaN(ppGrad) || isNaN(fgGrad) ||
    isNaN(mw)
  ) {
    alert("Please enter valid depth, gradients, and mud weight.");
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const margin = 50;
  const plotWidth = canvas.width - 2 * margin;
  const plotHeight = canvas.height - 2 * margin;

  const gradients = [
    ppGrad,
    fgGrad,
    0.052 * mw,
    !isNaN(ecdVal) ? 0.052 * ecdVal : null
  ].filter(v => v !== null);

  const gMin = Math.min(...gradients) * 0.9;
  const gMax = Math.max(...gradients) * 1.1;

  function xMap(g) {
    return margin + ((g - gMin) / (gMax - gMin)) * plotWidth;
  }

  function yMap(d) {
    return margin + (d / depthMax) * plotHeight;
  }

  // Axes
  ctx.strokeStyle = "#000";
  ctx.beginPath();
  ctx.moveTo(margin, margin);
  ctx.lineTo(margin, canvas.height - margin);
  ctx.lineTo(canvas.width - margin, canvas.height - margin);
  ctx.stroke();

  // Labels
  ctx.fillText("Pressure Gradient (psi/ft)", canvas.width / 2 - 70, canvas.height - 10);
  ctx.save();
  ctx.translate(15, canvas.height / 2 + 50);
  ctx.rotate(-Math.PI / 2);
  ctx.fillText("Depth (ft)", 0, 0);
  ctx.restore();

  function drawLine(grad, color, label) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.moveTo(xMap(grad), yMap(0));
    ctx.lineTo(xMap(grad), yMap(depthMax));
    ctx.stroke();

    ctx.fillStyle = color;
    ctx.fillText(label, xMap(grad) + 5, margin + 10);
  }

  drawLine(ppGrad, "#1f77b4", "Pore Pressure");
  drawLine(fgGrad, "#d62728", "Fracture Gradient");
  drawLine(0.052 * mw, "#2ca02c", "Mud Weight");

  if (!isNaN(ecdVal)) {
    drawLine(0.052 * ecdVal, "#ff7f0e", "ECD");
  }
}

