# Gas Z-Factor Calculator (Real Gas)

Compute the **compressibility factor (Z)** for natural gas using pseudo-reduced properties.

---

### Input Instructions
- Enter **pressure (psi)** and **temperature (°R)**  
- Enter **critical pressure (Ppc, psi)** and **critical temperature (Tpc, °R)**  
- Z-factor will be calculated automatically.

---

<label>Pressure, P (psi):</label>
<input id="zPressure" type="number" step="any">

<label>Temperature, T (°R):</label>
<input id="zTemp" type="number" step="any">

<label>Critical Pressure, Ppc (psi):</label>
<input id="zPpc" type="number" step="any">

<label>Critical Temperature, Tpc (°R):</label>
<input id="zTpc" type="number" step="any">

<button type="button" onclick="calculateZ()">Calculate Z-Factor</button>

<div id="zResult"></div>

<script src="../assets/js/gas-zfactor.js"></script>

