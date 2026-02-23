# Z-Score & Normalization Calculator

This calculator standardizes data using **z-scores** and performs
**min–max normalization**.

**Input format:**
- Numbers separated by commas
- Spaces are allowed

**Example:**  
`10, 12, 14, 16, 18`

<div class="calculator-box">

  <label for="dataValues">Enter data values:</label><br>
  <input type="text" id="dataValues" placeholder="e.g. 10, 12, 14, 16" size="40">

  <br><br>

  <button onclick="calculateZScores()">Calculate</button>

  <div id="result" style="margin-top: 15px;"></div>

</div>

<script src="/assets/js/zscore.js"></script>


