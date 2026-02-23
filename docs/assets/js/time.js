function convertTime() {
  const value = parseFloat(document.getElementById("timeValue").value);
  const from = document.getElementById("timeFrom").value;
  const to = document.getElementById("timeTo").value;
  const result = document.getElementById("timeResult");

  if (isNaN(value)) {
    result.innerHTML = "<p class='error'>Please enter a numeric value.</p>";
    return;
  }

  // conversion to seconds
  const factors = {
    s: 1,
    min: 60,
    hr: 3600,
    day: 86400,
    wk: 604800,
    yr: 31536000
  };

  const seconds = value * factors[from];
  const converted = seconds / factors[to];

  result.innerHTML = `
    <p><strong>Result:</strong> ${converted.toFixed(6)} ${to}</p>
  `;
}

