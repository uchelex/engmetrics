function calculateForce() {
  const m = parseFloat(document.getElementById("massValue").value);
  const a = parseFloat(document.getElementById("accelValue").value);
  const mUnit = document.getElementById("massUnit").value;
  const aUnit = document.getElementById("accelUnit").value;
  const result = document.getElementById("forceResult");

  if ([m, a].some(v => isNaN(v))) {
    result.innerHTML = "<p class='error'>Please enter valid numeric values.</p>";
    return;
  }

  // Convert mass to kg
  let massKg = m;
  if (mUnit === "lbm") massKg = m * 0.453592;

  // Convert acceleration to m/s²
  let accel = a;
  if (aUnit === "fts2") accel = a * 0.3048;

  const forceN = massKg * accel;
  const forceLbf = forceN / 4.44822;

  result.innerHTML = `
    <h3>Force Result</h3>
    <p><strong>Force:</strong></p>
    <ul>
      <li>${forceN.toFixed(4)} N</li>
      <li>${forceLbf.toFixed(4)} lbf</li>
    </ul>
  `;
}

