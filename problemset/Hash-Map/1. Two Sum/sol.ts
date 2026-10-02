// Time: O(n)
// Space: O(1)

function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement) as number, i];
    }
    map.set(nums[i], i);
  }
  return [];
}

let nums = [3, 2, 4];
let target = 6;
console.log(twoSum(nums, target));

nums = [3, 3];
target = 6;
console.log(twoSum(nums, target));
