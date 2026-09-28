// Time: O(n^2)
// Space: O(1)

function threeSum(nums: number[]): number[][] {
  const length = nums.length;
  const sortedNums = nums.sort((a, b) => a - b);
  const solution: number[][] = [];

  for (let i = 0; i < length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    if (nums[i] > 0) break;

    let left = i + 1;
    let right = length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum === 0) {
        solution.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        while (left < right && nums[left] === nums[left + 1]) {
          left++;
        }
        while (left < right && nums[right] === nums[right - 1]) {
          right--;
        }
        left++;
        right--;
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return solution;
}

nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
