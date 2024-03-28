const express = require('express');
const app = express();
const PORT = 3000;

// Addition endpoint
app.get('/add', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for addition.' });
    }
    const result = parseFloat(num1) + parseFloat(num2);
    res.json({ result });
});

// Subtraction endpoint
app.get('/subtract', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for subtraction.' });
    }
    const result = parseFloat(num1) - parseFloat(num2);
    res.json({ result });
});

// Multiplication endpoint
app.get('/multiply', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for multiplication.' });
    }
    const result = parseFloat(num1) * parseFloat(num2);
    res.json({ result });
});

// Division endpoint
app.get('/divide', (req, res) => {
    const { num1, num2 } = req.query;
    if (!num1 || !num2 || isNaN(num1) || isNaN(num2)) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for division.' });
    }
    if (parseFloat(num2) === 0) {
        return res.status(400).json({ error: 'Cannot divide by zero.' });
    }
    const result = parseFloat(num1) / parseFloat(num2);
    res.json({ result });
});

// Exponentiation endpoint
app.get('/exponentiation', (req, res) => {
  const { base, exponent } = req.query;
  if (!base || !exponent || isNaN(base) || isNaN(exponent)) {
      return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for base and exponent.' });
  }
  const result = Math.pow(parseFloat(base), parseFloat(exponent));
  res.json({ result });
});
// Square root endpoint
app.get('/sqrt', (req, res) => {
    const { number } = req.query;
    if (!number || isNaN(number)) {
        return res.status(400).json({ error: 'Invalid parameter. Please provide a valid number for square root operation.' });
    }
    const result = Math.sqrt(parseFloat(number));
    res.json({ result });
});

// Modulo endpoint
app.get('/modulo', (req, res) => {
    const { dividend, divisor } = req.query;
    if (!dividend || !divisor || isNaN(dividend) || isNaN(divisor) || parseFloat(divisor) === 0) {
        return res.status(400).json({ error: 'Invalid parameters. Please provide valid numbers for dividend and non-zero divisor.' });
    }
    const result = parseFloat(dividend) % parseFloat(divisor);
    res.json({ result });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
