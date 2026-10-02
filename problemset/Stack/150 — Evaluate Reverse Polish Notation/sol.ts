function evalRPN(tokens: string[]): number {
  const OPERATORS = ["+", "-", "*", "/"];
  const stack: (number | string)[] = [];

  for (let i = 0; i < tokens.length; i++) {
    if (!OPERATORS.includes(tokens[i])) {
      stack.push(Number(tokens[i]));
    } else {
      const b = stack.pop() as number;
      const a = stack.pop() as number;
      switch (tokens[i]) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          Math.trunc(stack.push(a / b));
          break;
      }
    }
  }
  return stack.pop() as number;
}

const tokens = ["4", "13", "5", "/", "+"];

console.log(evalRPN(tokens));
