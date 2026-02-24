function calculateGasDensity() {
  const P = parseFloat(document.getElementById("gdPressure").value);
  const T = parseFloat(document.getElementById("gdTemp").value);
  const Z = parseFloat(document.getElementById("gdZ").value);
  const M = parseFloat(document.getElementById("gdM").value);
  const R = 10.73; // psi·ft³/(lb-mol·°R)

  const resultDiv = document.getElementById("gdResult");

  if ([P, T, Z, M].some(v => isNaN(v) || v <= 0)) {
    resultDiv.innerHTML = "<p class='error'>Please enter valid positive numbers for all fields.</p>";
    return;
  }

  const density = (P * M) / (Z * R * T); // lb/ft³

  resultDiv.innerHTML = `
    <h3>Real Gas Density</h3>
    <p><strong>Density:</strong> ${density.toFixed(4)} lb/ft³</p>
  `;
}

