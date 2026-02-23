# Angle Unit Converter

Convert between **SI, engineering, and field angle units** commonly used in surveying, drilling trajectory design, directional drilling, and geophysics.

## How to use
1. Enter a numeric value.
2. Select the **input angle unit**.
3. Select the **output angle unit**.
4. Click **Convert**.

---

## Supported Units
- **Degrees (°)**
- **Radians (rad)**
- **Gradians (gon)**
- **Revolutions (rev)**

---

## Calculator

<input id="angleValue" type="number" placeholder="Enter value" />

<select id="angleFrom">
  <option value="deg">Degrees (°)</option>
  <option value="rad">Radians (rad)</option>
  <option value="gon">Gradians (gon)</option>
  <option value="rev">Revolutions</option>
</select>

<select id="angleTo">
  <option value="deg">Degrees (°)</option>
  <option value="rad">Radians (rad)</option>
  <option value="gon">Gradians (gon)</option>
  <option value="rev">Revolutions</option>
</select>

<button onclick="convertAngle()">Convert</button>

<div id="angleResult"></div>

<script src="../assets/js/angle.js"></script>

---

## Engineering Notes
- **Degrees** are standard in drilling surveys and inclination/azimuth reporting.
- **Radians** are required for most mathematical and numerical models.
- **Gradians** are sometimes used in surveying.
- **Revolutions** are useful for rotary motion analysis.

