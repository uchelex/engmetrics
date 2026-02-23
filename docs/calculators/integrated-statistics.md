# Integrated Engineering Calculator

Enter data as **comma-separated values**  
Example: `3400, 3450, 3500, 3520, 3550`

---

## Data Input

<label>Dataset type:</label>
<select id="dataType" onchange="updateUnits()">
  <option value="pressure">Pressure</option>
  <option value="density">Mud Weight</option>
  <option value="production">Production Rate</option>
</select>

<p>
<strong id="dataLabel">Pressure</strong>
(<span id="unitLabel">psi</span>)
</p>

<textarea id="dataValues" rows="4" style="width:100%;"></textarea>

<button type="button" onclick="runIntegratedStats()">Run Analysis</button>

---

## Results

<div id="statsResult"></div>

<canvas id="histogramCanvas" width="600" height="350" style="border:1px solid #ccc;"></canvas>

---

## Advanced Analysis

<label>Decline model:</label>
<select id="declineModel">
  <option value="exp">Exponential</option>
  <option value="hyp">Hyperbolic</option>
</select>

<br><br>

<button type="button" onclick="exportCSV()">Export CSV</button>
<button type="button" onclick="overlayDeclineCurveButton()">Run Decline Curve</button>
<button type="button" onclick="runRegression()">Run Regression</button>
<button type="button" onclick="generateReport()">Generate Engineering Report (PDF)</button>

---

<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
<script src="/assets/js/integrated.js"></script>

