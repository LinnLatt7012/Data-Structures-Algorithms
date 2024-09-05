function missingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((acc, num) => acc + num, 0);
    
    return expectedSum - actualSum;
}
function missingNumberXOR(nums) {
    let xor = nums.length; // Start with n (because of the full range from 0 to n)
    console.log('first',xor)
    for (let i = 0; i < nums.length; i++) {
        xor ^= i;      // XOR with index
        console.log(xor)
        xor ^= nums[i]; // XOR with the array value
        console.log(xor)

    }
    
    return xor;
}
// Example Usage:
const nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2
console.log(missingNumberXOR(nums)); // Output: 2
