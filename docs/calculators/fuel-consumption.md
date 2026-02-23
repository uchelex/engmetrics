# Fuel Consumption Calculator

Convert between **fuel consumption units (volume per distance or time)** used in drilling rigs, generators, transport, and field operations.

## How to use
1. Enter a numeric value.
2. Select the **input consumption unit**.
3. Select the **output consumption unit**.
4. Click **Convert**.

---

## Supported Units
- **L/100 km**
- **L/km**
- **gal/mi (US)**
- **L/hr**
- **gal/hr (US)**

---

## Calculator

<input id="fcValue" type="number" placeholder="Enter value" />

<select id="fcFrom">
  <option value="l100km">L/100 km</option>
  <option value="lkm">L/km</option>
  <option value="galmi">gal/mi (US)</option>
  <option value="lph">L/hr</option>
  <option value="gph">gal/hr (US)</option>
</select>

<select id="fcTo">
  <option value="l100km">L/100 km</option>
  <option value="lkm">L/km</option>
  <option value="galmi">gal/mi (US)</option>
  <option value="lph">L/hr</option>
  <option value="gph">gal/hr (US)</option>
</select>

<button onclick="convertFuelConsumption()">Convert</button>

<div id="fcResult"></div>

<script src="../assets/js/fuel-consumption.js"></script>

---

## Engineering Notes
- Fuel consumption expresses **how much fuel is used** over distance or time.
- Common for **rig generators**, **diesel pumps**, and **cost estimation**.
- Lower values indicate **better fuel economy**.

