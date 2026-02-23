# Force Converter

Convert between commonly used force units.

### How to use
- Enter a numeric value
- Select the input unit
- Click **Convert**
- All equivalent force values will display below

---

<input type="number" id="forceValue" placeholder="Enter force value">
<select id="forceUnit">
  <option value="N">Newton (N)</option>
  <option value="kN">Kilonewton (kN)</option>
  <option value="lbf">Pound-force (lbf)</option>
  <option value="kgf">Kilogram-force (kgf)</option>
  <option value="dyne">Dyne</option>
</select>

<button onclick="convertForce()">Convert</button>

<div id="forceResults"></div>

<script src="../assets/js/force.js"></script>

