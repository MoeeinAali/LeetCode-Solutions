// Time Complexity: O(n * k log k)
// Space Complexity: O(n * k)

function groupAnagrams(strs: string[]): string[][] {
    const sortedStrs = strs.map(str => str.split('').sort().join(''));
    const map = new Map<string, string[]>();
    for (let i = 0; i < strs.length; i++) {
        const sortedStr = sortedStrs[i];
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        map.get(sortedStr)!.push(strs[i]);
    }
    return Array.from(map.values());
}