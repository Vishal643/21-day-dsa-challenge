/**
 * @param {number[]} height
 * @return {number}
 */

// leetcode problem link : https://leetcode.com/problems/container-with-most-water
// Expected T.C = O(n) => n is the length of the array
// Expected S.C = O(1)

var maxArea = function (height) {
	let left = 0,
		right = height.length - 1;

	/*
	Approach - 1: Two Pointer
	O(n) time complexity => n is the length of the array
	O(1) space complexity
    */

	let waterContained = 0;
	while (left < right) {
		const area = (right - left) * Math.min(height[left], height[right]);
		waterContained = Math.max(area, waterContained);
		if (height[left] < height[right]) {
			left++;
		} else {
			right--;
		}
	}

	/*
	Approach - 2: Brute Force
	O(n^2) time complexity => n is the length of the array
	O(1) space complexity
    */

	// for (let i = 0; i < height.length; i++) {
	//     for (let j = i + 1; j < height.length; j++) {
	//         const area = (j - i) * Math.min(height[i], height[j])
	//         waterContained = Math.max(waterContained, area);
	//     }
	// }
	return waterContained;
};
