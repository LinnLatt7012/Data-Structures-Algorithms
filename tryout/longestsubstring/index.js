function lengthOfLongestSubstring(s) {
    let map = new Map();
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        if (map.has(s[right])) {
            left = Math.max(left, map.get(s[right]) + 1);
        }
        map.set(s[right], right);
        maxLength = Math.max(maxLength, right - left + 1);
        console.log(`${s[right]}:r=${right}:l=${left}:m=${maxLength}`)
    }
    console.log(map)
    return maxLength;
}

// Example Usage:
const s = "abceabcbbe";
console.log(lengthOfLongestSubstring(s));