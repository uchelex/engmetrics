# Median, Quartiles & IQR Calculator

This calculator computes the **median**, **first quartile (Q1)**,
**third quartile (Q3)**, and **interquartile range (IQR)**.

**Input format:**
- Values separated by commas
- Spaces are allowed and ignored

**Example:**  
`3, 7, 8, 5, 12, 14, 21, 13, 18`

<div class="calculator-box">

  <label for="dataValues">Enter data values:</label><br>
  <input type="text" id="dataValues" placeholder="e.g. 3, 7, 8, 5, 12" size="40">

  <br><br>

  <button onclick="calculateQuartiles()">Calculate</button>

  <div id="result" style="margin-top: 15px;"></div>

</div>

<script src="/assets/js/quartiles.js"></script>

