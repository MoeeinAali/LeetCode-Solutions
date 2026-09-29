function trap(height: number[]): number {
  let sum = 0;

  const len = height.length;

  const maxLeft = new Array(len).fill(height[0]);
  const maxRight = new Array(len).fill(height[len - 1]);

  for (let i = 1; i < len; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], height[i - 1]);
  }

  for (let i = len - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], height[i + 1]);
  }

  for (let i = 0; i < len; i++) {
    const minHeight = Math.min(maxLeft[i], maxRight[i]);
    if (minHeight > height[i]) {
      sum += minHeight - height[i];
    }
  }
  return sum;
}
