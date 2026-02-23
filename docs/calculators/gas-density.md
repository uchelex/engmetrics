# Real Gas Density Calculator

Calculate the **real gas density** using the gas law corrected with Z-factor.

---

### Input Instructions
- Enter **pressure**, **temperature**, **Z-factor**, and **molar mass** of the gas.
- Density will be calculated in **lb/ft³**.

<label>Pressure, P (psi):</label>
<input id="gdPressure" type="number" step="any">

<label>Temperature, T (°R):</label>
<input id="gdTemp" type="number" step="any">

<label>Gas compressibility factor, Z:</label>
<input id="gdZ" type="number" step="any">

<label>Molar mass, M (lb/lb-mol):</label>
<input id="gdM" type="number" step="any">

<button onclick="calculateGasDensity()">Calculate Density</button>

<div id="gdResult"></div>

<script src="../assets/js/gas-density.js"></script>

