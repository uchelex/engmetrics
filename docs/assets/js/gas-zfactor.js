function calculateZ() {
  const P = parseFloat(document.getElementById("zPressure").value);
  const T = parseFloat(document.getElementById("zTemp").value);
  const Ppc = parseFloat(document.getElementById("zPpc").value);
  const Tpc = parseFloat(document.getElementById("zTpc").value);
  const resultDiv = document.getElementById("zResult");

  if ([P, T, Ppc, Tpc].some(v => isNaN(v) || v <= 0)) {
    resultDiv.innerHTML = "<p class='error'>Please enter valid positive numbers for all fields.</p>";
    return;
  }

  // Pseudo-reduced properties
  const Pr = P / Ppc;
  const Tr = T / Tpc;

  // Approximate Z-factor correlation (simple engineering estimate)
  const Z = 1 - (3.52 * Pr) / Math.pow(10, Tr);

  resultDiv.innerHTML = `
    <h3>Gas Compressibility Factor</h3>
    <p><strong>Z-factor:</strong> ${Z.toFixed(4)}</p>
    <p><em>Used approximate Standing-Katz correlation for demonstration purposes.</em></p>
  `;
}

