# Force Calculator (F = m a)

Calculate force using Newton’s Second Law.

---

### How to use
- Enter **mass**
- Select mass unit
- Enter **acceleration**
- Force will be computed automatically

---

<label>Mass:</label>
<input type="number" id="massValue" step="any">

<select id="massUnit">
  <option value="kg">kilogram (kg)</option>
  <option value="lbm">pound-mass (lbm)</option>
</select>

<label>Acceleration:</label>
<input type="number" id="accelValue" step="any">

<select id="accelUnit">
  <option value="ms2">m/s²</option>
  <option value="fts2">ft/s²</option>
</select>

<button onclick="calculateForce()">Calculate Force</button>

<div id="forceResult"></div>

<script src="../assets/js/force-calc.js"></script>

