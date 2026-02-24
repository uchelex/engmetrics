function calculateQuartiles() {
  const data = document.getElementById("dataValues").value
    .split(",")
    .map(v => v.trim())
    .filter(v => v !== "")
    .map(Number)
    .sort((a, b) => a - b);

  const result = document.getElementById("result");

  if (data.length < 2) {
    result.innerHTML =
      "<p class='error'>Please enter at least two numeric values.</p>";
    return;
  }

  if (data.some(isNaN)) {
    result.innerHTML =
      "<p class='error'>Please enter numeric values only.</p>";
    return;
  }

  function median(arr) {
    const mid = Math.floor(arr.length / 2);
    return arr.length % 2 !== 0
      ? arr[mid]
      : (arr[mid - 1] + arr[mid]) / 2;
  }

  const n = data.length;
  const med = median(data);

  const lowerHalf = data.slice(0, Math.floor(n / 2));
  const upperHalf = data.slice(Math.ceil(n / 2));

  const q1 = median(lowerHalf);
  const q3 = median(upperHalf);
  const iqr = q3 - q1;

  result.innerHTML = `
    <p><strong>Sorted data:</strong> ${data.join(", ")}</p>
    <p><strong>Median (Q2):</strong> ${med}</p>
    <p><strong>First Quartile (Q1):</strong> ${q1}</p>
    <p><strong>Third Quartile (Q3):</strong> ${q3}</p>
    <p><strong>Interquartile Range (IQR):</strong> ${iqr}</p>
  `;
}

