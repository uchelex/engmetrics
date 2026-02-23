---
title: Temperature Converter
layout: calculator
---

## 🌡️ Temperature Converter

Convert temperatures between commonly used engineering units in petroleum, gas, and energy calculations.

### Supported Units
- Celsius (°C)
- Fahrenheit (°F)
- Kelvin (K)
- Rankine (°R)

### How to use
Enter a temperature value, select its unit, and click **Convert**.  
All equivalent temperature values will be displayed automatically.

---

### Temperature Input
<input type="number" id="tempValue" placeholder="Enter temperature" />

<select id="tempUnit">
  <option value="C">Celsius (°C)</option>
  <option value="F">Fahrenheit (°F)</option>
  <option value="K">Kelvin (K)</option>
  <option value="R">Rankine (°R)</option>
</select>

<button onclick="convertTemperature()">Convert</button>

---

### Results
<div id="tempResults"></div>

---

### Engineering Note
> Kelvin and Rankine are **absolute temperature scales** and are required for thermodynamic and gas-law calculations.

