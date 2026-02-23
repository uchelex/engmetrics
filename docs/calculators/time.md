# Time Unit Converter

Convert between common **SI, engineering, and field time units** used in petroleum engineering, data transmission, drilling operations, and production analysis.

## How to use
1. Enter a numeric value.
2. Select the **input time unit**.
3. Select the **output time unit**.
4. Click **Convert**.

---

## Supported Units
- **Seconds (s)**
- **Minutes (min)**
- **Hours (hr)**
- **Days (day)**
- **Weeks (wk)**
- **Years (yr)** (365 days)

---

## Calculator

<input id="timeValue" type="number" placeholder="Enter value" />

<select id="timeFrom">
  <option value="s">Seconds</option>
  <option value="min">Minutes</option>
  <option value="hr">Hours</option>
  <option value="day">Days</option>
  <option value="wk">Weeks</option>
  <option value="yr">Years</option>
</select>

<select id="timeTo">
  <option value="s">Seconds</option>
  <option value="min">Minutes</option>
  <option value="hr">Hours</option>
  <option value="day">Days</option>
  <option value="wk">Weeks</option>
  <option value="yr">Years</option>
</select>

<button onclick="convertTime()">Convert</button>

<div id="timeResult"></div>

<script src="../assets/js/time.js"></script>

---

## Engineering Notes
- Useful for **data transfer rate**, **drilling time estimation**, **production decline analysis**, and **well test interpretation**.
- Year is taken as **365 days** (not leap-year corrected).

