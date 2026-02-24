function convertAngle() {
  const value = parseFloat(document.getElementById("angleValue").value);
  const from = document.getElementById("angleFrom").value;
  const to = document.getElementById("angleTo").value;
  const result = document.getElementById("angleResult");

  if (isNaN(value)) {
    result.innerHTML =
      "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // Convert everything to radians first
  const toRad = {
    deg: Math.PI / 180,
    rad: 1,
    gon: Math.PI / 200,
    rev: 2 * Math.PI
  };

  const radians = value * toRad[from];
  const converted = radians / toRad[to];

  result.innerHTML = `
    <p><strong>Result:</strong> ${converted.toFixed(6)} ${to}</p>
  `;
}

