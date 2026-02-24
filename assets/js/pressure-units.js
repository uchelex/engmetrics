function convertPressure() {
  const value = parseFloat(document.getElementById("pressureValue").value);
  const from = document.getElementById("fromPressure").value;
  const to = document.getElementById("toPressure").value;
  const resultDiv = document.getElementById("pressureResult");

  if (isNaN(value)) {
    resultDiv.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Convert everything to Pascal (Pa)
  const toPascal = {
    pa: 1,
    kpa: 1e3,
    mpa: 1e6,
    bar: 1e5,
    atm: 101325,
    psi: 6894.757293,
    psf: 47.88025898
  };

  const pascal = value * toPascal[from];
  const converted = pascal / toPascal[to];

  resultDiv.innerHTML = `
    <p>
      <strong>${value} ${from}</strong> =
      <strong>${converted.toFixed(6)} ${to}</strong>
    </p>
  `;
}

