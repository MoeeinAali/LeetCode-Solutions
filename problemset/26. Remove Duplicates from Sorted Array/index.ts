function removeDuplicates(nums: number[]): number {
    let index = 1;
    let ptr = 1;
    let cnt = 1;
    while (ptr <= nums.length - 1) {
        if (nums[ptr - 1] === nums[ptr]) {
            ptr++;
        } else {
            cnt++;
            nums[index] = nums[ptr];
            index++;
            ptr++;
        }
    }

    return cnt;
};
