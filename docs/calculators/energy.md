# Energy Conversion Calculator

Convert energy between Joules, Calories, kWh, BTU, MMBTU, and ft·lb.

### How to use
- Enter a numeric value
- Select the input unit
- Click **Convert**
- All equivalent energy units will display below

---

<input type="number" id="energyValue" placeholder="Enter energy value">
<select id="energyUnit">
  <option value="J">Joule (J)</option>
  <option value="cal">Calorie (cal)</option>
  <option value="kWh">kWh</option>
  <option value="BTU">BTU</option>
  <option value="MMBTU">MMBTU</option>
  <option value="ftlb">ft·lb</option>
</select>

<button onclick="convertEnergy()">Convert</button>

<div id="energyResults"></div>

<script src="../assets/js/energy.js"></script>

