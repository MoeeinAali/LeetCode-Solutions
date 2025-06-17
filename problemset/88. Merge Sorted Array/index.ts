/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (k > -1) {
        if (j < 0 || nums1[i] >= nums2[j]) {
            nums1[k] = nums1[i];
            i -= 1;
        } else if (i < 0 || nums1[i] <= nums2[j]) {
            nums1[k] = nums2[j];
            j -= 1;
        }
        k -= 1;
    }


};
