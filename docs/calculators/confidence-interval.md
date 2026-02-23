# Confidence Interval Calculator (Mean)

This calculator computes the **confidence interval for the population mean**
using the **Student’s t-distribution**.

**Input format:**
- Numbers separated by commas
- Spaces are allowed

**Example:**  
`12.1, 11.8, 12.4, 12.0, 11.9`
<div class="calculator-box">

  <label for="dataValues">Enter data values:</label><br>
  <input type="text" id="dataValues" placeholder="e.g. 12.1, 11.8, 12.4" size="40">

  <br><br>

  <label for="confidence">Confidence level:</label>
  <select id="confidence">
    <option value="0.90">90%</option>
    <option value="0.95" selected>95%</option>
    <option value="0.99">99%</option>
  </select>

  <br><br>

  <button onclick="calculateCI()">Calculate Confidence Interval</button>

  <div id="result" style="margin-top: 15px;"></div>

</div>

<script src="/assets/js/confidence.js"></script>

