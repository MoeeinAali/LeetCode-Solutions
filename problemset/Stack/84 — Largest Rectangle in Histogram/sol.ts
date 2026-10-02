// Time Complexity: O(n)
// Space Complexity: O(n)

function largestRectangleArea(heights: number[]): number {
  const stack: number[] = [];
  let maxArea = 0;

  heights.push(0);

  for (let i = 0; i < heights.length; i++) {
    while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
      const index = stack.pop()!;
      const height = heights[index];
      const width =
        stack.length === 0 ? i - 0 + 1 : i - stack[stack.length - 1] - 1;
      maxArea = Math.max(maxArea, height * width);
    }

    stack.push(i);
  }

  return maxArea;
}

const heights = [2, 1, 5, 6, 2, 3];
console.log(largestRectangleArea(heights));
