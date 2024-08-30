const express = require('express');
const Calculator = require('./calculator');

const router = express.Router();
const calculator = new Calculator();

router.post('/add', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.add(a, b);
    res.json({ result });
});

router.post('/subtract', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.subtract(a, b);
    res.json({ result });
});

router.post('/multiply', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.multiply(a, b);
    res.json({ result });
});

router.post('/divide', (req, res) => {
    const { a, b } = req.body;
    try {
        const result = calculator.divide(a, b);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post('/power', (req, res) => {
    const { a, b } = req.body;
    const result = calculator.power(a, b);
    res.json({ result });
});

router.post('/root', (req, res) => {
    const { a, b } = req.body;
    try {
        const result = calculator.root(a, b);
        res.json({ result });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;