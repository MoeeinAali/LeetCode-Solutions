// Time Complexity: O(n log n)
// Space Complexity: O(n)

function topKFrequent(nums: number[], k: number): number[] {
  const map = new Map<number, number>();
  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }
  const sorted = Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  return sorted.slice(0, k).map((item) => item[0]);
}

const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

console.log(topKFrequent(nums, k));
