# Pressure Gradient Calculator

Calculate pressure gradient from fluid density.
# Pressure Gradient Calculator

Enter the **fluid density value** and select its **unit** (ppg, kg/m³, or specific gravity), then click **Calculate Gradient** to obtain the pressure gradient.

---

## Fluid Density Input

<label>Density value:</label>
<input type="number" id="densityValue" step="any">

<br><br>

<label>Density unit:</label>
<select id="densityUnit">
  <option value="ppg">ppg</option>
  <option value="kgm3">kg/m³</option>
  <option value="sg">Specific Gravity (SG)</option>
</select>

<br><br>

<button type="button" onclick="calculateGradient()">Calculate Gradient</button>

---

## Results

<div id="gradientResult"></div>

<script src="/assets/js/pressure-gradient.js"></script>

---

## Equivalent Circulating Density (ECD)

Enter drilling parameters to calculate Equivalent Circulating Density.

<label>Mud weight (ppg):</label>
<input type="number" id="mudWeight" step="any">

<br><br>

<label>Annular pressure loss (psi):</label>
<input type="number" id="annularLoss" step="any">

<br><br>

<label>True Vertical Depth, TVD (ft):</label>
<input type="number" id="tvd" step="any">

<br><br>

<button type="button" onclick="calculateECD()">Calculate ECD</button>

---

## ECD Result

<div id="ecdResult"></div>

---

## Hydrostatic Pressure vs Depth

Calculate hydrostatic pressure for a given mud weight and depth.

<label>Mud weight (ppg):</label>
<input type="number" id="hsMudWeight" step="any">

<br><br>

<label>True Vertical Depth, TVD (ft):</label>
<input type="number" id="hsDepth" step="any">

<br><br>

<button type="button" onclick="calculateHydrostatic()">Calculate Hydrostatic Pressure</button>

---

## Hydrostatic Result

<div id="hydroResult"></div>

---

## Pressure Window Plot

Plot pore pressure, fracture gradient, mud weight, and ECD versus depth.

<label>Maximum TVD (ft):</label>
<input type="number" id="pwDepth" step="any">

<br><br>

<label>Pore pressure gradient (psi/ft):</label>
<input type="number" id="ppGrad" step="any">

<br><br>

<label>Fracture gradient (psi/ft):</label>
<input type="number" id="fgGrad" step="any">

<br><br>

<label>Mud weight (ppg):</label>
<input type="number" id="pwMW" step="any">

<br><br>

<label>ECD (ppg, optional):</label>
<input type="number" id="pwECD" step="any">

<br><br>

<button type="button" onclick="plotPressureWindow()">Plot Pressure Window</button>

<br><br>

<canvas id="pressureWindowCanvas" width="600" height="450" style="border:1px solid #ccc;"></canvas>



