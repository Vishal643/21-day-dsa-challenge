/**
 * @param {number[]} nums
 * @return {boolean}
 */

//  leetcode problem link : https://leetcode.com/problems/increasing-triplet-subsequence

// Expected T.C = O(n) => n is the length of the string
// Expected S.C = O(1)

var increasingTriplet = function (nums) {
	let a = Number.POSITIVE_INFINITY,
		b = Number.POSITIVE_INFINITY,
		c = Number.POSITIVE_INFINITY;

	for (let i = 0; i < nums.length; i++) {
		if (a >= nums[i]) {
			a = nums[i];
		} else if (b >= nums[i]) {
			b = nums[i];
		} else if (c >= nums[i]) {
			return true;
		}
	}
	return false;
};
