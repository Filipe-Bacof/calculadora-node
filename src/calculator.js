class Calculator {
  add(a, b) {
      return a + b;
  }

  subtract(a, b) {
      return a - b;
  }

  multiply(a, b) {
      return a * b;
  }

  divide(a, b) {
      if (b === 0) {
          throw new Error('Division by zero is not allowed');
      }
      return a / b;
  }

  power(a, b) {
    return Math.pow(a, b);
  }

  root(a, b) {
      if (b === 0) {
          throw new Error('Root with index zero is not allowed');
      }
      return Math.pow(a, 1 / b);
  }
}

module.exports = Calculator;