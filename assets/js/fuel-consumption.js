function convertFuelConsumption() {
  const value = parseFloat(document.getElementById("fcValue").value);
  const from = document.getElementById("fcFrom").value;
  const to = document.getElementById("fcTo").value;
  const result = document.getElementById("fcResult");

  if (isNaN(value) || value <= 0) {
    result.innerHTML =
      "<p class='error'>Please enter a positive numeric value.</p>";
    return;
  }

  // Base unit: L/km
  const toLkm = {
    l100km: v => v / 100,
    lkm: v => v,
    galmi: v => v * 3.78541 / 1.60934,
    lph: v => v, // context-specific
    gph: v => v * 3.78541
  };

  const fromLkm = {
    l100km: v => v * 100,
    lkm: v => v,
    galmi: v => v / (3.78541 / 1.60934),
    lph: v => v,
    gph: v => v / 3.78541
  };

  const lkm = toLkm[from](value);
  const converted = fromLkm[to](lkm);

  result.innerHTML = `
    <p><strong>Result:</strong> ${converted.toFixed(4)} ${to}</p>
  `;
}

