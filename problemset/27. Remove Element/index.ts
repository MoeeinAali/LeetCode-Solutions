function removeElement(nums: number[], val: number): number {
    let left = 0;
    let right = nums.length - 1;
    let counter = nums.length;
    while (left <= right) {
        if (nums[left] === val) {
            const buff = nums[right];
            nums[right] = nums[left];
            nums[left] = buff;
            counter--;
            nums.pop();
            right--;
            if (nums[left] !== val) {
                left++;
            }
        } else {
            left++;
        }
    }
    return counter;
};
