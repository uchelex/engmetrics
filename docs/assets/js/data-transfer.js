
function convertDTR() {
  const value = parseFloat(document.getElementById("dtrValue").value);
  const from = document.getElementById("dtrFrom").value;
  const to = document.getElementById("dtrTo").value;

  if (isNaN(value)) {
    document.getElementById("dtrResult").innerText = "Enter a valid number.";
    return;
  }

  // Convert input to bit/s
  let bps;
  switch (from) {
    case "bps": bps = value; break;
    case "kbps": bps = value * 1e3; break;
    case "Mbps": bps = value * 1e6; break;
    case "Bps": bps = value * 8; break;
    case "MBps": bps = value * 8e6; break;
    case "MBday": bps = value * 8e6 / 86400; break;
    case "GBday": bps = value * 8e9 / 86400; break;
  }

  // Convert from bit/s to target
  let result;
  switch (to) {
    case "bps": result = bps; break;
    case "kbps": result = bps / 1e3; break;
    case "Mbps": result = bps / 1e6; break;
    case "Bps": result = bps / 8; break;
    case "MBps": result = bps / 8e6; break;
    case "MBday": result = bps * 86400 / 8e6; break;
    case "GBday": result = bps * 86400 / 8e9; break;
  }

  document.getElementById("dtrResult").innerText = `Result: ${result.toFixed(4)} ${to}`;
}
