# Power Calculator

Calculate mechanical power from energy and time and convert between units.

---

<label>Energy / Work Value:</label>
<input type="number" id="powerEnergy" placeholder="Enter energy/work value">

<label>Energy Unit:</label>
<select id="powerEnergyUnit">
  <option value="J">Joule (J)</option>
  <option value="kJ">Kilojoule (kJ)</option>
  <option value="kWh">Kilowatt-hour (kWh)</option>
  <option value="BTU">BTU</option>
  <option value="ftlb">Foot-pound (ft·lbf)</option>
  <option value="Nm">Newton-meter (N·m)</option>
</select>

<label>Time (seconds):</label>
<input type="number" id="powerTime" placeholder="Enter time in seconds">

<button onclick="calculatePower()">Calculate Power</button>

<div id="powerResults"></div>

<script src="../assets/js/power.js"></script>

