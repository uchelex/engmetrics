# Area Converter

Convert between commonly used area units.

### How to use
- Enter a numeric value
- Select the input unit
- Click **Convert**
- All equivalent area values will display below

---

<input type="number" id="areaValue" placeholder="Enter area value">
<select id="areaUnit">
  <option value="m2">Square meters (m²)</option>
  <option value="ft2">Square feet (ft²)</option>
  <option value="in2">Square inches (in²)</option>
  <option value="acre">Acres</option>
  <option value="ha">Hectares (ha)</option>
</select>

<button onclick="convertArea()">Convert</button>

<div id="areaResults"></div>

<script src="../assets/js/area.js"></script>

