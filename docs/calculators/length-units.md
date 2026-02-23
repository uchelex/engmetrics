# Length Unit Converter

Convert between common engineering length units.

---

## Input

<label>Value:</label>
<input type="number" id="lengthValue" step="any">

<br><br>

<label>From:</label>
<select id="fromUnit">
  <option value="m">Meter (m)</option>
  <option value="km">Kilometer (km)</option>
  <option value="ft">Foot (ft)</option>
  <option value="in">Inch (in)</option>
  <option value="mi">Mile (mi)</option>
</select>

<label>To:</label>
<select id="toUnit">
  <option value="m">Meter (m)</option>
  <option value="km">Kilometer (km)</option>
  <option value="ft">Foot (ft)</option>
  <option value="in">Inch (in)</option>
  <option value="mi">Mile (mi)</option>
</select>

<br><br>

<button type="button" onclick="convertLength()">Convert</button>

---

## Result

<div id="lengthResult"></div>

<script src="/assets/js/length-units.js"></script>

