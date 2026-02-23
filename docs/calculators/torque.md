# Torque / Moment Converter

Convert torque between commonly used units.

### How to use
- Enter a numeric value
- Select the input unit
- Click **Convert**
- All equivalent torque values will display below

---

<input type="number" id="torqueValue" placeholder="Enter torque value">
<select id="torqueUnit">
  <option value="Nm">Newton-meter (N·m)</option>
  <option value="kNm">Kilonewton-meter (kN·m)</option>
  <option value="lbfft">Pound-foot (lbf·ft)</option>
  <option value="lbfin">Pound-inch (lbf·in)</option>
  <option value="kgm">Kilogram-meter (kg·m)</option>
</select>

<button onclick="convertTorque()">Convert</button>

<div id="torqueResults"></div>

<script src="../assets/js/torque.js"></script>

