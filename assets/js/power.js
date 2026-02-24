function calculatePower() {
  const energyVal = parseFloat(document.getElementById("powerEnergy").value);
  const energyUnit = document.getElementById("powerEnergyUnit").value;
  const timeSec = parseFloat(document.getElementById("powerTime").value);
  const resultDiv = document.getElementById("powerResults");

  if ([energyVal, timeSec].some(v => isNaN(v) || v <= 0)) {
    resultDiv.innerHTML = "<p class='error'>Please enter valid positive numbers.</p>";
    return;
  }

  // Energy conversion factors to Joules
  const energyFactors = {
    J: 1,
    kJ: 1000,
    kWh: 3.6e6,
    BTU: 1055.056,
    ftlb: 1.35581795,
    Nm: 1
  };

  const energyJ = energyVal * energyFactors[energyUnit];

  // Power in Watts
  const P_W = energyJ / timeSec;

  // Build results in multiple units
  const P_hp = P_W / 745.7; // 1 hp = 745.7 W
  const P_BTUhr = P_W * 3.412141 / 1000; // W to kBTU/hr
  const P_ftlb_s = P_W / 1.35581795;

  resultDiv.innerHTML = `
    <h3>Power Results</h3>
    <ul>
      <li><strong>Watts (W):</strong> ${P_W.toFixed(4)}</li>
      <li><strong>Kilowatts (kW):</strong> ${(P_W / 1000).toFixed(4)}</li>
      <li><strong>Horsepower (hp):</strong> ${P_hp.toFixed(4)}</li>
      <li><strong>BTU/hr:</strong> ${P_BTUhr.toFixed(4)}</li>
      <li><strong>ft·lbf/s:</strong> ${P_ftlb_s.toFixed(4)}</li>
    </ul>
  `;
}

