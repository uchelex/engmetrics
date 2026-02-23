# Data Transfer Rate Calculator

This calculator converts data transfer rates between **SI**, **engineering**, and **field/industry** units commonly encountered in petroleum engineering, data acquisition, and instrumentation.

---

## 📥 How to Use

1. Enter a numeric value.
2. Select the **input unit**.
3. Select the **output unit**.
4. Click **Convert** to see the result.

---

## 🔢 Supported Units

### SI Units

* bit/s (bps)
* kbit/s (kbps)
* Mbit/s (Mbps)
* Gbit/s (Gbps)

### Engineering / Computing Units

* Byte/s (B/s)
* kB/s
* MB/s
* GB/s

### Field / Practical Units

* kbps (telemetry)
* Mbps (SCADA / WAN)
* MB/day (logging data volume)
* GB/day

---

## 📄 data-transfer.md

```md
## Data Transfer Rate Calculator

Enter a value and select units to convert between bits, bytes, and daily data volumes used in field operations.

<input id="dtrValue" type="number" placeholder="Enter value" />

<select id="dtrFrom">
  <option value="bps">bit/s</option>
  <option value="kbps">kbit/s</option>
  <option value="Mbps">Mbit/s</option>
  <option value="Bps">Byte/s</option>
  <option value="MBps">MB/s</option>
  <option value="MBday">MB/day</option>
  <option value="GBday">GB/day</option>
</select>

<select id="dtrTo">
  <option value="bps">bit/s</option>
  <option value="kbps">kbit/s</option>
  <option value="Mbps">Mbit/s</option>
  <option value="Bps">Byte/s</option>
  <option value="MBps">MB/s</option>
  <option value="MBday">MB/day</option>
  <option value="GBday">GB/day</option>
</select>

<button onclick="convertDTR()">Convert</button>

<p id="dtrResult"></p>
```

---

## ⚙️ data-transfer.js

```javascript
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
```

---

## 🧭 mkdocs.yml Update

```yaml
nav:
  - Calculators:
      - Data Transfer Rate: data-transfer.md
```

---

## 🛢️ Engineering Context

This calculator is useful for:

* Telemetry bandwidth estimation
* SCADA data sizing
* Logging tool data volume forecasting
* Field network design

Next natural additions:

* **Latency calculator**
* **Daily storage requirement estimator**
* **Real-time vs batch transmission comparison**

