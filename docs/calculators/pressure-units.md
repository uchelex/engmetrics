# Pressure Unit Converter

Convert between common petroleum and engineering pressure units.

---

## Input

<label>Value:</label>
<input type="number" id="pressureValue" step="any">

<br><br>

<label>From:</label>
<select id="fromPressure">
  <option value="psi">psi</option>
  <option value="psf">psf</option>
  <option value="pa">Pascal (Pa)</option>
  <option value="kpa">kilopascal (kPa)</option>
  <option value="mpa">megapascal (MPa)</option>
  <option value="bar">bar</option>
  <option value="atm">atmosphere (atm)</option>
</select>

<label>To:</label>
<select id="toPressure">
  <option value="psi">psi</option>
  <option value="psf">psf</option>
  <option value="pa">Pascal (Pa)</option>
  <option value="kpa">kilopascal (kPa)</option>
  <option value="mpa">megapascal (MPa)</option>
  <option value="bar">bar</option>
  <option value="atm">atmosphere (atm)</option>
</select>

<br><br>

<button type="button" onclick="convertPressure()">Convert</button>

---

## Result

<div id="pressureResult"></div>

<script src="/assets/js/pressure-units.js"></script>

