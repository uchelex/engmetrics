# Work / Energy Calculator

Calculate linear or rotational work and convert energy units.

---

### Linear Work
- Work = Force × Distance
- Force in N or lbf
- Distance in meters or feet

### Rotational Work
- Work = Torque × Angle
- Torque in N·m or lbf·ft
- Angle in radians

---

<label>Work / Energy Value:</label>
<input type="number" id="workValue" placeholder="Enter value">

<label>Unit:</label>
<select id="workUnit">
  <option value="J">Joule (J)</option>
  <option value="kJ">Kilojoule (kJ)</option>
  <option value="kWh">Kilowatt-hour (kWh)</option>
  <option value="BTU">BTU</option>
  <option value="ftlb">Foot-pound (ft·lbf)</option>
  <option value="Nm">Newton-meter (N·m)</option>
</select>

<button onclick="convertWork()">Convert</button>

<div id="workResults"></div>

<script src="../assets/js/work-energy.js"></script>

