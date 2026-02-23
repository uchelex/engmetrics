# Histogram Calculator

This tool plots a **histogram** to visualize the distribution of a dataset.

**Input format:**
- Numbers separated by commas
- Spaces are allowed

**Example:**  
`2, 4, 4, 5, 6, 6, 6, 7, 8`
<div class="calculator-box">

  <label for="dataValues">Enter data values:</label><br>
  <input type="text" id="dataValues" placeholder="e.g. 2, 4, 4, 5, 6" size="40">

  <br><br>

  <label for="bins">Number of bins:</label>
  <input type="number" id="bins" value="5" min="1">

  <br><br>

  <button onclick="drawHistogram()">Plot Histogram</button>

  <canvas id="histogramCanvas" width="600" height="400"
          style="border:1px solid #ccc; margin-top:15px;"></canvas>

  <div id="result" style="margin-top: 10px;"></div>

</div>

<script src="/assets/js/histogram.js"></script>

