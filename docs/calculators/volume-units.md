# Volume Unit Converter

Convert between common engineering and petroleum volume units.

---

## Input

<label>Value:</label>
<input type="number" id="volumeValue" step="any">

<br><br>

<label>From:</label>
<select id="fromVolume">
  <option value="m3">Cubic meter (m³)</option>
  <option value="bbl">Barrel (bbl)</option>
  <option value="stb">Stock Tank Barrel (STB)</option>
  <option value="l">Liter (L)</option>
  <option value="ft3">Cubic foot (ft³)</option>
  <option value="gal">Gallon (US)</option>
</select>

<label>To:</label>
<select id="toVolume">
  <option value="m3">Cubic meter (m³)</option>
  <option value="bbl">Barrel (bbl)</option>
  <option value="stb">Stock Tank Barrel (STB)</option>
  <option value="l">Liter (L)</option>
  <option value="ft3">Cubic foot (ft³)</option>
  <option value="gal">Gallon (US)</option>
</select>

<br><br>

<button type="button" onclick="convertVolume()">Convert</button>

---

## Result

<div id="volumeResult"></div>

<script src="/assets/js/volume-units.js"></script>

