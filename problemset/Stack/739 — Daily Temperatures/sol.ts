function dailyTemperatures(temperatures: number[]): number[] {
  const stack = [];
  const result = new Array<number>(temperatures.length).fill(0);

  function getTopStack(stack: number[]): number {
    return stack[stack.length - 1];
  }

  for (let i = 0; i < temperatures.length; i++) {
    if (
      stack.length === 0 ||
      temperatures[getTopStack(stack)] >= temperatures[i]
    ) {
      stack.push(i);
    } else {
      while (
        stack.length > 0 &&
        temperatures[getTopStack(stack)] < temperatures[i]
      ) {
        const top = stack.pop();
        result[top!] = i - top!;
      }
      stack.push(i);
    }
  }

  return result;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures));
