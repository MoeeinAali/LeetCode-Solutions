// Time Complexity: O(n)
// Space Complexity: O(n)

function longestConsecutive(nums: number[]): number {
    const set = new Set(nums);
    let longest = 0;
    for (const num of set){
        if (!set.has(num - 1)){
            let length = 1; 
            while (set.has(num+length)){
                length++;
            }
            longest = Math.max(longest, length);
        }
    }
    return longest;
};