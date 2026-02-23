# Gas Law Calculator (Ideal Gas Law)

This calculator applies the **Ideal Gas Law**:

\[
PV = nRT
\]

Enter **any three** variables to calculate the fourth.

### Units
- Pressure (P): psi
- Volume (V): ft³
- Temperature (T): °R
- Amount (n): lb-mol
- Gas constant (R): 10.73 (psi·ft³ / lb-mol·°R)

### Input Instructions
- Leave **one field empty** (this will be calculated)
- Temperature must be in **Rankine (°R)**  
  (°R = °F + 460)

---

<div class="calculator-box">

<label>Pressure, P (psi)</label>
<input id="P" type="number" step="any">

<label>Volume, V (ft³)</label>
<input id="V" type="number" step="any">

<label>Amount, n (lb-mol)</label>
<input id="n" type="number" step="any">

<label>Temperature, T (°R)</label>
<input id="T" type="number" step="any">

<button onclick="runGasLaw()">Calculate</button>

<div id="gasResult"></div>

</div>

<script src="../assets/js/gas-law.js"></script>

