# Speed / Velocity Converter

Convert between commonly used speed and velocity units.

---

### How to use
- Enter a speed value
- Select the input unit
- Click **Convert**
- All equivalent speed values will be displayed

---

<label>Speed Value:</label>
<input type="number" id="speedValue" step="any" placeholder="Enter speed">

<label>Unit:</label>
<select id="speedUnit">
  <option value="ms">m/s (SI)</option>
  <option value="kmh">km/h (SI)</option>
  <option value="fts">ft/s (Engineering)</option>
  <option value="ftmin">ft/min (Engineering)</option>
  <option value="mph">mph (Field)</option>
  <option value="knot">knot (Field)</option>
  <option value="ins">in/s (Equipment)</option>
</select>

<button onclick="convertSpeed()">Convert</button>

<div id="speedResults"></div>

<script src="../assets/js/speed.js"></script>

