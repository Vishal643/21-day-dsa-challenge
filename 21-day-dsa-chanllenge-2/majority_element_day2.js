/**
 * @param {number[]} nums
 * @return {number}
 */

//  leetcode problem link :https://leetcode.com/problems/majority-element

// Expected T.C = O(n) => n is the length of the string
// Expected S.C = O(n) => n is the length of the string

var majorityElement = function (nums) {
	const map = new Map();
	for (let i = 0; i < nums.length; i++) {
		if (map.has(nums[i])) {
			map.set(nums[i], map.get(nums[i]) + 1);
		} else {
			map.set(nums[i], 1);
		}
	}
	let maxVal = Number.MIN_VALUE,
		answer = -1;
	for (const [key, val] of map) {
		if (val > maxVal) {
			maxVal = val;
			answer = key;
		}
	}
	return answer;
};
