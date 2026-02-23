# Fuel Efficiency Converter

Convert between **fuel efficiency units (distance per volume)** commonly used for vehicles, field transport, and logistics planning.

## How to use
1. Enter a numeric value.
2. Select the **input efficiency unit**.
3. Select the **output efficiency unit**.
4. Click **Convert**.

---

## Supported Units
- **km/L**
- **m/L**
- **mile/L**
- **mpg (US)**
- **mpg (UK)**

---

## Calculator

<input id="feValue" type="number" placeholder="Enter value" />

<select id="feFrom">
  <option value="kml">km/L</option>
  <option value="ml">m/L</option>
  <option value="mil">mile/L</option>
  <option value="mpg_us">mpg (US)</option>
  <option value="mpg_uk">mpg (UK)</option>
</select>

<select id="feTo">
  <option value="kml">km/L</option>
  <option value="ml">m/L</option>
  <option value="mil">mile/L</option>
  <option value="mpg_us">mpg (US)</option>
  <option value="mpg_uk">mpg (UK)</option>
</select>

<button onclick="convertFuelEfficiency()">Convert</button>

<div id="feResult"></div>

<script src="../assets/js/fuel-efficiency.js"></script>

---

## Engineering Notes
- Fuel efficiency expresses **how far you travel per unit of fuel**.
- Common in **transport logistics** and **vehicle performance analysis**.
- Higher values indicate **better efficiency**.

