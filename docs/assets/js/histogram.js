function drawHistogram() {
  const data = document.getElementById("dataValues").value
    .split(",")
    .map(v => v.trim())
    .filter(v => v !== "")
    .map(Number);

  const bins = parseInt(document.getElementById("bins").value);
  const canvas = document.getElementById("histogramCanvas");
  const ctx = canvas.getContext("2d");
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

  const min = Math.min(...data);
  const max = Math.max(...data);
  const binWidth = (max - min) / bins;

  const counts = Array(bins).fill(0);

  data.forEach(value => {
    const index = Math.min(
      Math.floor((value - min) / binWidth),
      bins - 1
    );
    counts[index]++;
  });

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const barWidth = canvas.width / bins;
  const maxCount = Math.max(...counts);
  
  // Draw bars
counts.forEach((count, i) => {
  const barHeight = (count / maxCount) * (canvas.height - 40);

  ctx.fillStyle = "#1f77b4"; // blue bars

  ctx.fillRect(
    i * barWidth + 10,
    canvas.height - barHeight - 20,
    barWidth - 20,
    barHeight
  );
});


  result.innerHTML = `
    <p><strong>Min:</strong> ${min}</p>
    <p><strong>Max:</strong> ${max}</p>
    <p><strong>Bin width:</strong> ${binWidth.toFixed(4)}</p>
  `;
}

