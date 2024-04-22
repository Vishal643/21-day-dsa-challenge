/**
 * @param {string} s
 * @return {string}
 */

//  leetcode problem link : https://leetcode.com/problems/reverse-vowels-of-a-string

// Expected T.C = O(n) => n is the length of the string
// Expected S.C = O(n) => n is the length of the string

var reverseVowels = function (s) {
	let left = 0,
		right = s.length - 1;
	let tempString = s.split('');
	while (left < right) {
		if (isVowel(tempString[left]) && isVowel(tempString[right])) {
			swap(left, right, tempString);
			left++;
			right--;
		} else if (!isVowel(tempString[left]) && !isVowel(tempString[right])) {
			left++;
			right--;
		} else if (!isVowel(tempString[left])) {
			left++;
		} else {
			right--;
		}
	}
	return tempString.join('');
};

function isVowel(char) {
	if (['a', 'e', 'i', 'o', 'u'].includes(char.toLowerCase())) {
		return true;
	}
	return false;
}

function swap(idx1, idx2, tempString) {
	let temp = tempString[idx1];
	tempString[idx1] = tempString[idx2];
	tempString[idx2] = temp;
}

// Test case
const output = reverseVowels("hello")
console.log(output);
