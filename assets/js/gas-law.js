function runGasLaw() {
  const R = 10.73; // psi·ft3 / lb-mol·R

  let P = parseFloat(document.getElementById("P").value);
  let V = parseFloat(document.getElementById("V").value);
  let n = parseFloat(document.getElementById("n").value);
  let T = parseFloat(document.getElementById("T").value);

  const values = [P, V, n, T];
  const emptyCount = values.filter(v => isNaN(v)).length;

  const result = document.getElementById("gasResult");

  if (emptyCount !== 1) {
    result.innerHTML =
      "<p class='error'>Please leave exactly ONE field empty.</p>";
    return;
  }

  if (isNaN(P)) {
    P = (n * R * T) / V;
    result.innerHTML = `<p><strong>Pressure (P):</strong> ${P.toFixed(4)} psi</p>`;
  } 
  else if (isNaN(V)) {
    V = (n * R * T) / P;
    result.innerHTML = `<p><strong>Volume (V):</strong> ${V.toFixed(4)} ft³</p>`;
  } 
  else if (isNaN(n)) {
    n = (P * V) / (R * T);
    result.innerHTML = `<p><strong>Amount (n):</strong> ${n.toFixed(4)} lb-mol</p>`;
  } 
  else if (isNaN(T)) {
    T = (P * V) / (n * R);
    result.innerHTML = `<p><strong>Temperature (T):</strong> ${T.toFixed(4)} °R</p>`;
  }
}

