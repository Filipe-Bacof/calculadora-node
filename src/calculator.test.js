const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    beforeEach(() => {
        calculator = new Calculator();
    });

    test('should add two numbers', () => {
        expect(calculator.add(5, 3)).toBe(8);
    });

    test('should subtract two numbers', () => {
        expect(calculator.subtract(5, 3)).toBe(2);
    });

    test('should multiply two numbers', () => {
        expect(calculator.multiply(5, 3)).toBe(15);
    });

    test('should divide two numbers', () => {
        expect(calculator.divide(6, 3)).toBe(2);
    });

    test('should throw error when dividing by zero', () => {
        expect(() => calculator.divide(6, 0)).toThrow('Division by zero is not allowed');
    });

    test('should calculate power of a number', () => {
        expect(calculator.power(2, 3)).toBe(8);
    });

    test('should calculate root of a number', () => {
        expect(calculator.root(16, 2)).toBe(4);
    });

    test('should throw error when root index is zero', () => {
        expect(() => calculator.root(16, 0)).toThrow('Root with index zero is not allowed');
    });
});