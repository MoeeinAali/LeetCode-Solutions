function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let maxWater = 0;

  while (l < r) {
    const currentHeight = Math.min(height[l], height[r]);
    const width = r - l;
    const area = currentHeight * width;

    maxWater = Math.max(maxWater, area);

    if (height[l] < height[r]) {
      l++;
    } else {
      r--;
    }
  }

  return maxWater;
}
